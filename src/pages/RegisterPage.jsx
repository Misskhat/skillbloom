import React from "react";
import {Link} from "react-router";

const RegisterPage = () => {
    return (
        <div className={`flex items-center justify-center min-h-screen`}>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                <h1 className="text-center font-bold text-2xl"> Register to SkillBloom </h1>
                <form className="card-body">
                    <fieldset className="fieldset">
                        {/* name section */}
                        <label className="label">Name</label>
                        <input type="text" className="input" required placeholder="Username" name="name" />
                        {/* {<span className="validator-hint">At lest 3 characters</span>} */}
                        {/* photo section */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="photo url" name="picture" />

                        {/* email section */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        {/* password section */}
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            required
                            placeholder="Password"
                            minLength="8"
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
                        If you have an account. Please{" "}
                        <Link to={"/auth-layout/login"} className="text-blue-700 underline">
                            login.
                        </Link>{" "}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
