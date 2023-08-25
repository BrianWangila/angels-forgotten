import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import LandingPage from "./components/LandingPage";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";
import AboutUs from "./components/AboutUs";
import AdminDashboard from "./components/AdminDashboard";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <AdminDashboard />,
        children: [
            // {
            //     path: '/login',
            //     element: <Login />
            // },        
        ]
    },
    {
        path: '/login',
        element: <Login />
    }, 

    // {
    //     path: '/',
    //     element: <LandingPage />,
    //     children: [
       
    //         {
    //             path: '/gallery',
    //             element: <Gallery />
    //         },
        
    //         {
    //             path: '/donate',
    //             element: <Donate />
    //         },
        
    //         {
    //             path: '/about-us',
    //             element: <AboutUs />
    //         },
    //     ]
    // },

    {
        path: '*',
        element: <NotFound />
    }
])

export default router;