import React, {useEffect, useState} from "react";
import {AuthContext} from "../AuthContext/AuthContext";
import {auth} from "../fairbase/fairbase.config";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSignUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOutHandle = () => {
        return signOut(auth);
    };

    const handleLogInAuth = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authData = {user, setUser, handleSignUpUser, handleLogInAuth, logOutHandle, loading, setLoading};

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;
