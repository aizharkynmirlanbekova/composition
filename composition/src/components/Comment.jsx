import React from "react";
import UserInfo from "./UserInfo"
import './Comment.css'
import Date from "./Date"

const Comment = (props) => {
   

    
    
    return (
        <div className="comment">
           <UserInfo author={props.author}/>
            <div className="comment-text">
                {props.text}
            </div>
           <Date date={props.date}/>
        </div>
    )
}

export default Comment