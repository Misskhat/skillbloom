import {FaFacebook, FaTwitch, FaYoutube} from "react-icons/fa";
import logo from "../assets/brandLogo.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="md:footer sm:footer-horizontal bg-neutral text-neutral-content items-center md:p-4 md:w-11/12 mx-auto max-sm:py-4 max-sm:space-y-4">
                <aside className="md:grid-flow-col items-center">
                    <div className="max-sm:hidden">
                        <img className="md:w-[70px] h-[70px] " src={logo} alt="" />
                    </div>
                    <p className="max-sm:text-center">Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="flex items-center justify-center md:grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
                    <a>
                        <FaTwitch size={28}></FaTwitch>
                    </a>
                    <a>
                        <FaFacebook size={28}></FaFacebook>
                    </a>
                    <a>
                        <FaYoutube size={28}></FaYoutube>
                    </a>
                </nav>
            </footer>
            <div className="footer sm:footer-horizontal footer-center bg-black text-base-content text-white p-4">
                <aside>
                    <p>Please contact us through email: cs@skillbloom.com</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
