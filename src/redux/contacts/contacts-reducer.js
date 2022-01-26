import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  contactDeleteRequest,
  contactDeleteSuccess,
  contactDeleteError,
} from './contact-actions';

export const contactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,

  [addContactSuccess]: (state, { payload }) => [...state, payload],

  [contactDeleteSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [contactDeleteRequest]: () => true,
  [contactDeleteSuccess]: () => false,
  [contactDeleteError]: () => false,
});
