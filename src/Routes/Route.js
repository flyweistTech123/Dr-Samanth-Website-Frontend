/** @format */

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
 
];

export default allRoutes;