import React from "react";
import s from "./Post.module.css"

const Posts = (props) => {

    return (
        <div className={s.item}>
            {props.message}
            <br />
            <span>Likes: {props.likes}</span>
        </div>
    );
}

export default Posts;