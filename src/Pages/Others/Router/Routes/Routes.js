import { createBrowserRouter } from "react-router-dom";
import Main from "../../../../Layout/Main";
import About from "../../../About/About";
import Contact from "../../../Contact/Contact";
import Home from "../../../Home/Home/Home";
import ProjectCardDetails from "../../../Projects/ProjectCardDetails";
import Projects from "../../../Projects/Projects";
import Skills from "../../../Skills/Skills";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/project/:id',
                element: <ProjectCardDetails></ProjectCardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
            }
        ]
    }
])

export default router;