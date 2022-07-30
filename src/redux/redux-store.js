import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let reducersPack = combineReducers({
      profilePage: profileReducer,
      messagesPage: dialogsReducer,
      sidebar: sidebarReducer,
      usersPage: usersReducer, 
      auth: authReducer,
});

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;