import FrontPage from "./Pages/FrontPage";
import SideBar from "./Pages/SideBar";
import NavBar from "./Pages/NavBar";
import Comments from "./Pages/Comments";
import ShareTo from "./Pages/ShareTo";
import PostComment from "./Pages/PostComment";
import InboxData from "./Pages/InboxData";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Menu from "./Pages/Menu";
import UserProfile from "./Pages/UserProfile";
import Create_Post from "./Pages/Create_Post";
import Followers from "./Pages/Followers";
import Following from "./Pages/Following";
import SignUp from "./Pages/SignUp";

function App() {
  const route=createBrowserRouter([
  
    {
      path:'/',
      element: <FrontPage />

    },
   
    {
      path:'/UserProfile',
      element: <UserProfile/>
    },{
      path:'/followers',
      element: <Followers  userEmail={"test1@gmail.com"}/>

    },
    {
      path:'/menu',
      element: <Menu/>

    }, {
      path:'/comments',
      element: <Comments/>

    },
    {
      path:'/share',
      element:<ShareTo/>
    },{
      path:'/following',
      element:<Following/>
    },{
      path:'/postComment',
      element:<PostComment/>
    },{
      path:'/signup',
      element:<SignUp/>
    },{
      path:'/inBox',
      element:<InboxData/>
    },{
      path:'/navBar',
      element:<NavBar/>
    }
   
  ])
  
  const a=0
  return (
    <div className="App">
      

      {
        a==1?<div></div>:<div>
         
           <SideBar/>
        </div>
      }
       
    

      <RouterProvider router={route}/> 

    
    
     
    </div>
  );
}

export default App;
