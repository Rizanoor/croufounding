import { createBrowserRouter } from "react-router-dom";
import Home from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterSuccess from "../pages/RegisterSuccess";
import ProjectList from "../pages/ProjectList";
import FundSuccess from "../pages/FundSuccess";


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
    },
    {
        path: "/project",
        element: <ProjectList/>
    },
    {
        path: "/fund-success",
        element: <FundSuccess/>
    }
])