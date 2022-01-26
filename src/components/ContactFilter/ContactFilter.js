import { useDispatch } from 'react-redux';
import { contactsFilter } from '../../redux/filter/filter-actions.js';
import s from './ContactFilter.module.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const onChange = filter => dispatch(contactsFilter(filter));

  return (
    <label className={s.filterInputBox}>
      <input
        className={s.filterInput}
        placeholder="Find contacts by name"
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
};
