import React from "react";

const TopProvider = ({provider}) => {
    // console.log(provider);
    return (
        <div>
            <div className="flex items-center shadow-xl rounded-xl p-4">
                <div>
                    <img className="w-[100px]" src={`https://i.ibb.co.com/3f8wtPZ/author-img5.png`} alt="" />
                </div>
                <div>
                    <p className="font-bold">{provider?.providerName}</p>
                    <div className="rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <input
                                key={star}
                                type="radio"
                                name={`rating-${provider?.skillId}`} // unique name per skill
                                className="mask mask-star-2 bg-orange-400"
                                aria-label={`${star} star`}
                                defaultChecked={star === Math.round(provider?.rating)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProvider;
