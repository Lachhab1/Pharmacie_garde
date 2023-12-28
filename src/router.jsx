import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentLayout />,
        children: [
            {
                path: "/",
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
                path: "/order",
                element: <Order />,
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
    }
]);
export default router;