import React, {Children, use} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {Navigate, useLocation} from "react-router";
import Loading from "./Loading";

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return <div> {children} </div>;
    } else {
        return <Navigate state={location.pathname} to={"/auth-layout/login"}></Navigate>;
    }
};

export default PrivateRouter;
