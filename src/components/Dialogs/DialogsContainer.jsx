import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { connect } from "react-redux/es/exports";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
      return {
            messagesPage: state.messagesPage,
      }
};

let mapDispatchToProps = (dispatch) => {
      return {
            onAddMessage: () => { dispatch(addMessageActionCreator()); },
            updateNewMessageText: (text) => {
                  let action = updateNewMessageTextActionCreator(text)
                  dispatch(action);
            }
      }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
      withAuthRedirect
)(Dialogs);