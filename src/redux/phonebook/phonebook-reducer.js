import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  getContactError,
  getContactSuccess,
  getContactRequest,
  changeFilter,
} from './phonebook-actions.js';

const phonebookContacts = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [getContactSuccess]: (_, { payload }) => payload,
});

const phonebookFilter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [addContactSuccess]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [deleteContactSuccess]: () => false,
  [getContactRequest]: () => true,
  [getContactError]: () => false,
  [getContactSuccess]: () => false,
});
export default combineReducers({
  phonebookContacts,
  phonebookFilter,
  loading,
});
