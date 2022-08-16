import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsReducer } from './contacts/contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  logger,
  devTools: process.env.NODE_ENV === 'development',
});
