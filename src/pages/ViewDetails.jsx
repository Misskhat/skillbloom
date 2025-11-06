import React, {useEffect, useState} from "react";
import {Link, useLoaderData, useParams} from "react-router";

const ViewDetails = () => {
    const [detailSkill, setDetailSkill] = useState({});
    const {id} = useParams();
    const data = useLoaderData();
    useEffect(() => {
        const detailSkillData = data.find((skill) => skill.skillId == id);
        setDetailSkill(detailSkillData);
    }, [data, id]);
    const {skillName, providerName, providerEmail, price, rating, slotsAvailable, description, image, category} =
        detailSkill;
    console.log(id, data, detailSkill);
    // console.log(data);
    // console.log(id);
    return (
        <div className="w-11/12 mx-auto my-5 space-y-5">
            <h1 className="text-4xl font-bold my-5 italic">
                <span className="text-[#787cf1]  underline underline-offset-auto">{category} </span>
                Skill Details Page
            </h1>
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div className="space-y-10">
                    {/* course name and provider information */}
                    <div>
                        <h2 className="text-2xl font-bold"> {skillName} </h2>
                        <p>Course provider: {providerName}</p>
                        <p>
                            Email ID# <span className="text-blue-600 underline">{providerEmail}</span>
                        </p>{" "}
                        <div className="rating" title={rating}>
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label="1 star"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label="2 star"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label="3 star"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label="4 star"
                            />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                aria-label="5 star"
                                defaultChecked
                            />
                        </div>
                    </div>
                    {/* description of course */}
                    <div>
                        <h2 className="text-2xl font-bold">Course Price</h2>
                        <p className="font-semibold italic">Total Amount: ${price}</p>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">Description of Course</h2>
                        <p className="pt-2">
                            {" "}
                            {`${description} According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find and eventually recognized it as a passage from 'De finibus bonorum et malorum' (On the extremes of Good and Evil) by Cicero, a book that was very popular in the Middle Ages: "Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit... " (Approximately: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain..."). A typical Lorem Ipsum text goes like this: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim ...".`}{" "}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold italic text-[#787cf1]">
                            Slots Available Only : {slotsAvailable}{" "}
                        </h2>
                    </div>
                    <div className="space-x-2">
                        <Link to={`/skill-details/${skillName}/booking-form`} className="btn btn-primary">
                            Book Now
                        </Link>
                        <Link to={"/"} className="btn btn-primary">
                            Back Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
