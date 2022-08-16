import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector([getContacts, getFilter], (items, filter) => {
  const updItems = items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
  return updItems;
});
