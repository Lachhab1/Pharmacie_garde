import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../context/ContextProvider.jsx";
import axios from "../api/axios.js";

export default function GuestLayout() {
    const { isAuth, role, token } = UseStateContext();
    console.log(isAuth, role, token);
    if (isAuth && token) {
        if (role == 2)
            return <Navigate to="home" />;
        else if (role == 0) {
            return <Navigate to="home-client" />;
        }
    }
    return (
        //center the content
        <div className="flex justify-center items-center h-screen">
            <Outlet />
        </div>
    );
}
