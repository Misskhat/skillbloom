import React, {useState} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {auth} from "../fairbase/fairbase.config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: "hablu", email: "hablu@mia.com"});
    const [loading, setLoading] = useState(true);

    const handleSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogInAuth = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const authData = {user, setUser, handleSignUpUser, handleLogInAuth};

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;
