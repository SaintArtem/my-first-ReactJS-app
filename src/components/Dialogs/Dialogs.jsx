import React from "react";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogsUsers
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = props.messagesPage.dialogsMessages
        .map(message => <Message key={message.id} message={message.message} />)

    let inputField = React.createRef();

    let onAddMessage = () => {
        props.onAddMessage();
    }

    let onMessageChange = () => {
        let text = inputField.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputBlock}>
                    <textarea ref={inputField} className={s.inputField} onChange={onMessageChange} value={props.messagesPage.newMessageText} />
                    <button type="button" onClick={onAddMessage}>&gt;</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
