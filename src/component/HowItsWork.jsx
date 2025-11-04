import {FaSearchengin} from "react-icons/fa";
import {GrGrow} from "react-icons/gr";
import {LuHandshake} from "react-icons/lu";

const HowItsWork = () => {
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-10 items-center justify-center mt-5">
                <div className="shadow-xl p-5 flex flex-col items-center">
                    <FaSearchengin color="#787cf1" size={100} />
                    <p className="font-semibold pt-5">1. Find A Skill</p>
                </div>
                <div className="shadow-xl flex flex-col items-center p-5">
                    <LuHandshake color="#787cf1" size={100} />
                    <p className="font-semibold pt-5">2. Connect & Book</p>
                </div>
                <div className="shadow-xl flex flex-col items-center p-5">
                    <GrGrow color="#787cf1" size={100} />
                    <p className="font-semibold pt-5">3. Learn & Grow</p>
                </div>
            </div>
        </div>
    );
};

export default HowItsWork;
