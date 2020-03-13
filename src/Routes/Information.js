import React, { Component } from "react";
import Navigation from '../Navigation/Navigation.js';
import '../index.css';
import FAQ from '../Images/faq.png';
import about from '../Images/about.png';
import mindset from '../Images/mindset.png';

// ABOUT US PAGE
class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="origin">

                    <div className="headers center container">
                        <i className="medium material-icons icon-color">info</i>
                        <header className="pageHeaders white-text">
                            About
                        </header>
                    </div>

                    <div className="container content">
                        <div className="row content-container valign-wrapper">
                            <div className="col s7">
                                <h4 className="subHeader">
                                    Who are we
                                </h4>
                                <div className="align-left about-text">
                                    <p>Mass Diplomacy is an organization that specializes in professional education. Providing courses that aid individuals in not only developing new skillsets and ways of thinking,
                                    but also building upon and utilising existing ones.</p>
                                    <p>We believe that irrespective of an individuals current professional status or experience the need for continuous education and improvement is incredibly important. Our aim is
                                    to provide a platform for this idea that is both understandable, and easy to use.</p>
                                    <blockquote className="about-block">
                                        <i>Our mission at Mass Diplomacy is to allow individuals to not only recognize their unique skills or mindset but to help them leverage that skill to improve professional development and success.</i>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col s5">
                                <img src={FAQ} className="about_images"/>
                            </div>
                        </div>

                        <div className="row content-container valign-wrapper">
                            <div className="col s5">
                                <img src={about} className="about_images"/>
                            </div>
                            <div className="col s7">
                                <h4 className="subHeader">
                                    What's the mindset about
                                </h4>
                                <div className="align-left about-text">
                                    An entrepreneurial mindset is about a certain way of thinking, it is about the way in which you approach challenges and mistakes.
                                    It is about an inherent need to learn from failures, improve your skill set and to try and try again.
                                    <blockquote className="about-block">
                                        <i>This mindset is what you need to propel yourself forward, it may dim as you are entrenched in the daily grind of entrepreneurship.
                                        But we believe by making an active effort to improve and embody this mindset, you position yourself to meet everyday challenges and experience major growth.</i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="row content-container valign-wrapper">
                            <div className="col s7">
                                <h4 className="subHeader">
                                    What's the profile about
                                </h4>
                                <div className="align-left about-text">
                                    The Mass Diplomacy Mindset Profile was created using questions based on psychological research that aim to gain insight into particular traits an individual may have.
                                    <blockquote className="about-block">
                                        <i>We aimed the Mindset Profile at not only discovering your current level of entrepreneurial thinking, but to also guide you in further developing and improving it.</i>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="col s5">
                                <img src={mindset} className="about_images"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default AboutUs;