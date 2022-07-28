import { legacy_createStore as createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducersPack = combineReducers({
      profilePage: profileReducer,
      messagesPage: dialogsReducer,
      sidebar: sidebarReducer,
      usersPage: usersReducer, 
      auth: authReducer,
});

let store = createStore(reducersPack);
window.store = store;

export default store;