import './CSS/index.css';
import './CSS/landing.css';
import "materialize-css/dist/css/materialize.min.css";

import React, { Component } from 'react';
import { container, item } from './TransitionVariants';

import App from './App';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

class index extends Component {
  render() {
    return (
      <div className="landing">
        <motion.div className="row" variants={container} initial="hidden" animate="visible">
          <div className="col l8">
            <motion.h2 className="head" variants={item}>
              <span className="cursive">Explore your mindset with the</span><br />
              Entrepreneurial mindset activity profile
          </motion.h2>
          </div>

          <div className="col l4">
            <div className="landing-content info-text flow-text hide-on-small-only ">
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
              </motion.div><hr className="style"/>

              <motion.div variants={item} className="center">
                <Link to="/login">
                  <a href="#!"><h4 className="white-text">Continue</h4></a>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }
};
export default index;
ReactDOM.render(<App />, document.getElementById('root'));