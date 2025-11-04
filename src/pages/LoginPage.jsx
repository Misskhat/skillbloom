import React from "react";
import {Link} from "react-router";
import logo from "../assets/skillBloomLogo.png";

const LoginPage = () => {
    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h1 className="text-center font-bold text-2xl"> Login to SkillBloom </h1>
                <form className="card-body">
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
                            minlength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            name="password"
                        />
                        {/* {
                            <p className="validator-hint">
                                Must be more than 8 characters, including
                                <br />
                                At least one number
                                <br />
                                At least one lowercase letter
                                <br />
                                At least one uppercase letter
                            </p>
                        } */}

                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
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
