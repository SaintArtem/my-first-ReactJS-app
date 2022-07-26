const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
      users: [],
      pageSize: 20,
      totalUsersCount: 0,
      currentPage: 3,
      isFetching: false,
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
                        users: [...action.users] //[...state.users, ...action.users]
                  }
            case SET_CURRENT_PAGE:
                  return {
                        ...state,
                        currentPage: action.currentPage,
                  }
            case SET_TOTAL_USERS_COUNT:
                  return {
                        ...state,
                        totalUsersCount: action.totalUsersCount,
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

export const setCurrentPageActionCreator = (currentPage) => {
      return {
            type: SET_CURRENT_PAGE,
            currentPage: currentPage,
      }
}

export const setTotalUsersCountActionCreator = (totalCount) => {
      return {
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount: totalCount,
      }
}

export default usersReducer;