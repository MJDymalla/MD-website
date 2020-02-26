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
        console.log(scoreE);
        this.props.surveyResult(res.data);
        this.props.scoreUser(scoreE);
        database.ref(`users/${this.props.users.id}/info/entrepreneurScore`).update({
          entrepreneurScore: scoreE
        });
    }

    render() {
        var surveyRender = !this.state.isComplete ? (
            <Survey.Survey
                json={json}
                showCompletedPage={false}
                onComplete={this.onCompleteComponent}
            />
        ) : null

        var onSurveyCompletion = this.state.isComplete ? (
            <div className="container center">
                Thank you for completing the survey. <br />
                Click below to view your results. <br /><br />
                <Link to="/results"><button className="btn waves-effect waves-light blue">RESULTS</button></Link>
            </div>
        ) : null

        return (
            <div className="origin">
                <Navigation />
                <div className="container">
                    <div className="center">
                        <i className="medium material-icons icon-color">visibility</i>
                        <header className="pageHeaders">
                            Questions
                        </header>
                    </div>

                    {surveyRender}
                    {onSurveyCompletion}
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