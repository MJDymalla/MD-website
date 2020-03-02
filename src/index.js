import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';
import Parallax from './LandingPage';
import improvement from './Images/improvement.png';
import secure from './Images/secure.png';
import tested from './Images/tested.png';

// LANDING PAGE (ROOT)
const MainPage = () => {
  return (
    <>
      <div className="landing">
        <h2 className="flow-text head">
          Explore your entrepreneurial mindset with Mass Diplomacy
        </h2>
      </div>
      <Parallax />
      <div>
        <div className="row center valign-wrapper">
          <br/>

          <div className="col m4">
            <img src={secure} className="landing_images"/>
            <h5 className="subHeader">Secure</h5>
            <p className="grey-text darken-4 text-accent-1">
              <i>User information is kept secure and private.</i>
            </p>
          </div>

          <div className="col m4">
            <img src={tested} className="landing_images"/><br/><br/>
            <h5 className="subHeader">Psychological Research</h5>
            <p className="grey-text darken-4 text-accent-1">
              <i>Profile based on psychological research.</i>
            </p>
          </div>

          <div className="col m4">
            <img src={improvement} className="landing_images"/>
            <h5 className="subHeader">Continuous Improvement</h5>
            <p className="grey-text darken-4 text-accent-1">
              <i>Emphasis on continuous improvement and education.</i>
            </p>
          </div><br/>

        </div>
        <div className="container center"><hr/>
          <Link to='/login'>CONTINUE</Link><br/>
        </div>
      </div>

    </>
    );
};


export default MainPage;
ReactDOM.render(<App />, document.getElementById('root'));