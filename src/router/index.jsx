import { createBrowserRouter } from "react-router";
import LandingPage from "../components/pages/LandingPage/LandingPage";
import Shop from "../components/pages/Shop/Shop";
import RepeatingSection from "../components/templates/RepeatingSection/RepeatingSection";
import { Layout } from "../layout/Layout";
import { LogIn } from "../components/pages/LogIn/LogIn";
import { SignUp } from "../components/pages/SignUp/SignUp";
import { Profile } from "../components/pages/Profile/Profile";

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
            },
            {
                path: "/SignUp",
                Component: SignUp
            },
            {
                path: "/LogIn",
                Component: LogIn
            },
            {
                path: "/Profile",
                Component: Profile
            }
        ]
    },
    
])

