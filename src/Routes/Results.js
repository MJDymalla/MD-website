import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderBox from '../Components/HeaderBox';
// Results page images
import Undraw1 from "../Images/undraw_message_sent_1030.png";
import Undraw2 from '../Images/undraw_progress_data_4ebj.png';
import ResultsView from '../Components/ResultsView';


class Results extends Component {
  render() {
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
            <ResultsView/>
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