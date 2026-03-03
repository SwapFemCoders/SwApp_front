import { createBrowserRouter } from "react-router";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Shop from "../components/pages/Shop/Shop";
import { Layout } from "../layout/Layout";

export const router = createBrowserRouter ([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: LandingPage
            },
            {
                path: "/Shop",
                Component: Shop
            }
        ]
    },
    
])

