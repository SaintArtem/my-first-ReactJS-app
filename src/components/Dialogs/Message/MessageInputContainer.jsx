import React from "react";
import MessageInput from './MessageInput';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from './../../../redux/dialogs-reducer';

const MessageInputContainer = (props) => {

      let state = props.store.getState();

      let addMessage = () => {
            props.store.dispatch(addMessageActionCreator());
      }

      let onMessageChange = (text) => {
            let action = updateNewMessageTextActionCreator(text)
            props.store.dispatch(action);
      }
      return (
            <MessageInput newMessageText={state.messagesPage.newMessageText} updateNewMessageText={onMessageChange} onAddMessage={addMessage} />
      );
}

export default MessageInputContainer;