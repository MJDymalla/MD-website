import React, { Component } from 'react';

import HeaderBox from '../Components/HeaderBox';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ResultsView from '../Components/ResultsView';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div>
        <HeaderBox />
        <div className="origin">
          <div className="center header-position">
            <i className="medium material-icons icon-color">equalizer</i>
            <header className="pageHeaders white-text">
              Results
            </header>
          </div>

          <div className="container content">
            {this.props.results.motivation !== undefined ? <ResultsView/> : <Redirect to='/survey'/>}
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