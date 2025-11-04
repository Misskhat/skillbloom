import React from "react";
import {Outlet} from "react-router";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";

const HomeLayOut = () => {
    return (
        <div>
            <header className="sticky">
                <nav>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className={`min-h-screen bg-[#fcfcfc] md:p-4`}>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayOut;
