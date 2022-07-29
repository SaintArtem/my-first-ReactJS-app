import React from "react";
import { connect } from "react-redux/es/exports";
import {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setTotalCount,
      toggleIsFetching,
      toggleFollowingInProgress,
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
      componentDidMount() {
            this.props.toggleIsFetching(true);

            userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                  this.props.toggleIsFetching(false);
                  this.props.setUsers(data.items);
                  this.props.setTotalCount(data.totalCount);
            });
      }

      onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber);
            this.props.toggleIsFetching(true);
            userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                  this.props.toggleIsFetching(false);
                  this.props.setUsers(data.items);
            });
      }

      render() {
            return <>
                  {this.props.isFetching ? <Preloader /> : null}
                  <Users onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                        toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
            followingInProgress: state.usersPage.followingInProgress,
      }
};

export default connect(mapStateToProps, {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setTotalCount,
      toggleIsFetching,
      toggleFollowingInProgress,
})(UsersContainer);