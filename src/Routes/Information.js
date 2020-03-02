import React from 'react';
import Navigation from '../Navigation/Navigation.js';
import '../index.css';
import FAQ from '../Images/faq.png';
import about from '../Images/about.png';
import mindset from '../Images/mindset.png';

// ABOUT US PAGE
const AboutUs = () => {
    return (
        <div className="origin">
            <Navigation />
            <div className="container">
                <div className="center">
                    <i className="medium material-icons icon-color">info</i>
                    <header className="pageHeaders darken-4 text-accent-1 center">
                        About
                    </header><hr/>
                </div>

                <div className="row">
                    <div className="col s6">
                        <h4 className="subHeader">
                            <i>Who are we</i>
                        </h4>
                        <blockquote className="about-text align left">
                            Mass Diplomacy specializes in professional education, providing courses that aid individuals in developing new skillsets and ways of thinking.
                            Allowing individuals to not only recognize their unique skills or mindset but to leverage them to improve professional development and success.
                        </blockquote><br/>
                    </div>
                    <div className="col s6">
                        <img src={FAQ} className="about_images"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">
                        <img src={about} className="about_images"/>
                    </div>
                    <div className="col s6">
                        <h4 className="subHeader">
                            <i>What's the mindset about</i>
                        </h4>
                        <blockquote className="about-text align left">
                            An entrepreneurial mindset is about a certain way of thinking, it is about the way in which you approach challenges and mistakes.
                            It is about an inherent need to learn from failures, improve your skill set and to try and try again.<br/><br/>
                            This mindset is what you need to propel yourself forward, it may dim as you are entrenched in the daily grind of entrepreneurship.
                            But by making an active effort to improve and embody this mindset, you position yourself to meet everyday challenges and experience major growth.
                        </blockquote><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col s6">
                        <h4 className="subHeader">
                            <i>What's the profile about</i>
                        </h4>
                        <blockquote className="about-text align left">
                            The Mass Diplomacy Mindset Profile was created using questions based on psychological research that aim to gain insight into particular traits an individual may have.
                            It is aimed at not only discovering your current level of entrepreneurial thinking, but to also guide you in further developing and improving it.
                        </blockquote>
                    </div>
                    <div className="col s6">
                        <img src={mindset} className="about_images"/>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default AboutUs;