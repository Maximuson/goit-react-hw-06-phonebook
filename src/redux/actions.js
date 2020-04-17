import { createAction } from '@reduxjs/toolkit';
// import type from './actionTypes';

export const addContact = createAction('ADD_CONTACT');
export const changeFilter = createAction('CHANGE_FILTER');
export const deleteContact = createAction('DELETE_CONTACT');

// export const addContact = contact => ({
//   type: Type.ADD_CONTACT,
//   contact,
// });

// export const changeFilter = filter => ({
//   type: Type.CHANGE_FILTER,
//   filter,
// });

// export const deleteContact = contactId => ({
//   type: Type.DELETE_CONTACT,
//   contactId,
// });
