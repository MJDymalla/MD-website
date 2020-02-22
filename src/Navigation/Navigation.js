import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {fakeAuth} from '../App.js'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';

class Navigation extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render()
    {
        var status = fakeAuth.isAuthenticated ? (
            <span className="badge green darken-3 white-text">Logged in: {this.props.users.firstName} {this.props.users.lastName}</span>
    ) : null

        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey darken-3 ">
                        <a className="brand-logo nav-head blue-grey darken-3 "> Mass Diplomacy Mindset Profile</a>

                        <a href="#" data-target="mobile-demo" class="sidenav-trigger">menu</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                            <Link to="/login" className="nav-link">{status}</Link>
                            </li>
                            <li>
                                <Link to="/" className="nav-link">HOME</Link>
                            </li>
                            <li>
                                <Link to="/login" className="nav-link">USER</Link>
                            </li>
                            <li>
                                <Link to="information" className="nav-link">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/survey" className="nav-link">SURVEY</Link>
                            </li>
                            <li>
                                <Link to="/results" className="nav-link">RESULTS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li>
                        <Link to="/" className="nav-link">HOME</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link">USER</Link>
                    </li>
                    <li>
                        <Link to="information" className="nav-link">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/survey" className="nav-link">SURVEY</Link>
                    </li>
                    <li>
                        <Link to="/results" className="nav-link">RESULTS</Link>
                    </li>
                </ul>
                <br/>
            </div>
        )
    }
}

Navigation.propTypes = {
    users: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.currentuser.user
});

export default connect(mapStateToProps, {})(Navigation);