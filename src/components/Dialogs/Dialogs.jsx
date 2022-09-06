import React from "react"
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state=props.dialogsPage
    const dialogsElements = state.dialogs.map((d) => {
        return (
            <DialogItem
                name={d.name}
                key={d.id}
                id={d.id}
            />
        )
    })

    const messagesElements = state.messages.map((m) => {
        return (
            <Message
                message={m.message}
                key={m.id}
            />
        )
    })

    let addMessage = () => {
        props.addMessage()
    }

    let newMessageElement = React.createRef()

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={props.newMessageText}
                    />
                </div>
                <button onClick={addMessage}>Add message</button>
            </div>

        </div>
    )
}

export default Dialogs