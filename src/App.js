import { useSelector } from 'react-redux';
import { Container } from './components/container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { ContactFilter } from './components/ContactFilter/ContactFilter';
import { getLoading } from './redux/selector';

export default function App() {
  const loading = useSelector(getLoading);

  return (
    <Container>
      <h1>Phoneboock</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactFilter />
      {loading && <h2>Loading...</h2>}
      <ContactList />
    </Container>
  );
}
