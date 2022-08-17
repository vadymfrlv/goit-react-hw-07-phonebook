import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { getExistContacts, addContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
  [getExistContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getExistContacts.pending]: () => true,
  [getExistContacts.fulfilled]: () => false,
  [getExistContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getExistContacts.pending]: () => null,
  [getExistContacts.rejected]:
    () =>
    (_, { payload }) =>
      payload,
});

export const contactsReducer = combineReducers({ items, filter, isLoading, error });
