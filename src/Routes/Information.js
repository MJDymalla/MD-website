import React, { Component } from "react";
import Navigation from '../Navigation/Navigation.js';
import '../index.css';

// Page images
import FAQ from '../Images/faq.png';
import about from '../Images/about.png';
import mindset from '../Images/mindset.png';
import HeaderBox from '../Components/HeaderBox';

// ABOUT US PAGE
class AboutUs extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <HeaderBox />
                <div className="origin">
                    <div className="header-position center">
                        <i className="medium material-icons icon-color">info</i>
                        <header className="pageHeaders white-text">
                            About
                        </header>
                    </div>

                    <div className="container">
                        <div className="floating-container z-depth-2">
                            <div className="floating-content row">
                                <div className="flow-text">
                                    <img src={FAQ} className="about_images right hide-on-small-only" alt=""/>

                                    <h4 className="grey-text text-darken-2">
                                        Who are we
                                    </h4>

                                    <div className="grey-text text-darken-2">
                                        Mass Diplomacy is an organization that specializes in professional education. Providing courses that aid individuals in not only developing new skillsets and ways of thinking,
                                        but also building upon and utilising existing ones.
                                        <p>We believe that irrespective of an individuals current professional status or experience the need for continuous education and improvement is incredibly important. Our aim is
                                        to provide a platform for this idea that is both understandable, and easy to use.</p>
                                    </div>

                                    <div className="grey-text text-darken-1">
                                        <blockquote className="about-block">
                                            <i>Our mission at Mass Diplomacy is to allow individuals to not only recognize their unique skills or mindset but to help them leverage that skill to improve professional development and success.</i>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="floating-container z-depth-2">
                            <div className="floating-content row">
                                <div className="flow-text">
                                    <img src={about} className="about_images left hide-on-small-only" alt=""/>

                                    <h4 className="grey-text text-darken-2">
                                        What's the mindset about
                                    </h4>

                                    <div className="grey-text text-darken-2">
                                        An entrepreneurial mindset is about a certain way of thinking, it is about the way in which you approach challenges and mistakes.
                                        It is about an inherent need to learn from failures, improve your skill set and to try and try again.
                                        <p>We believe by making an active effort to improve and embody this mindset, you position yourself to meet everyday challenges and experience major growth
                                            both personally and professionally.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="floating-container z-depth-2">
                            <div className="floating-content row">
                                <div className="flow-text">
                                    <img src={mindset} className="about_images right hide-on-small-only" alt=""/>

                                    <h4 className="grey-text text-darken-2">
                                        What's the profile about
                                    </h4>

                                    <div className="grey-text text-darken-2">
                                        The Mass Diplomacy Mindset Profile was created using questions based on psychological research that aim to gain insight into particular traits an individual may have.
                                    </div>

                                    <div className="grey-text text-darken-1">
                                        <blockquote className="about-block">
                                            <i>We aimed the Mindset Profile at not only discovering your current level of entrepreneurial thinking, but to also guide you in further developing and improving it.</i>
                                        </blockquote>
                                    </div>

                                    <div className="grey-text text-darken-2">
                                        An important part of any educational tool is being able to visibly see and gauge improvement. The Mindset Profile is designed to be taken numerous times,
                                        so that the individual can see at each step of the process how there mindset and ways of thinking are progressing.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default AboutUs;