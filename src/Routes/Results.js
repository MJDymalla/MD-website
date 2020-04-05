import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.js';
import Undraw1 from "../Images/undraw_message_sent_1030.png";
import Undraw2 from '../Images/undraw_progress_data_4ebj.png';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderBox from '../Components/HeaderBox';

class Results extends Component {
  render() {
    var user_answers = Object.entries(this.props.results).map(([key, value]) => {
      return (
        <div>{key} : {value}</div>
      );
    })

    return (
      <div>
        <Navigation />
        <HeaderBox />
        <div className="origin">
          <div className="center header-position">
            <i className="medium material-icons icon-color">equalizer</i>
            <header className="pageHeaders white-text">
              Results
            </header>
          </div>
          <div className="container center content">
            <div className="row resultRow floating-container floating-content">
              <h4>
                Survey Answers
              </h4>
              <div>{user_answers}</div>
            </div>

            <div className="row visualRow floating-container floating-content">
              <div className="col s6 resultText">
                <h3 className="flow-text grey-text darken-4 text-accent-1">
                  Prefer Visuals?
                </h3>
                <p className="flow-text">
                  Click here for a breakdown of your results through a series
                  of graphs and informatics
                </p>
              </div>
              <div className="col s6">
                <img
                  className="responsive-img resultimg"
                  src={Undraw2}
                  alt=""
                />
              </div>
            </div>

            <div className="row visualRow floating-container floating-content">
              <div className="col s6">

                <img
                  className="responsive-img resultimg"
                  src={Undraw1}
                  alt=""
                />
              </div>
              <div className="col s6">
                <h3 className="flow-text grey-text darken-4 text-accent-1">
                  Want to stay informed?
                </h3>
                <p className="flow-text">
                  Click here to get your results emailed to your registered
                  email address
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  results: PropTypes.object
};

const mapStateToProps = state => ({
  results: state.surveydata.survey_data
});

export default connect(mapStateToProps, {})(Results);