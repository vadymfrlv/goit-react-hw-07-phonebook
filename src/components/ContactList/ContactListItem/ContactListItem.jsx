import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, phone, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <p className={styles.contact}>
        {name}&emsp;
        {phone}
      </p>
      <button className={styles.btnDeleteContact} type="submit" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
