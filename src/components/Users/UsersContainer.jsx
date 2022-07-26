import React from "react";
import * as axios from "axios";
import { connect } from "react-redux/es/exports";
import { followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from "../../redux/users-reducer";
import Users from './Users';

class UsersContainer extends React.Component {
      componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                  this.props.setUsers(response.data.items);
                  this.props.setTotalCount(response.data.totalCount);
            });
      }

      onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                  this.props.setUsers(response.data.items);
            });
      }

      render() {
            return <>
                  {this.props.isFetching ? <img /> : null  }
                  <Users onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                  />
            </>
      }
}

let mapStateToProps = (state) => {
      return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
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
            setCurrentPage: (currentPage) => {
                  dispatch(setCurrentPageActionCreator(currentPage));
            },
            setTotalCount: (totalCount) => {
                  dispatch(setTotalUsersCountActionCreator(totalCount));
            }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);