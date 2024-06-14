import React from 'react'
import '../Design/topBar.css'

export default function NavBar() {
  return (
    <div>
       <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NotesApp</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <div>
            <img src='https://img.freepik.com/premium-vector/add-post-icon-line-icon_707519-2569.jpg' className='post'/>   
            </div>
           
          </div>
          <div className="topbarIconContainer">
            
            
          </div>
          <div className="topbarIconContainer">
           
          </div>
          <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    </div>
  )
}
