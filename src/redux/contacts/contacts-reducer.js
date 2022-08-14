import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';

// const itemsState = JSON.parse(localStorage.getItem('contacts')) ?? [
//   { id: 'id-1', name: 'Vadym Frolov', number: '093-11-22' },
// ];

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],

  [actions.deleteContact]: (state, { payload }) => [...state.filter(({ id }) => id !== payload)],
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
