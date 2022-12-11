import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home ";
import ProjectOne from "../pages/ProjectOne";
import ProjectThree from "../pages/ProjectThree";
import ProjectTwo from "../pages/ProjectTwo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/projectone',
                element: <ProjectOne></ProjectOne>
            },
            {
                path: '/projecttwo',
                element: <ProjectTwo></ProjectTwo>
            },
            {
                path: '/projectthree',
                element: <ProjectThree></ProjectThree>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
])

export default router