import { createBrowserRouter } from "react-router";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Shop from "../components/pages/Shop/Shop";
import RepeatingSection from "../components/templates/RepeatingSection/RepeatingSection";
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
                Component: RepeatingSection
            }
        ]
    },
    
])

