import {createBrowserRouter} from "react-router";
import HomeLayOut from "../layout/HomeLayOut";
import AuthLayOut from "../layout/AuthLayOut";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import ViewDetails from "../pages/ViewDetails";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BookingForm from "../pages/BookingForm";
import PrivateRouter from "../pages/PrivateRouter";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        hydrateFallbackElement: <Loading></Loading>,
        errorElement: <h1>Page not found 304</h1>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../skillBloom.json"),
            },
            {
                path: "/skill-details/:id",
                loader: () => fetch("../skillBloom.json"),
                element: (
                    <PrivateRouter>
                        <ViewDetails></ViewDetails>
                    </PrivateRouter>
                ),
            },
            {
                path: "/skill-details/:id/booking-form",
                element: <BookingForm></BookingForm>,
                // loader: () => fetch("../skillBloom.json"),
            },
        ],
    },
    {
        path: "/auth-layout",
        element: <AuthLayOut></AuthLayOut>,
        hydrateFallbackElement: <Loading></Loading>,
        children: [
            {
                path: "/auth-layout/login",
                element: <LoginPage></LoginPage>,
            },

            {
                path: "/auth-layout/register",
                element: <RegisterPage></RegisterPage>,
            },

            {
                path: "/auth-layout/profile",
                element: (
                    <PrivateRouter>
                        <MyProfile></MyProfile>
                    </PrivateRouter>
                ),
            },
        ],
    },
    {
        path: "/*",
        element: <h1>Error 404</h1>,
    },
]);
