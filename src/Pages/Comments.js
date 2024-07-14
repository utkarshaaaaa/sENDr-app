import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Design/comments.css";
import { Link, useLocation } from "react-router-dom";

export default function () {
  const [arr, setArr] = useState([]);

  const location = useLocation();
  console.log(location.state);
  useEffect(() => {
    axios
      .post(`http://localhost:3001/getComments${location.state.email}`, {
        postId: location.state.postId,
      })
      .then((res) => {
        console.log(res.data.comment);
        setArr(res.data.comment)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  
  return (
    <>
      <div className="comment-session">
        <div className="title">
          <h2>Comments</h2>
        </div>
        {arr.map((e) => {
          return (
            <div className="post-comment">
              <div className="post-list">
                <div className="flex">
                  <div className="user">
                    <div className="user-image">
                      <img
                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                        className="userImg"
                      ></img>
                    </div>
                    <div className="user-meta">
                      <div className="name">{e.userId}</div>
                      <div className="day">10 days</div>
                    </div>
                  </div>
                  <div className="reply">
                    <div className="lick icon">
                      <i className="fa fa-thumbs-o-up ">&#128077;</i>
                    </div>
                    <div className="dislick icon">
                      <i className="fa fa-thumbs-o-down ">&#128078;</i>
                    </div>
                   
                  </div>
                </div>
                <div className="comment">
                  {e.desc}
                </div>
              </div>
            </div>
          );
        })}

        <form className="comment-box">
          <div className="user">
            <div className="image"></div>
            <div className="name">yupppp</div>
          </div>
          <textarea name="comment"></textarea>
          <button className="comment-submit">Comment</button>
        </form>
      </div>
    </>
  );
}
