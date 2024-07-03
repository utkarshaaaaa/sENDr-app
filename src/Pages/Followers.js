
import "../Design/follower.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Followers() {

  const[arr,setArr]=useState([34,23,534,12,90])

  const handleRemove=(id)=>{

    const data=arr.filter((e,indx)=>{
      return e!==arr[id]
    })
    setArr(data)
   
    console.log(data)
   

  
  }


  return (
    <>
      <div>
        <div className="col-3">
          <div className="card">
            <div className="header-profile">Followers</div>

            {
              arr.map((e,id)=>{
                return    <div className="top" id={id}>
                <div className="userDetails">
                  <div className="profilepic">
                    <div className="profile_img">
                      <div className="image">
                        <img
                          src="https://media.geeksforgeeks.org/wp-content/uploads/20220609093221/g2-200x200.jpg"
                          alt="img12"
                        />
                      </div>
                    </div>
                  </div>
                  <h3>
                    Aditya Verma 
                    <br />
                    <span>Follows You</span>
                  </h3>
                </div>
                <div>
                  <a className="follow" onClick={()=>{handleRemove(id)}}>Remove</a>
                </div>
              </div>
              })

            }

          
          </div>
        </div>
      </div>
    </>
  );
}
