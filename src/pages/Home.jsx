import {useLoaderData} from "react-router";
import HeroSection from "../component/HeroSection";
import SkillCard from "../component/SkillCard";
import TopProviders from "../component/TopProviders";
import HowItsWork from "../component/HowItsWork";
import {useEffect, useState} from "react";

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div className="w-11/12 mx-auto ">
            {/* Hero Slider */}
            <h2 className="text-2xl font-bold md:my-5">Hero Slider</h2>
            <div>
                <HeroSection data={data}></HeroSection>
            </div>
            {/* Popular Skills */}
            <section className="my-10">
                <h2 className="text-2xl font-bold md:my-5">Popular Skills</h2>
                <div className="flex">
                    <SkillCard data={data}></SkillCard>
                </div>
            </section>
            {/* Top Rate Providers & How it's work*/}
            <section className="my-10 grid md:grid-cols-2 items-baseline justify-center gap-10">
                <div>
                    <h2 className="text-2xl font-bold md:my-5">Top Valued Providers</h2>
                    <TopProviders data={data}></TopProviders>
                </div>
                <div>
                    <h2 className="text-2xl font-bold md:my-5">How It Works</h2>
                    <HowItsWork></HowItsWork>
                </div>
            </section>
        </div>
    );
};

export default Home;
