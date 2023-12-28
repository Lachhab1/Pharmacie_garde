import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../context/ContextProvider.jsx";

export default function GuestLayout() {
    const { isAuth, role } = UseStateContext();
    if (isAuth && role == "admin") {
        return <Navigate to="home" />;
    } else if (isAuth && role == "client") {
        return <Navigate to="home-client" />;
    }
    return (
        //center the content
        <div className="flex justify-center items-center h-screen">
            <Outlet />
        </div>
    );
}
