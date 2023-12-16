import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UseStateContext } from '../context/ContextProvider';
import Sidebar from '../components/sidebar/sidebar';
import TopBar from '../components/topbar/topbar';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export default function ClientLayout() {
    const { isAuth } = UseStateContext();
    return (
        <div className='flex'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <div className='ms-12 flex flex-col'>
                    <div className='mt-4 font-extrabold text-2xl bg-transparent'></div>
                    <Card className='w-10/12 m-auto p-2 shadow-lg h-fit mt-4'>
                        <CardBody className=''>
                            <Outlet />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}