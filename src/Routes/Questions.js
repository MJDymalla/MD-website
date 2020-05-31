import "survey-react/survey.css";
import '../CSS/questions.css';

import * as Survey from "survey-react";

import React, { Component } from 'react';
import { container, item } from '../TransitionVariants';

import HeaderBox from '../Components/HeaderBox';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import complete from '../Images/complete.png';
import { connect } from 'react-redux';
import database from "../firebase/firebase";
import filterResults from '../Survey/filterResults';
import json from '../Survey/JSONQuestions';
import { motion } from 'framer-motion';
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
    navigationButton: "btn-small waves-effect waves-light",
}

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.onCompleteComponent = this.onCompleteComponent.bind(this)
    }

    onCompleteComponent = (res) => {
        var moment = require('moment');
        var now = moment().format("dddd, MMMM Do YYYY, h:mm a");
        this.setState({ isComplete: true });
        const final_results = filterResults(res.data);
        this.props.surveyResult(final_results);

        database.ref(`users/${this.props.users.id}/result_sets`).update({
            [now]: final_results
        });
    }

    render() {
        return (
            <div>
                <HeaderBox />
                <div className="origin">
                    {!this.state.isComplete ?
                        <div>
                            <motion.div className="center header-position" variants={container} initial="hidden" animate="visible">
                                <i className="medium material-icons icon-color">visibility</i>
                                <header className="pageHeaders white-text">
                                    Questions
                                </header>
                            </motion.div>
                            <motion.div className="container" variants={container} initial="hidden" animate="visible">
                                <motion.div className="floating-container z-depth-2" variants={item}>
                                    <div className="floating-content">
                                        <Survey.Survey
                                            json={json}
                                            showCompletedPage={false}
                                            onComplete={this.onCompleteComponent}
                                            css={myCss}
                                            showProgressBar='top'
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                        :
                        <div>
                            <motion.div className="center header-position" variants={container} initial="hidden" animate="visible">
                                <i className="medium material-icons icon-color">assignment_turned_in</i>
                                <header className="pageHeaders white-text">
                                    Complete
                                </header>
                            </motion.div>
                            <motion.div className="container center floating-container z-depth-2" variants={container} initial="hidden" animate="visible">
                                <motion.div className="floating-content flow-text" variants={item}>
                                    <div>Thank you for completing the Entrepreneurial Minset Activity Profile</div>
                                    <img className="survey_img" src={complete} alt="" />
                                    <p><i>Click below to view your results</i></p><hr className="style"/>
                                    <Link to="/results"><button className="btn-small waves-effect waves-light">RESULTS</button></Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    }
                </div>
            </div>
        );
    };
}

Questions.propTypes = {
    surveyResult: PropTypes.func.isRequired,
    survey_data: PropTypes.object
};

const mapStateToProps = state => ({
    survey_data: state.surveydata,
    users: state.currentuser.user
});

export default connect(mapStateToProps, {surveyResult})(Questions);