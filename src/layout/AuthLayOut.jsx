import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import {Outlet} from "react-router";

const AuthLayOut = () => {
    return (
        <div className="h-full">
            <header>
                <NavBar></NavBar>
            </header>
            {/* <h1>Auth Layout</h1> */}
            <main className="min-h-screen w-11/12 mx-auto">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayOut;
