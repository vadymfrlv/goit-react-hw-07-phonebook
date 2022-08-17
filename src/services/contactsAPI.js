import axios from 'axios';

axios.defaults.baseURL = 'https://62fbdb66abd610251c12791e.mockapi.io';

const getExistContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const getContactById = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};

const addContact = async ({ name, phone }) => {
  const response = await axios.post('/contacts', { name, phone });
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export { getExistContacts, getContactById, addContact, deleteContact };
