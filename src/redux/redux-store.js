import { legacy_createStore as createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let reducersPack = combineReducers({
      profilePage: profileReducer,
      messagesPage: dialogsReducer,
      sidebar: sidebarReducer,
      usersPage: usersReducer, 
});

let store = createStore(reducersPack);

export default store;