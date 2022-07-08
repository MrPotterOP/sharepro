import React from "react";
import "./hero.css";


const Hero =()=>{
    return(
        <section className="section-hero">
            <div className="hero-image-container">
                <img className="hero-img" src="/images/hero.png" alt="hero"></img>
                <div className="hero-blob"></div>
            </div>
            <div className="hero-title-container">
                <h1 className="hero-title">
                Share your photos <span>securely</span> with SharePro. 
                </h1>
                <p className="hero-description">
                    use sharepro to share your images securely over the internet with password protectction.
                </p>
                <div className="hero-btn-conatiner">
                    <button className="hero-btn">Platform</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;