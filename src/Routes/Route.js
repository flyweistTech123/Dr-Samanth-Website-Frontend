/** @format */

import Sidebar from "../components/Sidebar/Sidebar";
import AboutUs from "../pages/About Us/AboutUs";
import ContactUs from "../pages/Contact-Us/ContactUs";
import FAQ from "../pages/Frequently Asked Questions/FAQ's";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivacyPolicy from "../pages/Privacy Policy/PrivacyPolicy";
import TermsCondition from "../pages/Terms & Condition/TermsCondition";


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

  {
    route: "/contactus",
    component: <ContactUs />,
  },

  {
    route: "/FAQ",
    component: <FAQ />,
  },
  {
    route: "/termscondition",
    component: <TermsCondition />,
  },

  {
    route: "/privacypolicy",
    component: <PrivacyPolicy />,
  },

  {
    route: "/sidebar",
    component: <Sidebar />,
  },


];

export default allRoutes;