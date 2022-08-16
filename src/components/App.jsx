import { useSelector } from 'react-redux';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';
import { getContacts } from 'redux/contacts/contacts-selectors';
import styles from './Filter/Filter.module.css';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <div className={styles.filter}>All contacts: {contacts.length}</div>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts yet. Let's create a new one!" />
        )}
      </Section>
    </div>
  );
}
