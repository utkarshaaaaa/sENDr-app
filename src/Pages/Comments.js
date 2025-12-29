import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../Design/comments.css";
import PostComment from "./PostComment";

export default function () {
  const {
    email,
    setEmail,
    individualPostId,
    setIndividualPostId,
    arr,
    setArr,
    userId,
    logedUserEmail,
    setLogedUserEmail,
  } = useContext(Data);

  const navigate = useNavigate();

  const [cntxEmail, setCntxEmail] = useState("");

  const location = useLocation();
  const asgetComment = async () => {
    await axios
      .post(`http://localhost:3001/getComments${email}`, {
        postId: individualPostId,
      })
      .then((res) => {
        console.log(res.data.comment);
        setArr(res.data.comment);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log(location.state);

    getComment();
  }, []);

  return (
    <>
      <div className="comment-session">
        <div className="title">
          <h2>Comments</h2>
        </div>
        {arr.length == 0 ? (
          <div class="no-comments-container">
            <p class="no-comments-text">No comments</p>
          </div>
        ) : (
          <div>
            {arr?.map((e, id) => {
              return (
                <div className="post-comment" key={id}>
                  <div className="post-list">
                    <div className="flex">
                      <div className="user">
                        <div className="user-image">
                          <img src={e.userPic} className="userImg"></img>
                        </div>
                        <div className="user-meta">
                          <div className="name">{e.userName}</div>
                          <div className="day"></div>
                        </div>
                      </div>
                      <div className="reply"></div>
                    </div>
                    <div className="comment">{e.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <PostComment email={email} postId={individualPostId} userId={userId} />
      </div>
    </>
  );
}
