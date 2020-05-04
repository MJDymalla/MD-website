import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Parallax from './LandingPage';

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