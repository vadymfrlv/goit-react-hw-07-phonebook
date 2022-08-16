import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contacts-actions';
import { getContacts, addContact, deleteContact } from './contacts-operations';

const items = createReducer([], {
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
});

const filter = createReducer('', {
  [changeFilter]: (state, { payload }) => [...state, payload],
});

const isLoading = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [getContacts.pending]: () => null,
  [getContacts.rejected]:
    () =>
    (_, { payload }) =>
      payload,
});

export const contactsReducer = combineReducers({ items, filter, isLoading, error });
