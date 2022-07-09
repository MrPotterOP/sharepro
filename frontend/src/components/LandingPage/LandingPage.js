import React from "react";

//components
import Navbar from "../Navbar";
import Hero from "../Hero";
import WorkSection from "../WorkSection";

const LandingPage = ()=>{
    return(
        <section className="landing-page">
            <Navbar />
            <Hero />
            <WorkSection />
        </section>
    )
};

export default LandingPage;