import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {fakeAuth} from '../App.js'
import "materialize-css/dist/css/materialize.min.css";

class Navigation extends Component {
    render()
    {
        var status = fakeAuth.isAuthenticated ? (
            <span className="badge green">authenticated</span>
        ): <span className="badge red">unauthenticated</span>

        return (
            <div>
                <nav>
                    <div className="nav-wrapper bg-dark">
                        <a className="brand-logo nav-head"> Mass Diplomacy Mindset Profile</a>

                        <a href="#" data-target="mobile-demo" class="sidenav-trigger">menu</a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a>{status}</a>
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
export default Navigation;