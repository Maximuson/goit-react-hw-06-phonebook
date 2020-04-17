import { connect } from 'react-redux';
import { addContact, changeFilter, deleteContact } from '../../redux/actions';
import App from './App';

const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(addContact(contact)),
  changeFilter: filter => dispatch(changeFilter(filter)),
  deleteContact: contactId => dispatch(deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
