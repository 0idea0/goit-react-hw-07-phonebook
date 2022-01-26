import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from '../redux/filter/filter-reducer.js';
import {
  contactsReducer,
  loading,
} from '../redux/contacts/contacts-reducer.js';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loading,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});
