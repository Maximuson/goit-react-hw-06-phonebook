import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Section from '../Section/Section';
import ContactList from '../ContactList/ContactListContainer';
import ContactsFilter from '../ContactsFilter/ContactsFilter';
import { CSSTransition } from 'react-transition-group';
import slideTransitions from '../../transitions/slide.module.css';
import filterTransition from '../../transitions/pop.module.css';
import Notification from '../Notification/Notification';

class App extends Component {
  state = {
    didMount: false,
  };
  componentDidMount() {
    this.setState(ps => {
      return {
        didMount: true,
      };
    });
    let contacts = [];

    contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(contact => {
      this.props.addContact(contact);
    });
  }
  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts, null, 2));
    }
  }

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleFilter = e => {
    this.props.changeFilter(e.target.value);
  };
  handleSubmit = (e, contact) => {
    e.preventDefault();
    if (
      this.props.contacts.findIndex(item => item.name === contact.name) !== -1
    ) {
      this.setState({
        contactExistModal: true,
      });
      setTimeout(() => {
        this.setState({ contactExistModal: false });
      }, 2000);
      return false;
    }
    this.props.addContact(contact);
  };

  handleDelete = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { name, number, didMount, contactExistModal } = this.state;
    const { contacts, filter } = this.props;
    const filteredContacts = this.filterContacts(contacts, filter);
    return (
      <div>
        <CSSTransition
          in={didMount}
          classNames={slideTransitions}
          timeout={250}
          key={0}
          appear
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <Section>
          <ContactForm
            name={name}
            number={number}
            handleSubmit={this.handleSubmit}
            handleInput={this.handleInput}
          />
        </Section>
        <Section title="Contacts">
          <CSSTransition
            in={contacts.length > 1}
            classNames={filterTransition}
            timeout={250}
            unmountOnExit
          >
            <ContactsFilter onChange={this.handleFilter} filter={filter} />
          </CSSTransition>

          <ContactList contacts={filteredContacts} />
        </Section>
        <CSSTransition
          in={contactExistModal}
          classNames={filterTransition}
          timeout={250}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
