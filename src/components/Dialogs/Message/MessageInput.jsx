import React from "react";
import s from "./../Dialogs.module.css";

const MessageInput = (props) => {

      let inputField = React.createRef();

      let onAddMessage = () => {
            props.onAddMessage();
      }

      let onMessageChange = () => {
            let text = inputField.current.value;
            props.updateNewMessageText(text);
      }

      return (
            <div className={s.inputBlock}>
                  <textarea ref={inputField} className={s.inputField} onChange={onMessageChange} value={props.newMessageText} />
                  <button type="button" onClick={onAddMessage}>&gt;</button>
            </div>
      );
}

export default MessageInput;