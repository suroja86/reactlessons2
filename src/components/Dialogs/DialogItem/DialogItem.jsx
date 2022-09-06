import React from "react"
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img
                alt={'userLogo'}
                src={'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'}
            />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem