const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-NESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
      switch (action.type) {
            case ADD_MESSAGE: {
                  let text = state.newMessageText;
                  return {
                        ...state,
                        dialogsMessages: [...state.dialogsMessages, { id: 4, message: text, }],
                        newMessageText: '',
                  }
            }
            case UPDATE_NEW_MESSAGE_TEXT: {
                  return {
                        ...state,
                        newMessageText: action.newMessageText,
                  }
            }
            default:
                  return state;
      }
}

export const addMessageActionCreator = () => {
      return {
            type: ADD_MESSAGE,
      }
}

export const updateNewMessageTextActionCreator = (text) => {
      return {
            type: UPDATE_NEW_MESSAGE_TEXT,
            newMessageText: text,
      }
}

export default dialogsReducer;