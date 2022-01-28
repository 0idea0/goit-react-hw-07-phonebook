import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/contacts/contacts-reducer';
const store = configureStore({
  reducer: {
    contacts: appReducer,
  },
});

export default store;
