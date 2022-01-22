/* import React from 'react';

import InputForm from './components/InputForm/InputForm';
import Filter from './components/Filter/Filter';
import Phonebook from './components/Phonebook/Phonebook.container';
import Container from './components/Container/Container';

const App = () => (
  <>
    <Container title="Phonebook">
      <InputForm />
    </Container>
    <Container title="Contacts">
      <Filter />
      <Phonebook />
    </Container>
  </>
);

export default App;
 */

import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <>
      <Container className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}

export default App;
