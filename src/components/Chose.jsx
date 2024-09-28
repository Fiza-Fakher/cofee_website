import React from 'react'
import './Chose.css';
import choseImg from '../images/choose.jpg';
import coffeeeMug from '../images/coffee-mug.svg';
import coffeeBeans2 from '../images/coffee-beans-2.svg';
import coffeeBeans3 from '../images/coffee-beans-2.svg';
const Chose =() => {
  return (
    <section className="chose-section">
        <div className="chose-grid">
            <div className="chose-content">
                <h1 className="chose-us">Why Chose Us</h1>
                <h2 className="chose-title">Coffero Most Out of Your favourite & Tasty Coffee <br />House</h2>
             <p className="chose-description">
                There are many variations of passages of orem psum 
                available but the 
                majority have suffered alternation in some form by 
                injected humor or
                randomised words which don`t look even slightly
                beleievable.
             </p>
             <div className="chose-details">
                <div className="chose-details-item">
                    <div className="chose-details-img-wrapper">
                        <img src={coffeeeMug} alt="" className="chose-details-img" />
                    </div>
                    <div>
                        <h3 className="chose-details-title"> Awesome Aroma</h3>
               <p className="chose-details-description">
                There are many variation of passages of
                Lorem, ipsum dolor
                but the majority have suffered alternation in 
                some injected.
               </p>
                    </div>
                </div>
             </div>

             <div className="chose-details">
                <div className="chose-details-item">
                    <div className="chose-details-img-wrapper">
                        <img src={coffeeBeans2} alt="" className="chose-details-img" />
                    </div>
                    <div>
                        <h3 className="chose-details-title"> Pure Grades</h3>
               <p className="chose-details-description">
                There are many variation of passages of
                Lorem, ipsum dolor
                but the majority have suffered alternation in 
                some injected.
               </p>
                    </div>
                </div>
             </div>

             <div className="chose-details">
                <div className="chose-details-item">
                    <div className="chose-details-img-wrapper">
                        <img src={coffeeBeans3} alt="" className="chose-details-img" />
                    </div>
                    <div>
                        <h3 className="chose-details-title">Healthy coffee</h3>
               <p className="chose-details-description">
                There are many variation of passages of
                Lorem, ipsum dolor
                but the majority have suffered alternation in 
                some injected.
               </p>
                    </div>
                </div>
             </div>
            </div>
    <img src={choseImg} alt="" className="chose-img" />
        </div>
    </section>
  )
}

export default Chose
