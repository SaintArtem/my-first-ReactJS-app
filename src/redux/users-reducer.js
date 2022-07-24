const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
      users: [
      ]
};

const usersReducer = (state = initialState, action) => {
      switch (action.type) {
            case FOLLOW:
                  return {
                        ...state,
                        users: state.users.map(u => {
                              if (u.id === action.userId) {
                                    return { ...u, followed: true }
                              }
                              return u;
                        })
                  }
            case UNFOLLOW:
                  return {
                        ...state,
                        users: state.users.map(u => {
                              if (u.id === action.userId) {
                                    return { ...u, followed: false }
                              }
                              return u;
                        })
                  }
            case SET_USERS:
                  return {
                        ...state,
                        users: [...state.users, ...action.users]
                  }
            default:
                  return state;
      };
};

export const followActionCreator = (userId) => {
      return {
            type: FOLLOW,
            userId: userId,
      }
}

export const unfollowActionCreator = (userId) => {
      return {
            type: UNFOLLOW,
            userId: userId,
      }
}

export const setUsersActionCreator = (users) => {
      return {
            type: SET_USERS,
            users: users,
      }
}

export default usersReducer;