import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link } from 'react-router-dom';

// LANDING PAGE (ROOT)
const MainPage = () => {
  return (
    <div>
      <div className="container">
        <header className='head'>
          <i>    Explore your entrepreneurial mindset with Mass Diplomacy   </i>
        </header>

        <p><Link to='/login'><button type="button" class="btn btn-primary"><i class="fas fa-chevron-circle-right"></i></button></Link></p>
      </div>
    </div>
    );
};
export default MainPage;
ReactDOM.render(<App />, document.getElementById('root'));