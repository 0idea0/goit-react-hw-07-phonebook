import { contactsFilter } from '../filter/filter-actions';
import { createReducer } from '@reduxjs/toolkit';

export const filterReducer = createReducer('', {
  [contactsFilter]: (state, { payload }) => (state = payload),
});
