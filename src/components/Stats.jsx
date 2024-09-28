import React from 'react';
import coffeeShop from '../images/coffee-shop.svg';
// import experience from '../images/experience.svg';
import coffeeCup from '../images/coffee-cup.svg';
import chef from '../images/chef.svg';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats">
        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={coffeeShop} alt="Coffee Shop" className="stats-img" />
          </div>
          <p className="stats-no">1500</p>
          <h3 className="stats-title">Total Branches</h3>
        </div>

        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={coffeeCup} alt="Happy Customers" className="stats-img" />
          </div>
          <p className="stats-no">250</p>
          <h3 className="stats-title">Happy Customers</h3>
        </div>

        <div className="stats-item">
          <div className="stats-img-wrapper">
            <img src={chef} alt="Professional Chefs" className="stats-img" />
          </div>
          <p className="stats-no">120</p>
          <h3 className="stats-title">Professional Chefs</h3>
        </div>

        <div className="stats-item">
          <div className="stats-img-wrapper">
            {/* <img src={experience} alt="Years of Experience" className="stats-img" /> */}
          </div>
          <p className="stats-no">50</p>
          <h3 className="stats-title">Years of Experience</h3>
        </div>
      </div>
    </section>
  );
}

export default Stats;
