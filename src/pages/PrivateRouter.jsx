import React, {Children, use} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {Navigate} from "react-router";
import Loading from "./Loading";

const PrivateRouter = ({children}) => {
    const {user, loading} = use(AuthContext);

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return <div> {children} </div>;
    } else {
        return <Navigate to={"/auth-layout/login"}></Navigate>;
    }
};

export default PrivateRouter;
