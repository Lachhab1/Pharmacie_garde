import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UseStateContext } from '../context/ContextProvider';
import Sidebar from '../components/sidebar/sidebar';
import TopBar from '../components/topbar/topbar';


export default function ContentLayout() {
    const { isAuth } = UseStateContext();
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <Outlet />
            </div>
        </div>
    )
}