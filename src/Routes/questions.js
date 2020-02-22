import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.js';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import json from './JSONQuestions';

class QuestionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (res) => {
        this.setState({
            isComplete: true
        });
        console.log(JSON.stringify(res.data, null, 3));
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
            <div className="container">
                Thank you for completing the survey. <br />
                Click below to view your results. <br /><br />
                <Link to="/results"><button className="btn btn-success">RESULTS</button></Link>
            </div>
        ) : null

        return (
            <div className="origin">
                <Navigation />
                <div className="container">
                    <header className="pageHeaders center">
                        Questions
                    </header>

                    {surveyRender}
                    {onSurveyCompletion}
                </div>

            </div>
        );
    };
}
export default QuestionPage;