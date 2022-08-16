import axios from 'axios';

axios.defaults.baseURL = 'https://62fba869abd610251c0e8583.mockapi.io/';

const getContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

const getContactById = async id => {
  const response = await axios.get(`/contacts/${id}`);
  return response.data;
};

const addContact = async ({ name, number }) => {
  const response = await axios.post('/contacts', { name, SVGAnimatedNumber });
  return response.data;
};

const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export { getContacts, getContactById, addContact, deleteContact };
