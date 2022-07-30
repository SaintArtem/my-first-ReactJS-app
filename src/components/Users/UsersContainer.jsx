import React from "react";
import { connect } from "react-redux/es/exports";
import {
      followSuccess,
      unfollowSuccess, 
      setCurrentPage,
      toggleFollowingInProgress,
      getUsersTC, follow, unfollow
} from "../../redux/users-reducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
      componentDidMount() {
            this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
      }

      onPageChanged = (pageNumber) => {
            this.props.getUsersTC(pageNumber, this.props.pageSize);
            this.props.setCurrentPage(pageNumber);
      }

      render() {
            return <>
                  {this.props.isFetching ? <Preloader /> : null}
                  <Users onPageChanged={this.onPageChanged}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        followSuccess={this.props.followSuccess}
                        unfollowSuccess={this.props.unfollowSuccess}
                        followingInProgress={this.props.followingInProgress}
                        follow={this.props.follow}
                        unfollow={this.props.follow}
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
      followSuccess,
      unfollowSuccess,
      setCurrentPage,
      toggleFollowingInProgress,
      getUsersTC,
      follow, unfollow,
})(UsersContainer);