import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import slideTransitions from '../../transitions/slide.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  const contactItems = contacts.map(({ id, name, number }) => {
    const handleDelete = () => {
      deleteContact(id);
    };
    return (
      <CSSTransition key={id} classNames={slideTransitions} timeout={200}>
        <li key={id}>
          <Contact
            handleDelete={handleDelete}
            id={id}
            name={name}
            number={number}
          />
        </li>
      </CSSTransition>
    );
  });
  return <TransitionGroup component="ul">{contactItems}</TransitionGroup>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
