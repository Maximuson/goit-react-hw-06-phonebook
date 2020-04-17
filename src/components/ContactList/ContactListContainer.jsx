import { connect } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import ContactList from './ContactList';

const mapDisaptchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDisaptchToProps)(ContactList);
