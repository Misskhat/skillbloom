import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import {use} from "react";
import {AuthContext} from "../AuthContext/AuthContext";

const MyProfile = () => {
    const {user} = use(AuthContext);
    console.log(user);
    return (
        <div className="flex items-center gap-7">
            <div className="space-y-5 text-center">
                <h3 className="font-bold">Profile Image</h3>
                <img src={`https://i.ibb.co.com/rd6TdMB/boy-au1.jpg`} alt="" />
            </div>
            <div className="text-2xl font-bold">
                <p>Name: {user?.displayName}</p>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
};

export default MyProfile;
