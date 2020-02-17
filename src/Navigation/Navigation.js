import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {fakeAuth} from '../App.js'
import "materialize-css/dist/css/materialize.min.css";

class Navigation extends Component {
    render()
    {
        var status = fakeAuth.isAuthenticated ? (
            <span className="badge blue-grey darken-2 green-text">authenticated</span>
        ) : <span className="badge  blue-grey darken-2 red-text ">unauthenticated</span>

        return (
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey darken-1 ">
                        <a className="brand-logo nav-head blue-grey darken-1 "> Mass Diplomacy Mindset Profile</a>
                        

                        <a href="#" data-target="mobile-demo" class="sidenav-trigger">menu</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
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