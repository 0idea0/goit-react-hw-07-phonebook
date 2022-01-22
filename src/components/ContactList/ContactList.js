import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import s from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact, filter, onContactFetch }) => {
  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };
  const contactArr = getVisibleContacts(contacts, filter);

  useEffect(() => {
    onContactFetch();
  }, [onContactFetch]);

  return (
    <>
      <ul className={s.ContactList}>
        {contactArr &&
          contactArr.map(({ id, name, number }) => (
            <li key={id}>
              {name} {number}
              &ensp;
              <Button
                variant="outlined"
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </Button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContactList;
