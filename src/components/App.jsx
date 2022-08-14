import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';
import styles from './Filter/Filter.module.css';
import { useSelector } from 'react-redux';

export default function App() {
  const items = useSelector(state => state.contacts.items);

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
        {items.length > 0 ? (
          <>
            <div className={styles.filter}>All contacts: {items.length}</div>
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
