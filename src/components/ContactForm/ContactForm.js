import React, { useState } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook-actions.js';

import css from './ContactForm.module.css';
import ContactFormName from './ContactFormName';
import ContactFormNumber from './ContactFormNumber';

import Button from '@mui/material/Button';

function ContactForm({ phonebookContacts, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  //onChangeInput
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  //onSubmitForm
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <form className={css.ContactFormWrapper} onSubmit={handleSubmit}>
      <ContactFormName
        nameInputId={nameInputId}
        title="name"
        value={name}
        onChange={handleChange}
        className="FormName"
      />
      <ContactFormNumber
        numberInputId={numberInputId}
        title="number"
        value={number}
        onChange={handleChange}
        className="FormNumber"
      />
      <p>
        <Button variant="outlined" type="submit">
          Send
        </Button>
      </p>
    </form>
  );
}

const mapStateToProps = ({ contacts: { phonebookContacts } }) =>
  phonebookContacts;

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
