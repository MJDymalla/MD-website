import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import json from './JSONQuestions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { surveyResult } from '../Actions/surveyAction';
import { scoreUser } from '../Actions/userActions';
import database from "../firebase/firebase";
import HeaderBox from '../Components/HeaderBox';

class QuestionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (res, state) => {
        this.setState({
            isComplete: true
        });
        const scoreE = res.data;
        this.props.surveyResult(res.data);
        this.props.scoreUser(scoreE);
        database.ref(`users/${this.props.users.id}/info/entrepreneurScore`).update({
          entrepreneurScore: scoreE
        });
    }

    render() {
        var surveyRender = !this.state.isComplete ? (
            <div>
                <Survey.Survey
                    json={json}
                    showCompletedPage={false}
                    onComplete={this.onCompleteComponent}
                />
            </div>
        ) : null

        var onSurveyCompletion = this.state.isComplete ? (
            <div className="container center">
                Thank you for completing the survey. <br />
                Click below to view your results. <br /><br />
                <Link to="/results"><button className="btn waves-effect waves-light blue">RESULTS</button></Link>
            </div>
        ) : null

        return (
            <div>
                <Navigation />
                <HeaderBox />
                <div className="origin">
                    <div className="center header-position">
                        <i className="medium material-icons icon-color">visibility</i>
                        <header className="pageHeaders white-text">
                            Questions
                        </header>
                    </div>
                    <div className="container content floating-container">
                        <div className="floating-content">
                            {surveyRender}
                            {onSurveyCompletion}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

QuestionPage.propTypes = {
    surveyResult: PropTypes.func.isRequired,
    scoreUser: PropTypes.func.isRequired,
    survey_data: PropTypes.object,
    score_num: PropTypes.object
};

const mapStateToProps = state => ({
    survey_data: state.surveydata,
    users: state.currentuser.user
});

export default connect(mapStateToProps, {surveyResult, scoreUser})(QuestionPage);