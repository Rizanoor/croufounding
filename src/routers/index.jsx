import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/sign-in",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
])