import { Doughnut, Radar } from 'react-chartjs-2';
import React, { Component } from "react";
import { container, item } from '../TransitionVariants';

import M from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { responses } from '../Response.js';

const motivation_max = 60;
const passion_max = 60;
const effort_max = 15;
const growth_max = 4;
const orientation_max = 45;
const efficacy_max = 95;
const achieve_max = 25;
const grit_max = 50;
const ambiguity_max = 65;
const resilience_max = 50;
const satisfaction_max = 25;

class ResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motivation_percentage: this.percentage(this.total_motivation, motivation_max),
            passion_percentage: this.percentage(this.total_passion, passion_max),
            effort_percentage: this.percentage(this.total_effort, effort_max),
            orientation_percentage: this.percentage(this.total_orientation, orientation_max),
            growth_percentage: this.percentage(this.props.result_set.growth, growth_max),
            efficacy_percentage: this.percentage(this.props.result_set.self_efficacy, efficacy_max),
            need_to_achieve_percentage: this.percentage(this.props.result_set.need_to_achieve, achieve_max),
            grit_percentage: this.percentage(this.props.result_set.grit, grit_max),
            tolerance_percentage: this.percentage(this.props.result_set.ambiguity_tolerance, ambiguity_max),
            resilience_percentage: this.percentage(this.props.result_set.resilience, resilience_max),
            satisfaction_percentage: this.percentage(this.props.result_set.satisfaction, satisfaction_max)
        }
    }

    chart_data(props) {
        var chart = {
            labels: Object.keys(props),
            datasets: [
                {
                    data: Object.values(props),
                    backgroundColor: [
                        'rgba(0, 0, 0, 0.74)',
                        'rgba(100, 252, 242, 0.74)',
                        'rgba(32, 32, 32, 0.5)',
                        'rgba(90, 94, 109, 0.7)',
                    ],
                    borderWidth: 4
                }
            ]
        }
        return chart;
    }

    radar_chart(props) {
        var chart = {
            labels: Object.keys(props),
            datasets: [
                {
                    label: this.props.users.firstName,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderColor: "rgba(0, 0, 0, 0.5)",
                    pointBackgroundColor: "rgba(100, 252, 242, 0.74)",
                    pointBorderColor: "rgba(0, 0, 0, 0.5)",
                    data: [
                        this.state.motivation_percentage,
                        this.state.passion_percentage,
                        this.state.effort_percentage,
                        this.state.growth_percentage,
                        this.state.orientation_percentage,
                        this.state.efficacy_percentage,
                        this.state.need_to_achieve_percentage,
                        this.state.grit_percentage,
                        this.state.tolerance_percentage,
                        this.state.resilience_percentage,
                        this.state.satisfaction_percentage
                    ]
                }
            ]
        }
        return chart;
    }
    options = {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 10
            },
            pointLabels: {
                fontSize: 12
            }
        }
    }

    // percent format
    percentage(props, max) {
        var amount = (props / max) * 100;
        return Math.round(amount);
    }
    total_motivation =
    this.props.result_set.motivation.intrinsic +
    this.props.result_set.motivation.introjected +
    this.props.result_set.motivation.identified +
    this.props.result_set.motivation.external_motivation;

    total_passion =
    this.props.result_set.passion.inventing +
    this.props.result_set.passion.founding +
    this.props.result_set.passion.developing;

    total_effort =
    this.props.result_set.effort.immediate +
    this.props.result_set.effort.beyond +
    this.props.result_set.effort.develop;

    total_orientation =
    this.props.result_set.orientation.risk_taking +
    this.props.result_set.orientation.innovativeness +
    this.props.result_set.orientation.proactivity;

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <motion.div variants={container} initial="hidden" animate="visible">
                <motion.div className="floating-container z-depth-2" variants={item}>
                    <div className="floating-content flow-text">
                        <h4 className="grey-text text-darken-2 center">Personality Breakdown</h4>
                        <p className="center grey-text text-darken-1">
                            <i>The answers you provided are measured against qualities that we believe are important to
                            being an entrepreneur. The following list outlines areas that stood out among your answers.
                            To get a more detailed explanation simply click the area highlighted to expand the
                            description.</i>
                        </p>
                        <ul className="collapsible popout">
                            {this.props.result_set.motivation.intrinsic > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of intrinsic motivation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_intrinsic}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.motivation.identified > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of identified motivation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_identified}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.motivation.introjected > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of introjected motivation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_introjected}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.motivation.external_motivation > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of external motivation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_external}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.passion.inventing > 16 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of passion for inventing
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_inventing}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.passion.founding > 16 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of passion for founding
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_founding}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.passion.developing > 16 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of passion for developing
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_developing}</span></div>
                                </li>
                                : null
                            }
                            {this.state.growth_percentage > 60 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of growth orientation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_growth}</span></div>
                                </li>
                                : null
                            }
                            {this.state.growth_percentage <= 50 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of growth orientation
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_growth}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.orientation.risk_taking > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of risk tolerance
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_risk_acceptance}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.orientation.innovativeness > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of innovativeness
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_innovativeness}</span></div>
                                </li>
                                : null
                            }
                            {this.props.result_set.orientation.proactivity > 12 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of proactivity
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_proactivity}</span></div>
                                </li>
                                : null
                            }
                            {this.state.efficacy_percentage >= 75 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of entrepreneurial self-efficacy
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_self_efficacy}</span></div>
                                </li>
                                : null
                            }
                            {this.state.efficacy_percentage <= 40 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of entrepreneurial self-efficacy
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_self_efficacy}</span></div>
                                </li>
                                : null
                            }
                            {this.state.need_to_achieve_percentage >= 75 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of the need to achieve
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_need_to_achieve}</span></div>
                                </li>
                                : null
                            }
                            {this.state.need_to_achieve_percentage <= 40 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of the need to achieve
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_need_to_achieve}</span></div>
                                </li>
                                : null
                            }
                            {this.state.grit_percentage >= 75 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of grit
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_grit}</span></div>
                                </li>
                                : null
                            }
                            {this.state.grit_percentage <= 40 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of grit
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_grit}</span></div>
                                </li>
                                : null
                            }
                            {this.state.tolerance_percentage >= 70 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of tolerance to ambiguity
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_tolerance}</span></div>
                                </li>
                                : null
                            }
                            {this.state.tolerance_percentage <= 40 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of tolerance to ambiguity
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_tolerance}</span></div>
                                </li>
                                : null
                            }
                            {this.state.resilience_percentage >= 70 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        High level of resilience
                                    </div>
                                    <div className="collapsible-body"><span>{responses.high_resilience}</span></div>
                                </li>
                                : null
                            }
                            {this.state.resilience_percentage <= 40 ?
                                <li>
                                    <div className="collapsible-header">
                                        <i class="material-icons">arrow_drop_down</i>
                                        Low level of resilience
                                    </div>
                                    <div className="collapsible-body"><span>{responses.low_resilience}</span></div>
                                </li>
                                : null
                            }
                        </ul>
                    </div>
                </motion.div>

                <motion.div className="floating-container z-depth-2" variants={item}>
                    <div className="floating-content center flow-text" >
                        <h4 className="grey-text text-darken-2">Graphical Breakdown</h4>

                        <p><i>This section provides a visual breakdown of all factors measured.</i></p>

                        <div className="row">
                            <div className="col s6">
                                <b>Motivation</b>
                                <Doughnut data={this.chart_data(this.props.result_set.motivation)} />
                            </div>

                            <div className="col s6">
                                <b>Passion</b>
                                <Doughnut data={this.chart_data(this.props.result_set.passion)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <b>Effort</b>
                                <Doughnut data={this.chart_data(this.props.result_set.effort)} />
                            </div>

                            <div className="col s6">
                                <b>Entrepreneurial Orientation</b>
                                <Doughnut data={this.chart_data(this.props.result_set.orientation)} />
                            </div>
                        </div>

                        <div className="row">
                            <p><i>The following factors are a measure of your total feeling towards certain
                            entrepreneurial qualities.</i></p>

                            <div className="col s4">
                                <b>Growth</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.growth_percentage + "%"}
                                        style={{ width: this.state.growth_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="col s4">
                                <b>Self Efficacy</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.efficacy_percentage + "%"}
                                        style={{ width: this.state.efficacy_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="col s4">
                                <b>Need to Achieve</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.need_to_achieve_percentage + "%"}
                                        style={{ width: this.state.need_to_achieve_percentage + "%" }}
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
                                        data-tooltip={this.state.grit_percentage + "%"}
                                        style={{ width: this.state.grit_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="col s4">
                                <b>Tolerance for Ambiguity</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.tolerance_percentage + "%"}
                                        style={{ width: this.state.tolerance_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <div className="col s4">
                                <b>Resilience</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.resilience_percentage + "%"}
                                        style={{ width: this.state.resilience_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row center">
                            <div className="col s4">
                                <b>Satisfaction</b>
                                <div class="progress">
                                    <div
                                        class="determinate tooltipped"
                                        data-tooltip={this.state.satisfaction_percentage + "%"}
                                        style={{ width: this.state.satisfaction_percentage + "%" }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="floating-container z-depth-2 center" variants={item}>
                    <div className="floating-content flow-text">
                        <h4 className="grey-text text-darken-2">Overall representation</h4>
                        <p><i>This chart displays your current level of measured entrepreneurial qualities together,
                        this makes it far easier to see which areas are behind others and where your focus
                        should be.</i></p>
                        <Radar data={this.radar_chart(this.props.result_set)} options={this.options} />
                    </div>
                </motion.div>
            </motion.div>
        )
    }
}
ResultsView.propTypes = {
    users: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.currentuser.user
});
export default connect(mapStateToProps, {})(ResultsView);