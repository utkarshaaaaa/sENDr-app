import React from "react";
import axios from "axios";
import { Data } from "../context/Context";
import { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function InboxData() {
  const {
    setUserId,
    sharedPostData,
    setSharedPostData,
    logedUserEmail,
    setLogedUserEmail,
  } = useContext(Data);

  const[postData,setPostData]=useState([])


  useEffect(()=>{
    setLogedUserEmail("test1@gmail.com")
   
    setTimeout(() => {
      axios.get(`http://localhost:3001/getSharedData${logedUserEmail}`)

      .then((res)=>{console.log(res.data.postData);setPostData(...res.data.postData)})
      .catch((err)=>{console.log(err)})
      
    }, 100);
   
    

  },[])
  console.log(logedUserEmail,"email")
  return (
    <>
    <NavBar/>
    {
      postData.length==0 ? <div>
        Empty Inbox
      </div>:<div>
        {
          postData.map((e)=>{
            return <div>{e.postDec}</div>
          })
        }
      </div>

    }
  
      
    
    
    </>
  
  )
}
