import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseStateContext } from "../context/ContextProvider.jsx";

export default function GuestLayout() {
    const { isAuth } = UseStateContext();
    if (isAuth) {
        return <Navigate to="/" />;
    }
    return (
        //center the content
        <div className="flex justify-center items-center h-screen">
            <Outlet />
        </div>
    );
}
