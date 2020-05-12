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
                                <div className="flow-text grey-text text-darken-2">
                                    <img src={about} className="about_images left hide-on-small-only" alt=""/>

                                    <h4>About the Entrepreneurial Mindset Activity Profile</h4>

                                    <p>If you’re thinking of running your own business, want to know how you can develop yourself or others in being more entrepreneurial,
                                    or looking to create a team with certain abilities/profiles, measuring your entrepreneurial mindset profile provides the context in
                                    which you can evaluate where you are and how/where you can work on personal and professional development.</p>

                                    <p>Having an entrepreneurial mindset
                                    is essential to innovation, disciplined entrepreneurship and your personal and professional development.</p>

                                    <p>The Entrepreneurial Mindset Activity Profile <i>(EMAP)</i> is an assessment tool that utilises established scales, accepted by way of up to 20 years
                                    of peer-to-peer research review and scale development. The EMAP helps you in industry, university and startup land to evaluate the degree to
                                    which you are utilizing an entrepreneurial mindset and provides the context in which you might develop it further.</p>

                                    <p>The EMAP was developed by Graham Fellows <i>(Queensland Unversity of Technology Entrepreneurship, Mass Diplomacy)</i> with QUT Information Technology graduate students
                                    India Goodrich, Markus Dymalla, Kayleigh Beahan, & Jack McSweeney.</p>
                                </div>
                            </div>
                        </div>

                        <div className="floating-container z-depth-2">
                            <div className="floating-content row">
                                <div className="flow-text grey-text text-darken-2">
                                    <h4>About the author</h4>

                                    <p>Graham works with the Executive Director, QUT Entrepreneurship, the hub for entrepreneurship at QUT with spaces at Gardens Point,
                                    The Precinct and Kelvin Grove. Graham manages the QUT foundries, programs and operations, and teaches Entrepreneurship within the
                                    QUT Graduate School of Business D/MBA Programs.</p>

                                    <p>He started his career in community and international relations and then started his own business, trading cultural artefacts, jewellery,
                                    textiles, interior design and indigenous products. His most recent ventures are QUOD Architecture <i>(architectural design services)</i>, Mass Diplomacy
                                    <i> (corporate innovation programs and platforms)</i> and Simul <i>(a collaborative design platform for creative industries)</i>.</p>

                                    <p>Graham’s research focuses on individual differences, entrepreneurial mindset and cognitive flexibility
                                    within entrepreneurs. Graham’s research focuses on entrepreneurial mindset: his current study investigates entrepreneurial mindset and
                                    cognitive flexibility within entrepreneurs in behavioural experiments that include psychometric testing and distributed brain region activation
                                    by way of electroencephalogram (EEG).</p>
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