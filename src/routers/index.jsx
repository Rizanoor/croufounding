import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterSuccess from "../pages/RegisterSuccess";


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
    },
    {
        path: "/register-success",
        element: <RegisterSuccess/>
    }
])