import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
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


export default function ContentLayout() {
    const [name, setName] = useState('')
    const { code } = useParams();
    const routName = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/about",
            name: "About"
        },
        {
            path: "/gar",
            name: "Garde"
        },
        {
            path: "/medic",
            name: "Medicament"
        },
        {
            path: "/medic/new",
            name: "Add Medicament"
        },
        {
            path: `/medic/${code}`,
            name: "Edit Medicament"
        },
        {
            path: "/pharmacy",
            name: "Pharmacy"
        },
        {
            path: "/pharmacy/new",
            name: "Add Pharmacy"
        },
        {
            path: `/pharmacy/${code}`,
            name: "Edit Pharmacy"
        },
        {
            path: "/client",
            name: "Client"
        },
        {
            path: "/client/new",
            name: "Add Client"
        },
        {
            path: "/client/:code",
            name: "Edit Client"
        },
        {
            path: "/order",
            name: "Order"
        },
        {
            path: "/order/new",
            name: "Add Order"
        },
        {
            path: "/order/:code",
            name: "Edit Order"
        },
        {
            path: "/gard",
            name: "Pharmacy Garde"
        }
    ]
    const location = useLocation();
    var replaced = location.pathname.slice(1).replace("_", " ").replaceAll("/", " ");
    useEffect(() => {
        setName(routName.filter((object) => object.path == location.pathname)[0].name)
    }, [location.pathname, name])
    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <TopBar />
                <div className='ms-12 flex flex-col'>
                    <div className='mt-4 font-extrabold text-2xl bg-transparent'>{name}</div>
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