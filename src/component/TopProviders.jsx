import React from "react";
import TopProvider from "./TopProvider";

const TopProviders = ({data}) => {
    const providers = data.slice(0, 4);
    // console.log(providers);
    return (
        <div className="grid md:grid-cols-2 gap-2 mt-5">
            {providers.map((provider) => (
                <TopProvider provider={provider} key={provider.skillId}></TopProvider>
            ))}
        </div>
    );
};

export default TopProviders;
