import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
      _state: {
            profilePage: {
                  postsData: [
                        { id: 1, message: 'Hi, how are you?', likes: 300, },
                        { id: 2, message: 'It\'s my first post', likes: 1, },
                  ],
                  newPostText: "Hello, I am Artem!",
            },
            messagesPage: {
                  dialogsUsers: [
                        { id: 1, name: 'Markus', },
                        { id: 2, name: 'Alex', },
                        { id: 3, name: 'Jony', },
                        { id: 4, name: 'Den', },
                  ],

                  dialogsMessages: [
                        { id: 1, message: 'Hey', },
                        { id: 2, message: 'How do you do?', },
                        { id: 3, message: 'Hey, I\'m fine. What about you?', },
                  ],
                  newMessageText: "Wussup",
            },
            sidebar: {
            },
      },

      _callSubscriber() {
            console.log("state changed")
      },

      subscribe(observer) {
            this._callSubscriber = observer;
      },

      getState() {
            return this._state;
      },

      dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
      }
}

export default store;