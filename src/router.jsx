import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Navigate,
} from "react-router-dom";
import ContentLayout from "./layouts/ContentLayout";
import GuestLayout from "./layouts/GuestLayout";
import Login from "./views/login";


//views
import Home from "./views/home";
import About from "./views/about";
import Medic from "./views/medic";
import AddMedicament from "./components/medicament/add";
import EditMedicament from "./components/medicament/edit";
import ClientLayout from "./layouts/clientLayouy";
import Order from "./views/order";
import AddPharmacy from "./components/pharmacy/add";
import Pharmacy from "./views/pharmacy";
import EditPharmacy from "./components/pharmacy/edit";
import Garde from "./components/pharmacyGarde/gard";


//imports for client
import ViewGarde from "./components/garde-client/index";
import Error from "./views/erro404";
import MapGard from "./components/garde-client/mapGard";
const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/home" />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/",
                children: [
                    {
                        path: "/pharmacy",
                        element: <Pharmacy />,
                    },
                    {
                        path: "/pharmacy/new",
                        element: <AddPharmacy />,
                    },
                    {
                        path: "/pharmacy/:code",
                        element: <EditPharmacy />,
                    },
                ],
            },
            {
                path: "/gard",
                element: <Garde />,
            },
            {
                path: "/",
                children: [
                    {
                        path: "/medic",
                        element: <Medic />,
                    },
                    {
                        path: "/medic/new",
                        element: <AddMedicament />,
                    },
                    {
                        path: "/medic/:code",
                        element: <EditMedicament />,
                    },
                ],
            }
        ],
    },
    {
        path: "/",
        element: <ClientLayout />,
        children: [
            {
                path: "/home-client",
                element: <Home />,
            },
            {
                path: "/order",
                element: <Order />,
            },
            {
                path: "/gard-client",
                element: <ViewGarde />,
            },
            {
                path: "/map-gard",
                element: <MapGard />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/auth",
                element: <Login />,
            }
        ],
    },
    {
        path: "*",
        element: <Error />,
    }
]);
export default router;