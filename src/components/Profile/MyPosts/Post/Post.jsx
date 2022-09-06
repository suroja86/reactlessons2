import React from "react"
import s from "./Post.module.css"

const Post = (props) =>  {
    return (
            <div className={s.item}>
                <img alt='Profile logo' src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'/>
                {props.message}
                <div>
                    <span>likes</span> {props.likesCount}
                </div>
            </div>

    )
}

export default Post