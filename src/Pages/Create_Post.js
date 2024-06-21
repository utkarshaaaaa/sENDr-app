import React from "react";
import "../Design/postCreate.css";

export default function Create_Post() {
  return (
    <>
      <h1>
        Try to Pull the Arrow <span class="me">Down</span>
      </h1>

      <div class="wrapper wbot">
        <div class="content">
          <ul>
            <li>
              
              <a href="#">Arrow Up</a>
            </li>
            <li>
              <a href="https://codepen.io/mmoustafa" target="_blank" class="me">
                mmoustafa
              </a>
            </li>
          </ul>
        </div>
        <textarea class="elevator"></textarea>
      </div>

      <div class="wrapper wtop">
        <div class="content ctop">
         
        </div>
        <textarea class="elevator"></textarea>
      </div>
    </>
  );
}
