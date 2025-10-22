import { createBrowserRouter } from "react-router-dom"

import HomePage from "../pages/Home"
import DashboardPage from "../pages/Dashboard"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>
    }
]);

export default router;