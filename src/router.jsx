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

const router = createBrowserRouter([
    {
        path: "/",
        element: <ContentLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout/>,
        children: [
            {
                path: "/auth",
                element: <Login/>,
            }
        ],
    }
]);
export default router;