import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../contacts/contact-actions';
import {
  fetchContactsList,
  deleteContactsOps,
  addContact,
} from '../contacts/contact-operations';

const contacts = createReducer([], {
  [fetchContactsList.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContactsOps.fulfilled]: (state, action) => {
    return state.filter(el => el.id !== action.payload.id);
  },
});

const error = createReducer(null, {
  [fetchContactsList.rejected]: (_, action) => action.payload,
  [fetchContactsList.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});

const filter = createReducer('', {
  [actions.setFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  contacts,
  error,
  filter,
});
