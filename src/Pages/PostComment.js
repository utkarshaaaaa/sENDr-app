import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Design/comments.css";

export default function PostComment({ email, postId,userId }) {
  const { arr, setArr } = useContext(Data);
  console.log(email, postId,userId);
  const [change, setChange] = useState(true);
  const [postComment, setPostComment] = useState("");
  const [newarr, setnewarr] = useState([]);

  const addComment = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:3001/addComment${email}`, {
        desc: postComment,
        userId: userId,
        postId: postId,
      })
      .then((res) => {
        console.log(res.data.comment, "hehehehhhehehehhe");
        setnewarr([ ...res.data.comment.comment]);
      })
      .catch((err) => {
        console.log(err);
      });

    setChange(!change);
    setPostComment("");
  };

  useEffect(() => {
    if (newarr.length > 0) {
      const newAr = newarr.filter((e) => e.postId === postId).map((e) => e);
      console.log(newAr, "niceeeeeee");
      setArr(newAr);
    } else {
      console.log("newarr is empty");
    }
  }, [newarr, postId, change]);
  const handleComment = (e) => {
    e.preventDefault();
    setPostComment(e.target.value);
  };

  return (
    <div>
      <form className="comment-box" onSubmit={addComment}>
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
      </form>
    </div>
  );
}
