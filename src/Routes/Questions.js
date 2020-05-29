import "survey-react/survey.css";

import * as Survey from "survey-react";

import React, { Component } from 'react';

import HeaderBox from '../Components/HeaderBox';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import complete from '../Images/complete.png';
import { connect } from 'react-redux';
import database from "../firebase/firebase";
import filterResults from '../filterResults';
import json from '../JSONQuestions';
import { motion } from 'framer-motion';
import { scoreUser } from '../Actions/userActions';
import { surveyResult } from '../Actions/surveyAction';

var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
    defaultThemeColors["$main-hover-color"] = "rgba(0, 0, 0, 0.2)";
    defaultThemeColors["$main-color"] = "rgba(0, 0, 0, 0.2)";
    defaultThemeColors["$text-color"] = "#4a4a4a";
    defaultThemeColors["$header-color"] = "#7ff07f";
    defaultThemeColors["$header-background-color"] = "#4a4a4a";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";
Survey.StylesManager.applyTheme();

var myCss = {
    matrix: {
        root: "table table-striped"
    },
    navigationButton: "btn-small grey darken-4",
}

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (res, state) => {
        this.setState({ isComplete: true });
        const final_results = filterResults(res.data);
        this.props.surveyResult(final_results);

        //database.ref(`users/${this.props.users.id}/info/entrepreneurScore`).update({
        //  entrepreneurScore: scoreE
        //});
        console.log(final_results);
    }

    render() {
        return (
            <div>
                <HeaderBox />
                <div className="origin">
                    {!this.state.isComplete ?
                        <div>
                            <div className="center header-position">
                                <i className="medium material-icons icon-color">visibility</i>
                                <header className="pageHeaders white-text">
                                    Questions
                                </header>
                            </div>
                            <div className="container">
                                <div className="floating-container z-depth-2">
                                    <div className="floating-content">
                                        <Survey.Survey
                                            json={json}
                                            showCompletedPage={false}
                                            onComplete={this.onCompleteComponent}
                                            css={myCss}
                                            showProgressBar='top'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="center header-position">
                                <i className="medium material-icons icon-color">assignment_turned_in</i>
                                <header className="pageHeaders white-text">
                                    Complete
                                </header>
                            </div>
                            <div className="container center floating-container z-depth-2">
                                <div className="floating-content flow-text">
                                    <div>Thank you for completing the Entrepreneurial Minset Activity Profile</div>
                                    <img className="survey_img" src={complete} alt="" />
                                    <p><i>Click below to view your results</i></p><hr className="style"/>
                                    <Link to="/results"><button className="btn-small waves-effect waves-light grey darken-4">RESULTS</button></Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    };
}

Questions.propTypes = {
    surveyResult: PropTypes.func.isRequired,
    scoreUser: PropTypes.func.isRequired,
    survey_data: PropTypes.object,
    score_num: PropTypes.object
};

const mapStateToProps = state => ({
    survey_data: state.surveydata,
    users: state.currentuser.user
});

export default connect(mapStateToProps, {surveyResult, scoreUser})(Questions);