import FrontPage from "./Pages/FrontPage";
import SideBar from "./Pages/SideBar";
import NavBar from "./Pages/NavBar";
import Comments from "./Pages/Comments";
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

    }
   
  ])
  return (
    <div className="App">
        {/* <NavBar/>
        <SideBar/> */}
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
