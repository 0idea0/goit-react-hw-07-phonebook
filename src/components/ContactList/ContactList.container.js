import { connect } from 'react-redux';
import {
  deleteContact,
  contactFetch,
} from '../../redux/phonebook/phonebook-operations';
import ContactList from './ContactList';

const mapStateToProps = ({
  contacts: { phonebookContacts, phonebookFilter },
}) => ({
  contacts: phonebookContacts,
  filter: phonebookFilter,
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
  onContactFetch: () => dispatch(contactFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
