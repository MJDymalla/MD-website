import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import questionBank from "../questionBank.js";
import QuestionBox from './QuestionBox.js';
import PerfectScrollBar from 'react-perfect-scrollbar';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';
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

    onCompleteComponent = () => {
        this.setState({
            isComplete: true
        })
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
        ) : null;


        return (
            <div>
                <Navigation />
                <div className='container  rounded'>
                    <header className="pageHeaders">
                        <p class="headflow flow-text red-text text-accent-1">Questions</p>
                    </header><hr />

                    {surveyRender}
                    {onSurveyCompletion}
                </div>
                <Footer />
            </div>
        );
    };
}
export default QuestionPage;