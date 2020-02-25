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
            <i className="medium material-icons icon-color">lock_open</i>
    ) : <i className="medium material-icons icon-color">lock</i>

        return (
            <div>
                <nav>
                    <div className="nav-wrapper ">
                        <a className="brand-logo nav-head "> MASS DIPLOMACY </a>

                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i className="medium material-icons icon-color">menu</i></a>
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
                    <li>
                        <Link to="/login" className="nav-link">{status}</Link>
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