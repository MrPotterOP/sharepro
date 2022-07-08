import React from "react";

//components
import Navbar from "../Navbar";
import Hero from "../Hero";

const LandingPage = ()=>{
    return(
        <section className="landing-page">
            <Navbar />
            <Hero />
        </section>
    )
};

export default LandingPage;