import React from "react";

//components
import Navbar from "../Navbar";
import Hero from "../Hero";
import WorkSection from "../WorkSection";
import FAQs from "../FAQs";

const LandingPage = ()=>{
    return(
        <section className="landing-page">
            <Navbar />
            <Hero />
            <WorkSection />
            <FAQs />
        </section>
    )
};

export default LandingPage;