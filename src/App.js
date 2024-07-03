import FrontPage from "./Pages/FrontPage";
import SideBar from "./Pages/SideBar";
import NavBar from "./Pages/NavBar";
import Comments from "./Pages/Comments";
import ShareTo from "./Pages/ShareTo";
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
      element: <Followers />

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
    }
   
  ])
  return (
    <div className="App">
        <NavBar/>
        <SideBar/>
      {/* <NavBar />
      <FrontPage />
      <SideBar /> */}

      <RouterProvider router={route}/> 

      {/* <Create_Post/> */}
      {/* <UserProfile/> */}

      {/* <br/>
      <Menu/> 
      */}
      {/* <Followers /> */}
    
     
    </div>
  );
}

export default App;
