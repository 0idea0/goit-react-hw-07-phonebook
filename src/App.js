import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import Filter from './components/ContactFilter/ContactFilter';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1 className="sectionTitle">Phonebook</h1>
      <ContactForm />
      <h2 className="sectionTitle">Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
