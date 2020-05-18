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
import filterResults from '../filterResults';

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
    defaultThemeColors["$main-hover-color"] = "#6fe06f";
    defaultThemeColors["$main-color"] = "rgba(0, 0, 0, 0.2)";
    defaultThemeColors["$text-color"] = "#4a4a4a";
    defaultThemeColors["$header-color"] = "#7ff07f";

    defaultThemeColors["$header-background-color"] = "#4a4a4a";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";


Survey
    .StylesManager
    .applyTheme();

var myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "button btn-small grey darken-4"
};
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
        const final_results = filterResults(res.data);
        this.props.surveyResult(final_results);

        //database.ref(`users/${this.props.users.id}/info/entrepreneurScore`).update({
        //  entrepreneurScore: scoreE
        //});
        console.log(final_results);
    }

    render() {
        var surveyRender = !this.state.isComplete ? (
            <div className="floating-container floating-content z-depth-2">
                <Survey.Survey
                    json={json}
                    showCompletedPage={false}
                    onComplete={this.onCompleteComponent}
                    css={myCss}
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
                    <div className="container">
                        <div>
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