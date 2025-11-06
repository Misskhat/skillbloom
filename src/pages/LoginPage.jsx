import React, {use, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router";
import {AuthContext} from "../AuthContext/AuthContext";
import {toast, ToastContainer} from "react-toastify";

const LoginPage = () => {
    const [error, setError] = useState("");
    const {user, setUser, handleLogInAuth} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLoginForm = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(email, password);

        handleLogInAuth(email, password)
        .then((res) => {
            // console.log(res.user);
            toast.success(`Thank you ${res.user} for successfully Login`);
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => setError(error.message));
    };
    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h1 className="text-center font-bold text-2xl"> Login to SkillBloom </h1>
                <form onSubmit={handleLoginForm} className="card-body">
                    <fieldset className="fieldset">
                        {/* email section */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name="email" />

                        {/* password section */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input validator"
                            required
                            placeholder="Password"
                            minLength="6"
                            name="password"
                        />

                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        {error && <p className="font-bold text-red-600 text-center "> Password not match</p>}
                        <button type="submit" className="btn btn-neutral mt-4">
                            Login
                        </button>
                        <ToastContainer />
                    </fieldset>
                    <p>
                        If you have no account. Please{" "}
                        <Link to={"/auth-layout/register"} className="text-blue-700 underline">
                            register.
                        </Link>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
