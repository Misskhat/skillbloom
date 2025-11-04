import React from "react";
import {NavLink} from "react-router";

const SkillCard = ({data}) => {
    // console.log(data);
    return (
        <div className="grid md:grid-cols-3 gap-16 items-center justify-center mt-10">
            {data.map((singleSkill) => (
                <div key={singleSkill?.skillId}>
                    <div className="card bg-base-100 shadow-sm">
                        <figure className="bg-[#b9bff5]">
                            <img src={singleSkill?.image} alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{singleSkill?.skillName}</h2>

                            <div className="rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <input
                                        key={star}
                                        type="radio"
                                        name={`rating-${singleSkill?.skillId}`} // unique name per skill
                                        className="mask mask-star-2 bg-orange-400"
                                        aria-label={`${star} star`}
                                        defaultChecked={star == Math.ceil(singleSkill?.rating)}
                                        // disabled // optional: make it read-only
                                    />
                                ))}
                            </div>

                            <div className="text-xl font-bold">
                                <p className="underline">
                                    Price: $<span className="text-blue-600 ">{singleSkill?.price}.00</span>
                                </p>
                            </div>

                            <div className="card-actions justify-center mt-5">
                                <NavLink to={`/skill-details/${singleSkill?.skillId}`} className="btn btn-primary">
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillCard;
