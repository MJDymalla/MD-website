import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';
import {Button} from 'react-materialize';

// SURVEY ENTRY PAGE
const surveyPage = () => {
    return (
        <div>
            <Navigation/>

            <div className='container  rounded'>
                <div className='surveycontainer  rounded'>
                <header className="pageHeaders">
                    <p class="headflow flow-text red-text text-accent-1">Assess your mindset</p>
                </header><hr/>

                <p class="flow-text grey-text text-accent-1">Clicking the button below will begin the mindset profile 
                You will be presented with a series of questions to assess the way you think. 
                    These questions should be answered truthfully in order to achieve the best results. </p> <hr/>
                <p><i> We feel it is important to let you know that your answers will not be shown to anyone.  </i></p>
                <p><Link to="/questions"><Button className="waves-effect waves-light red lighten-1 btn">BEGIN</Button></Link></p>
            </div>
            </div>
            <Footer />
        </div>
    );
  };
  export default surveyPage;
