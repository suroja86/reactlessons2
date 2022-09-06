import React from "react"
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => {
        return (
            <Post
                message={p.message}
                likesCount={p.likesCount}
            />
        )
    })

    let addPost = () => {
        props.addPost()
    }
    let newPostElement = React.createRef()
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    >
                    </textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts