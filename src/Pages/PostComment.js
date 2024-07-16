import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Design/comments.css";

export default function PostComment() {

    // const { email, setEmail, individualPostId, setIndividualPostId } =
    // useContext(Data);

    // const [postComment, setPostComment] = useState("");
    // const addComment = (event) => {
    //     event.preventDefault();
    
    //     axios
    //       .post(`http://localhost:3001/addComment${email}`, {
    //         dec: postComment,
    //         userId: "user_id",
    //         postId: individualPostId,
    //       })
    //       .then((res) => {
    //         console.log(res.data.comment);
    //         setArr(res.data.comment);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   const handleComment=(e)=>{
    //     e.preventDefault()
    //     setPostComment(e.target.value);
    //   }
  return (
    <div>
          {/* <form className="comment-box" onSubmit={addComment}>
          <div className="user">
            <div className="image"></div>
            <div className="name">yupppp</div>
          </div>
          <textarea
            name="comment"
            value={postComment}
            onChange={handleComment}
          ></textarea>
          <button
            className="comment-submit"
            type="button"
            onClick={(e) => {
              addComment(e);
            }}
          >
            Comment
          </button>
        </form> */}
    </div>
  )
}
