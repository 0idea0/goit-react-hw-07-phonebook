import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactList.module.css';
import {
  fetchContactsList,
  deleteContactsOps,
} from '../../redux/contacts/contact-operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => {
    return state.contacts.contacts;
  });

  const contactsList = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });
  fetchContactsList();
  useEffect(() => dispatch(fetchContactsList()), [dispatch]);
  return (
    <div className={s.mainContainer}>
      <ul>
        <p className={s.ContactList}>Contact List</p>
        {contactsList.map(el => {
          return (
            <li className={s.newContact} key={el.id}>
              <p className={s.newContactName}>{el.name + ' : ' + el.phone} </p>

              <button
                className={s.btn}
                onClick={event => {
                  console.log();
                  dispatch(deleteContactsOps(event.target.id));
                }}
                id={el.id}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactsList;
