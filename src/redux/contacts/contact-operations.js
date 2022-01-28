import { fetchContacts, addContacts, deleteContact } from '../../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };
    try {
      const contacts = await addContacts(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchContactsList = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  },
);

export const deleteContactsOps = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const contacts = await deleteContact(id);
    return contacts;
  },
);
