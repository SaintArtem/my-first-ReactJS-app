import MyPosts from './MyPosts';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer';
import { connect } from "react-redux/es/exports";

let mapStateToProps = (state) => {
      return {
            profilePage: state.profilePage,
      }
};
let mapDispatchToProps = (dispatch) => {
      return {
            addPost: () => { dispatch(addPostActionCreator()); },
            onPostChange: (text) => {
                  let action = updateNewPostTextActionCreator(text);
                  dispatch(action);
            }
      }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;