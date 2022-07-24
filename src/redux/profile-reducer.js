const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
      postsData: [
            { id: 1, message: 'Hi, how are you?', likes: 300, },
            { id: 2, message: 'It\'s my first post', likes: 1, },
      ],
      newPostText: "Hello, I am Artem!",
}

const profileReducer = (state = initialState, action) => {
      switch (action.type) {
            case ADD_POST: {
                  return {
                        ...state,
                        postsData: [...state.postsData, { id: 3, message: state.newPostText, }],
                        newPostText: '',
                  };
            }
            case UPDATE_NEW_POST_TEXT: {
                  return {
                        ...state,
                        newPostText: action.newText,
                  };
            }
            default:
                  return state;
      }
}

export const addPostActionCreator = () => {
      return {
            type: ADD_POST,
      }
}

export const updateNewPostTextActionCreator = (text) => {
      return {
            type: UPDATE_NEW_POST_TEXT,
            newText: text,
      }
}

export default profileReducer;