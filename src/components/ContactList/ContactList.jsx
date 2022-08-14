import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import ContactListItem from './ContactListItem';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        // <ContactListItem
        //   key={id}
        //   name={name}
        //   number={number}
        //   onDeleteContact={() => onDeleteContact(id)}
        // />
        <li className={styles.item} key={id}>
          <p className={styles.contact}>
            {name}&emsp;
            {number}
          </p>
          <button
            className={styles.btnDeleteContact}
            type="submit"
            onClick={() => dispatch(actions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
