import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';

// LANDING PAGE (ROOT)
const MainPage = () => {
  return (
    <div className="origin">

      <div className="container">
        <header className='head'>
          <i>     Long ago, the four nations lived together in harmony. Then everything changed when the Fire Nation attacked.   </i>
        </header>

        <p className="navbutton "><Link to='/login'><button type="button" className="btn btn-primary red darken-2"><i class="fas fa-chevron-circle-right"></i></button></Link></p>
      </div>
    </div>
    );
};
export default MainPage;
ReactDOM.render(<App />, document.getElementById('root'));