import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import HeaderBox from '../Components/HeaderBox';

// SURVEY ENTRY PAGE
class surveyPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <HeaderBox />
                <div className="origin">
                    <div className="center header-position">
                        <i className="medium material-icons icon-color">blur_on</i>
                        <header className="pageHeaders white-text">
                            Assess your mindset
                        </header>
                    </div>
                    <div className="container center floating-container z-depth-2">
                        <div className="floating-content flow-text">
                            <div className="grey-text text-darken-2 visualRow">
                                Clicking the button below will begin the mindset profile.<br/>
                                You will be presented with a series of questions to assess the way you think.<br/>
                                These questions should be answered truthfully in order to achieve the best results.
                            </div>

                            <i className="small material-icons icon-color">linear_scale</i>

                            <div className="grey-text text-darken-1">
                                <i>We feel it is important to let you know that your answers will not be shown to anyone.</i>
                            </div><hr className="style"/>
                            <p><Link to="/questions"><a className="btn-small waves-effect waves-light grey darken-4" href="#!">BEGIN</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  export default surveyPage;
