/* import { useDispatch } from 'react-redux'
import { contactsFilter } from '../../redux/filter/filter-actions'
import s from './ContactFilter.module.css'

export const ContactFilter = () => {
  const dispatch = useDispatch()
  const onChange = (filter) => dispatch(contactsFilter(filter))

  return (
    <label className={s.filterInputBox}>
      <input
        className={s.filterInput}
        placeholder="Find contacts by name"
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  )
} */

import * as actions from '../../redux/contacts/contact-actions';
import { useDispatch } from 'react-redux';
import s from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.mainContainer}>
      <div className={s.inputContainer}>
        <label className={s.labelName} htmlFor="Filter">
          Find contact by name
        </label>
        <input
          className={s.inputName}
          onChange={e => dispatch(actions.setFilter(e.target.value))}
          type="text"
          name="filter"
          placeholder="Filter"
        />
      </div>
    </div>
  );
};

export default ContactFilter;
