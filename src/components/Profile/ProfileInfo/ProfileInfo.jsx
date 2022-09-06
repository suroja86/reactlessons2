import React from "react"
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img alt='Background'
                     src='https://images.ctfassets.net/hrltx12pl8hq/4f6DfV5DbqaQUSw0uo0mWi/6fbcf889bdef65c5b92ffee86b13fc44/shutterstock_376532611.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    alt='Profile logo'
                    src={props.profile.photos.large}/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo