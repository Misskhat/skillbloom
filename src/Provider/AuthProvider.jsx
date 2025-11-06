import React, {useEffect, useState} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {auth} from "../fairbase/fairbase.config";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const handleLogInAuth = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authData = {user, setUser, handleSignUpUser, handleLogInAuth};

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;
