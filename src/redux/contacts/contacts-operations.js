import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsAPI';

export const getExistContacts = createAsyncThunk(
  'contacts/getExistContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await API.getExistContacts();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkApi) => {
    try {
      const contact = await API.addContact({ name, phone });
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
  try {
    const contact = await API.deleteContact(id);
    return contact;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as API from '../../services/contactsAPI';

// export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
//   const contacts = await API.getContacts();
//   return contacts;
// });

// export const addContact = createAsyncThunk('contacts/addContact', async ({ name, number }) => {
//   const contact = await API.addContact({ name, number });
//   return contact;
// });
// export const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
//   const contact = await API.deleteContact(id);
//   return contact;
// });
