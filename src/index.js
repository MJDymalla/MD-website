import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';
import Parallax from './LandingPage';

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
      <div className="container center">
        <div className="row">
          <br />
          <Link to='/login'>CONTINUE</Link>
        </div>
      </div>

    </>
    );
};


export default MainPage;
ReactDOM.render(<App />, document.getElementById('root'));