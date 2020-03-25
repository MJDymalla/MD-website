import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import {Button} from 'react-materialize';
import user from '../Images/user.jpg';

// SURVEY ENTRY PAGE
class surveyPage extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="origin">
                    <div className="headers center container">
                        <i className="medium material-icons icon-color">blur_on</i>
                        <header className="pageHeaders white-text">
                            Assess your mindset
                        </header>
                    </div>

                    <div className='container center content'>
                        <div className="floating-container">
                            <p>
                                Clicking the button below will begin the mindset profile.<br/>
                                You will be presented with a series of questions to assess the way you think.
                                These questions should be answered truthfully in order to achieve the best results.
                            </p>
                            <p>
                                <i>We feel it is important to let you know that your answers will not be shown to anyone.</i>
                            </p><hr className="style"/>
                            <p><Link to="/questions"><Button className="waves-effect waves-light blue lighten-1 btn">BEGIN</Button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  export default surveyPage;
