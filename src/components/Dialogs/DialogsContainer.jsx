import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "./../../redux/dialogs-reducer";
import { connect } from "react-redux/es/exports";

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
                  dispatch(action); }
      }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;