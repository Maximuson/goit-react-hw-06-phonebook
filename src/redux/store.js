import { createStore } from 'redux';

import { devToolsEnhancer } from 'redux-devtools-extension';
import { contactsReducer } from './reducers';

const store = createStore(contactsReducer, devToolsEnhancer());

export default store;
