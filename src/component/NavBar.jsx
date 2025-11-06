import {NavLink} from "react-router";
import skillLogo from "../assets/skillBloomLogo.png";
import {RxFontBold} from "react-icons/rx";
import {use} from "react";
import {AuthContext} from "../AuthContext/AuthContext";

const NavBar = () => {
    const {user, logOutHandle} = use(AuthContext);

    const handleLogOut = () => {
        logOutHandle()
        .then((res) => alert(res.user))
        .catch((error) => console.log(error.code));
    };
    return (
        <div className="md:w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-4 font-semibold"
                        >
                            <NavLink
                                className={`text-[xl] font-semibold hover:bg-amber-200 hover:rounded px-3 py-1`}
                                to={"/"}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className={`text-[xl] font-semibold hover:bg-amber-200 hover:rounded px-3 py-1`}
                                to={"/auth-layout/profile"}
                            >
                                My Profile
                            </NavLink>
                        </ul>
                    </div>
                    <img className={`h-10`} src={skillLogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4 font-semibold">
                        <NavLink
                            className={`text-[xl] font-semibold hover:bg-amber-200 hover:rounded px-3 py-1`}
                            to={"/"}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            className={`text-[xl] font-semibold hover:bg-amber-200 hover:rounded px-3 py-1`}
                            to={"/auth-layout/profile"}
                        >
                            My Profile
                        </NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <img
                        title={user?.name}
                        className="w-10"
                        src={`${user ? user?.photoURL : `https://i.ibb.co.com/rd6TdMB/boy-au1.jpg`}`}
                        alt=""
                    />
                    {user ? (
                        <NavLink onClick={handleLogOut} className="btn">
                            LogOut
                        </NavLink>
                    ) : (
                        <NavLink to={"/auth-layout/login"} className="btn">
                            LogIn
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
