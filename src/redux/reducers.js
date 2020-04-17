import { addContact, deleteContact, changeFilter } from './actions';
// import Type from './actionTypes';
import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    const { payload } = action;
    state.contacts.push(payload);
  },
  [deleteContact]: (state, action) => {
    const { payload } = action;
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== payload),
    };
  },
  [changeFilter]: (state, action) => {
    const { payload } = action;
    state.filter = payload;
  },
});

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Type.ADD_CONTACT:
//       return {
//         ...state,
//         contacts: [...state.contacts, action.contact],
//       };

//     case Type.CHANGE_FILTER:
//       return {
//         ...state,
//         filter: action.filter,
//       };

//     case Type.DELETE_CONTACT:
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.contactId,
//         ),
//       };
//     default:
//       return state;
//   }
// };
