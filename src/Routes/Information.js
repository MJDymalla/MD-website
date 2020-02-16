import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';
import '../index.css';

// ABOUT US PAGE
const AboutUs = () => {
    return (
        <div>
            <Navigation />
            <div className="container bg-dark rounded">

                <header className="pageHeaders">
                    About Us
                </header><hr/>

                <h4>
                    <i>Who are we</i>
                </h4>
                <p>
                    Mass Diplomacy specializes in professional education, providing courses that aid individuals in developing new skillsets and ways of thinking.
                    Allowing individuals to not only recognize their unique skills or mindset but to leverage them to improve professional development and success.
                </p><br/>

                <h4>
                    <i>What's the mindset about</i>
                </h4>
                <p>
                    An entrepreneurial mindset is about a certain way of thinking, it is about the way in which you approach challenges and mistakes.
                    It is about an inherent need to learn from failures, improve your skill set and to try and try again.<br/>
                    This mindset is what you need to propel yourself forward, it may dim as you are entrenched in the daily grind of entrepreneurship.
                    But by making an active effort to improve and embody this mindset, you position yourself to meet everyday challenges and experience major growth.
                </p><br/>

                <h4>
                    <i>What's the profile about</i>
                </h4>
                <p>
                    The Mass Diplomacy Mindset Profile was created using questions based on psychological research that aim to gain insight into particular traits an individual may have.
                    It is aimed at not only discovering your current level of entrepreneurial thinking, but to also guide you in further developing and improving it.
                </p>
            </div>
            <Footer />
        </div>
    );
};
export default AboutUs;