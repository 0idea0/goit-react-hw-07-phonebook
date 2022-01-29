import s from './ContactForm.module.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contact-operations';

function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState(null);
  const contacts = useSelector(data => data.contacts.contacts);

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNumber = e => {
    setNumber(e.target.value);
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const isIncluded = contacts.some(el => el.name === name);

        if (isIncluded) {
          alert('This name already exist in your contacts!');
          return;
        }
        dispatch(addContact({ name, number }));
      }}
      className={s.mainForm}
    >
      <div className={s.inputContainer}>
        <label className={s.labelName} htmlFor="text">
          Name
        </label>
        <input
          className={s.inputName}
          onChange={onChangeName}
          label="last"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter Name"
        />
      </div>
      <div className={s.inputContainer}>
        <label className={s.labelName} htmlFor="tel">
          Number
        </label>
        <input
          className={s.inputName}
          onChange={onChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter Number"
        />
      </div>
      <button className={s.buttonAddContact} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
