import React from "react";
import {Link, useLoaderData, useParams} from "react-router";
import {toast, ToastContainer} from "react-toastify";

const BookingForm = () => {
    const {id} = useParams();
    const handleBooking = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email && password) {
            toast.success("Thank you for you booking");
        } else {
            toast.error("Please fill-up the email and password");
        }
    };
    return (
        <div className="w-11/12 mx-auto my-5 space-y-5">
            <h1 className="text-4xl font-bold my-5 italic text-[#787cf1] text-center">Booking your seal for {id} </h1>
            <div>
                <div className={`flex items-center justify-center`}>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-10">
                        <h1 className="text-center font-bold text-2xl"> Booking Your Seat </h1>
                        <form onSubmit={handleBooking} className="card-body">
                            <fieldset className="fieldset">
                                {/* email section */}
                                <label className="label">Email</label>
                                <input type="email" className="input" placeholder="Email" name="email" />
                                {/* password section */}
                                <label className="label">Password</label>
                                <input
                                    className="input"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    name="password"
                                />
                                <div>
                                    <a className="link link-hover">Forgot password?</a>
                                </div>
                                <button type="submit" className="btn btn-neutral mt-4">
                                    Booking your seat
                                </button>
                                <ToastContainer></ToastContainer>
                            </fieldset>
                        </form>
                        {/* now working properly ==> need to talk conceptual section */}
                        {/* <Link to={"/"} className="btn btn-neutral mt-4 px-10 w-11/12 mx-auto">
                            Login
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
