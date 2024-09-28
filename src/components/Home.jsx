import React from "react";
import  './Home.css';

function Home() {
  return (
    <section className="home" id="home">
        <div className="home-container">
            <div className="home-content">
                <span className="home-subtitle">
                    Welcome to Coffero!
                </span>
                <h1 className="home-title">
                    Discover Amazing Coffee House & get Energy
                </h1>
                <p className="home-description">
                    There are many variations of passages available
                    but the majority
                    have suffered alternation in some from by injected
                    humour or 
                    randomised words.
                </p>
                <div className="home-btns">
                    <a href="#menu" className="btn">
                        Check Menu
                    </a>
                    <a href="#reservation" className="btn home-btn">
                        Book Table
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
