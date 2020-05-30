import './index.css';
import "materialize-css/dist/css/materialize.min.css";

import React, { Component } from 'react';
import { container, item } from './TransitionVariants';

import App from './App';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import ReactDOM from 'react-dom';
import landing from "./Images/landing.jpg";
import { motion } from 'framer-motion';

class index extends Component {
  componentDidMount() {
    M.Parallax.init(this.Parallax1);
  }
  render() {
    return (
      <div className="parallax-container" id='parallax-container1'>
        <motion.div className="row" variants={container} initial="hidden" animate="visible">
          <div className="col l8">
            <motion.h2 className="head" variants={item}>
              <span className="cursive">Explore your mindset with the</span><br/>
              Entrepreneurial mindset activity profile
            </motion.h2>
          </div>

          <div className="col l4">
            <div className="landing-container hide-on-small-only">
              <div className="landing-content info-text flow-text">
                <motion.div className="info-padding" variants={item}>
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">enhanced_encryption</i>
                    <h4> Secure</h4>
                  </span>
                  <i>User information is kept secure and private. Any personal details that are provided will
                  not be shared in any way.</i>
                </motion.div>

                <motion.div className="info-padding" variants={item}>
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">fingerprint</i>
                    <h4> Researched</h4>
                  </span>
                  <i>Profile was designed utilising years of peer to peer research review and scale develoment.</i>
                </motion.div>

                <motion.div className="info-padding" variants={item}>
                  <span className="valign-wrapper">
                    <i className="small material-icons icon-color">repeat</i>
                    <h4> Iterative</h4>
                  </span>
                  <i>The EMAP was designed to encourage education and begin a process of continual improvement and
                  self reflection.</i>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div className="row" variants={item}>
            <div className="center">
              <Link to="/login">
                <a class="btn-floating btn-large waves-effect waves-light" href="#!">
                  <i className="large material-icons">forward</i>
                </a>
              </Link>
            </div>
          </motion.div>
        </motion.div>

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