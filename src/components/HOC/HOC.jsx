/** @format */

import React from "react";
import "./HOC.css";

import MyNavbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const HOC = (WrappedComponent) => {
    const Component = () => {
        return (
            <div className="container1">
                <div className="navbar220">
                    <MyNavbar />
                </div>
                <div className="content">
                    <div className="sidebar55">
                        <Sidebar />
                    </div>
                    <div className="child-component">
                        <WrappedComponent />
                    </div>
                </div>
            </div>
        );
    };

    return Component;
};

export default HOC;
