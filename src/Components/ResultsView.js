import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

const motivation_max_score = 15;
const passion_max_score = 20;
const effort_max_score = 5;
const growth_max = 4;
const orientation_max = 15;
const efficacy_max = 95;
const achieve_max = 25;
const grit_max = 50;
const ambiguity_max = 65;
const resilience_max = 50;
const satisfaction_max = 25;

class ResultsView extends Component {
    render() {
        function chart_data(props) {
            var chart = {
                labels: Object.keys(props),
                datasets: [
                    {
                        data: Object.values(props),
                        backgroundColor: [
                            'rgba(0, 0, 0, 0.74)',
                            'rgba(100, 252, 242, 0.74)',
                            'rgba(32, 32, 32, 0.5)',
                            'rgba(20, 40, 105, 0.7)',
                        ],
                        borderWidth: 4
                    }
                ]
            }
            return chart;
        }

        function percentage(props, max) {
            var amount = (props / max) * 100;
            return amount + "%";
        }

        var answers = false;
        if (this.props.results.motivation !== undefined) {
            answers = true;
        }

        return (
            <div>
                {answers ?
                    <div>
                        <div className="row floating-container z-depth-2 floating-content">
                            <h4 className="grey-text text-darken-2">Visual Breakdown</h4>

                            <p><i>This section provides a visual breakdown of all the metrics measured. The first four metrics are split
                            into individual factors which aid in determining the overall level.</i></p>

                            <div className="row">
                                <div className="col s6">
                                    <b>Motivation</b>
                                    <Doughnut data={chart_data(this.props.results.motivation)} />
                                </div>

                                <div className="col s6">
                                    <b>Passion</b>
                                    <Doughnut data={chart_data(this.props.results.passion)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <b>Effort</b>
                                    <Doughnut data={chart_data(this.props.results.effort)} />
                                </div>

                                <div className="col s6">
                                    <b>Entrepreneurial Orientation</b>
                                    <Doughnut data={chart_data(this.props.results.orientation)} />
                                </div>
                            </div>

                            <div className="row">
                                <p><i>The following factors are a measure of your total feeling towards certain entrepreneurial qualities.</i></p>

                                <div className="col s4">
                                    <b>Growth</b>
                                    <div class="progress">
                                        {this.growthChart}
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.growth, growth_max)}
                                            style={{ width: percentage(this.props.results.growth, growth_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>

                                <div className="col s4">
                                    <b>Self Efficacy</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.efficacy, efficacy_max)}
                                            style={{ width: percentage(this.props.results.efficacy, efficacy_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>

                                <div className="col s4">
                                    <b>Need to Achieve</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.need_to_achieve, achieve_max)}
                                            style={{ width: percentage(this.props.results.need_to_achieve, achieve_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s4">
                                    <b>Grit</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.grit, grit_max)}
                                            style={{ width: percentage(this.props.results.grit, grit_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>

                                <div className="col s4">
                                    <b>Tolerance for Ambiguity</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.tolerance, ambiguity_max)}
                                            style={{ width: percentage(this.props.results.tolerance, ambiguity_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>

                                <div className="col s4">
                                    <b>Resilience</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.resilience, resilience_max)}
                                            style={{ width: percentage(this.props.results.resilience, resilience_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s4">
                                    <b>Satisfaction</b>
                                    <div class="progress">
                                        <div
                                            class="determinate tooltipped"
                                            data-tooltip={percentage(this.props.results.satisfaction, satisfaction_max)}
                                            style={{ width: percentage(this.props.results.satisfaction, satisfaction_max)}}
                                        >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="floating-container">
                        <div className="floating-content">
                            No results yet
                        </div>
                    </div>
                }
            </div>
        )
    }
}
ResultsView.propTypes = {
    results: PropTypes.object
};

const mapStateToProps = state => ({
    results: state.surveydata.survey_data
});
export default connect(mapStateToProps, {})(ResultsView);