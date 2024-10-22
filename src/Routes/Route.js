/** @format */

import AboutUs from "../pages/About Us/AboutUs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";


const allRoutes = [
  {
    route: "/",
    component: <Login />,
  },

  {
    route: "/home",
    component: <Home />,
  },
  {
    route: "/aboutus",
    component: <AboutUs />,
  },
 
 
];

export default allRoutes;