// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeroSection = ({data}) => {
    return (
        <div className=" border-purple-200 border rounded-2xl bg-[#787cf1] pt--10 mt-5">
            <p className="my-5 text-center text-xl font-bold text-white">Swipe Left or Right</p>
            <Swiper
                // install Swiper modules

                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                breakpoints={{
                    320: {slidesPerView: 1, direction: "horizontal", navigation: false},
                    640: {slidesPerView: 2, direction: "horizontal", navigation: true},
                    1024: {slidesPerView: 3, direction: "horizontal", navigation: true},
                }}

                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
            >
                {data.map((skill) => (
                    <SwiperSlide className="md:mt-5 mb-10" key={skill?.skillId}>
                        <div className="max-w-md mx-auto">
                            <div className=" shadow-xl image-full rounded-xl">
                                <figure>
                                    <img src={skill?.image} alt="Guitar Lesson" className="object-cover w-full h-64" />
                                </figure>
                                <div className="card-body justify-end">
                                    <h2 className="card-title text-white text-3xl font-bold">{skill?.skillName}</h2>
                                    <p className="text-white">{skill?.description}</p>
                                    <div className="card-actions">
                                        <Link
                                            to={`/skill-details/${skill?.skillName}/booking-form`}
                                            className="btn btn-primary"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;
