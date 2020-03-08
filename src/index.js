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

      </div>
      <Parallax />
      <div>


      </div>

    </>
    );
};


export default MainPage;
ReactDOM.render(<App />, document.getElementById('root'));