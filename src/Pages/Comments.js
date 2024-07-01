import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Design/comments.css";

export default function () {





  return (
    <>
      <div className="comment-session">
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
                  <div className="name">helloo</div>
                  <div className="day">10 days</div>
                </div>
              </div>
              <div className="reply">
                <div className="lick icon">
                  <i className="fa fa-thumbs-o-up ">like</i>
                </div>
                <div className="dislick icon">
                  <i className="fa fa-thumbs-o-down ">dislike</i>
                </div>
                <div className="re-comment">reply</div>
              </div>
            </div>
            <div className="comment">
              lorem20ocwcejncjenjcnejcnejncekjncek ekjncne ce ce cej cej cek jce
              cec ec e cekc ekc e c
            </div>
          </div>
        </div>
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
