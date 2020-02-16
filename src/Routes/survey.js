import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';

// SURVEY ENTRY PAGE
const surveyPage = () => {
    return (
        <div>
            <Navigation/>

            <div className='container bg-dark rounded'>

                <header className="pageHeaders">
                    Assess your mindset
                </header><hr/>

                <p>Clicking the button below will begin the mindset profile <br/>
                You will be presented with a series of questions to assess the way you think. <br/>
                These questions should be answered truthfully in order to achieve the best results. <br/></p>
                <p><i> We feel it is important to let you know that your answers will not be shown to anyone.  </i></p>
                <p><Link to="/questions"><button className="btn btn-success">BEGIN</button></Link></p>
            </div>
            <Footer />
        </div>
    );
  };
  export default surveyPage;
