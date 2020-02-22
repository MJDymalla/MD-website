import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import {Button} from 'react-materialize';

// SURVEY ENTRY PAGE
const surveyPage = () => {
    return (
        <div className="origin">
            <Navigation/>

            <div className='container center'>
                <div>
                    <header className="pageHeaders">
                        Assess your mindset
                </header><hr />

                    <p>
                        Clicking the button below will begin the mindset profile.
                        You will be presented with a series of questions to assess the way you think.
                        These questions should be answered truthfully in order to achieve the best results.
                    </p><hr />
                    <p>
                        <i>We feel it is important to let you know that your answers will not be shown to anyone.</i>
                    </p>
                    <p><Link to="/questions"><Button className="waves-effect waves-light blue lighten-1 btn">BEGIN</Button></Link></p>
                </div>
            </div>

        </div>
    );
  };
  export default surveyPage;
