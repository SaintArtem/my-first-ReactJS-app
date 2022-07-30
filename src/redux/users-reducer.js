import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING_IN_PROGRESS';

let initialState = {
      users: [],
      pageSize: 20,
      totalUsersCount: 0,
      currentPage: 3,
      isFetching: true,
      followingInProgress: [],
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
            case TOGGLE_IS_FETCHING:
                  return {
                        ...state,
                        isFetching: action.isFetching,
                  }
            case TOGGLE_FOLLOWING_IN_PROGRESS:
                  return {
                        ...state,
                        followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId),
                  }
            default:
                  return state;
      };
};

export const followSuccess = (userId) => {
      return {
            type: FOLLOW,
            userId: userId,
      }
}

export const unfollowSuccess = (userId) => {
      return {
            type: UNFOLLOW,
            userId: userId,
      }
}

export const setUsers = (users) => {
      return {
            type: SET_USERS,
            users: users,
      }
}

export const setCurrentPage = (currentPage) => {
      return {
            type: SET_CURRENT_PAGE,
            currentPage: currentPage,
      }
}

export const setTotalCount = (totalCount) => {
      return {
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount: totalCount,
      }
}

export const toggleIsFetching = (isFetching) => {
      return {
            type: TOGGLE_IS_FETCHING,
            isFetching: isFetching,
      }
}

export const toggleFollowingInProgress = (isFetching, userId) => {
      return {
            type: TOGGLE_FOLLOWING_IN_PROGRESS,
            isFetching: isFetching,
            userId: userId,
      }
}

// Thunk

export const getUsersTC = (currentPage, pageSize) => {
      return (dispatch) => {
            dispatch(toggleIsFetching(true));
            userAPI.getUsers(currentPage, pageSize).then(data => {
                  dispatch(toggleIsFetching(false));
                  dispatch(setUsers(data.items));
                  dispatch(setTotalCount(data.totalCount));
            });
      }
}

export const unfollow = (userId) => {
      return (dispatch) => {
            dispatch(toggleFollowingInProgress(true, userId));
            userAPI.unfollowUser(userId).then(data => {
                  if (data.resultCode === 0) {
                        dispatch(unfollowSuccess(userId));
                  }
                  dispatch(toggleFollowingInProgress(false, userId));
            })
      }
}

export const follow = (userId) => {
      return (dispatch) => {
            dispatch(toggleFollowingInProgress(true, userId));
            userAPI.followUser(userId).then(data => {
                  if (data.resultCode === 0) {
                        dispatch(followSuccess(userId));
                  }
                  dispatch(toggleFollowingInProgress(false, userId));
            })
      }
}

export default usersReducer;