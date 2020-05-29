import './index.css';
import "materialize-css/dist/css/materialize.min.css";

import React, { Component } from 'react';

import App from './App';
import M from 'materialize-css';
import ReactDOM from 'react-dom';
import landing from "./Images/landing.jpg";

// LANDING PAGE
class index extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
  }
  render() {
    return (
      <div className="parallax-container" id='parallax-container1'>
        <div className="row">
          <div className="col l8">
            <h2 className="head">
              <span className="cursive">Explore your mindset with the</span><br/>
              Entrepreneurial mindset activity profile
            </h2>
          </div>

          <div className="col l4">
            <div className="landing-container hide-on-small-only">
              <div className="landing-content info-text flow-text">
                <div className="info-padding">
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">enhanced_encryption</i>
                    <h4> Secure</h4>
                  </span>
                  <i>User information is kept secure and private. Any personal details that are provided will
                  not be shared in any way.</i>
                </div>

                <div className="info-padding">
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">fingerprint</i>
                    <h4> Researched</h4>
                  </span>
                  <i>Profile was designed utilising years of peer to peer research review and scale develoment.</i>
                </div>

                <div className="info-padding">
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">repeat</i>
                    <h4> Iterative</h4>
                  </span>
                  <i>The EMAP was designed to encourage education and begin a process of continual improvement and
                  self reflection.</i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={Parallax => {
            this.Parallax1 = Parallax;
          }}
          className="parallax"
        >
          <div className="landing-image">
            <img src={landing} alt="#!" />
          </div>
        </div>
      </div>
    );
  }
};
export default index;
ReactDOM.render(<App />, document.getElementById('root'));