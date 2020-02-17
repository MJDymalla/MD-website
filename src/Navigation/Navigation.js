import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {fakeAuth} from '../App.js'

class Navigation extends Component {
    render()
    {
        var status = fakeAuth.isAuthenticated ? (
            <span class="badge badge-success">authenticated</span>
        ): <span class="badge badge-danger">unauthenticated</span>

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand nav-head">Mass Diplomacy </a>
                    <a class="nav2 navbar-brand nav-head"> Mindset Profile</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="mobile-nav">
                        {status}
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login" class="nav-link">USER</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="information" class="nav-link">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/survey" class="nav-link">SURVEY</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/results" class="nav-link">RESULTS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Navigation;