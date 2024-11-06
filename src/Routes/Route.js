/** @format */

import Sidebar from "../components/Sidebar/Sidebar";
import AboutUs from "../pages/About Us/AboutUs";
import Activity from "../pages/Activity/Activity";
import ContactUs from "../pages/Contact-Us/ContactUs";
import Courses from "../pages/Courses/Courses";
import CoursesSingle from "../pages/CoursesSingle/CoursesSingle";
import FAQ from "../pages/Frequently Asked Questions/FAQ's";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivacyPolicy from "../pages/Privacy Policy/PrivacyPolicy";
import TermsCondition from "../pages/Terms & Condition/TermsCondition";


const allRoutes = [
  {
    route: "/",
    component: <Home />
  },

  {
    route: "/login",
    component: <Login />,
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
    route: "/activity",
    component: <Activity />,
  },
  {
    route: "/courses",
    component: <Courses />,
  },
  {
    route: "/courses/healthy-cooking-fundamentals",
    component: <CoursesSingle />,
  },


];

export default allRoutes;