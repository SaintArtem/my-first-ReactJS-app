import { connect } from "react-redux/es/exports";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from "../../redux/users-reducer";
import Users from './Users';

let mapStateToProps = (state) => {
      return {
            users: state.usersPage.users
      }
};
let mapDispatchToProps = (dispatch) => {
      return {
            follow: (userId) => {
                  dispatch(followActionCreator(userId));
            },
            unfollow: (userId) => {
                  dispatch(unfollowActionCreator(userId));
            },
            setUsers: (users) => {
                  dispatch(setUsersActionCreator(users));
            },
      }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;