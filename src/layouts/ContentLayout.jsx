import React from 'react';
import { Navigate, Outlet,useLocation } from 'react-router-dom';
import { UseStateContext } from '../context/ContextProvider';


export default function ContentLayout() {
    const { isAuth } = UseStateContext();
    return (
        <div>
            <h1 className='uppercase'>Content Layout</h1>
            <Outlet />
        </div>
    )
}