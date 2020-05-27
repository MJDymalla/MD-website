import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { Component } from 'react';

import HeaderBox from '../Components/HeaderBox';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import database from "../firebase/firebase";
import { fakeAuth } from '../App.js'
import locked from '../Images/login.png';
import { logUser } from '../Actions/userActions';

class Login extends Component {
    // SET AUTHENTICATED TO TRUE - trigger redux action (save users name)
    login = (res) => {
        fakeAuth.authenticate()
        const currentUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName,
            email: res.profileObj.email,
            img: res.profileObj.imageUrl,
            id: res.profileObj.googleId,
            entrepreneurScore: 0,
            depressionScore: 0
        };
        this.props.logUser(currentUser);
        M.toast({ html: "Success! Welcome " + this.props.users.firstName }, 4000)

        database.ref(`users/${this.props.users.id}/info`).set({
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            img: currentUser.img,
            entrepreneurScore: '',
            depressionScore: ''
        });
    }

    // SET AUTHENTICATED TO FALSE - trigger redux action (set user to null)
    log_out = () => {
        M.toast({ html: this.props.users.firstName + " has logged out" }, 4000)
        fakeAuth.signout()
        this.props.logUser(null);
    }

    // LOG API RESPONSE
    responseGoogle = (response) => {
        console.log(response);
    }

    componentDidMount() {
        if (this.props.location.state !== null) {
            if (this.props.location.state.reason !== null) {
                M.toast({html: "You need to log in to do that", displayLength: 1500});
            }
        }

    }

    render() {
        var logged_in = fakeAuth.isAuthenticated ? (
            <div>
                <div className="row">
                    <div className="col s6">
                        <h4 className="subHeader grey-text text-darken-3">
                            User Details
                        </h4><hr className="style" />

                        <div><img src={this.props.users.img} alt="" className="circle" /></div>

                        <div>
                            <h4>Name</h4>
                            {this.props.users.firstName} {this.props.users.lastName}
                        </div>

                        <div>
                            <h4>Email</h4>
                            {this.props.users.email}
                        </div><br />

                        <GoogleLogout
                            clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                            render={renderProps => (
                                <button
                                    className="btn-small waves-effect waves-light grey darken-4"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    Logout
                                </button>
                            )}
                            buttonText="Logout"
                            onLogoutSuccess={this.log_out}
                        />
                    </div>

                    <div className="col s6">
                        <h4 className="subHeader grey-text text-darken-3">
                            Manage Account
                        </h4><hr className="style" />

                        <table className="centered">
                            <tbody>
                                <tr>
                                    <td>Manage details</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light grey darken-4"
                                            href="https://myaccount.google.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">settings</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Security</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light grey darken-4"
                                            href="https://myaccount.google.com/security"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">https</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Personal info</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light grey darken-4"
                                            href="https://myaccount.google.com/personal-info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">info_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>View past results</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light grey darken-4"
                                            href="#!"
                                        >
                                            <i className="tiny material-icons">equalizer</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remove account</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light grey darken-4"
                                            href="#!"
                                        >
                                            <i className="tiny material-icons">do_not_disturb</i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ) :
            <div>
                <div className="row valign-wrapper">
                    <div className="col s6">
                        <p>
                            Welcome to Mass Diplomacy's Mindset Profile, <br /> During this development phase
                            we kindly ask that you login using a valid Google account for secure authentication.
                        </p>

                        <i class="fab fa-google fa-lg" />
                        <hr className="style" />
                        <GoogleLogin
                            clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                            render={renderProps => (
                                <button
                                    className="waves-effect waves-light grey darken-4 btn-small"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    login
                                </button>
                            )}
                            onSuccess={this.login}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <p><i>or</i></p>
                        <p>
                            Don't have an account?<br />
                            <a href='https://accounts.google.com/sigNup' target='_blank' rel="noopener noreferrer">Create one here.</a>
                        </p>
                    </div>

                    <div className="col s6">
                        <img className="user-details hide-on-small-only" src={locked} alt="" />
                    </div>
                </div>
            </div>

        return (
            <div>
                <HeaderBox />
                <div className="origin">
                    <div className="center header-position">
                        <i className="medium material-icons icon-color">account_circle</i>
                        <header className="pageHeaders white-text">
                            Account
                        </header>
                    </div>
                    <div className="center container floating-container floating-content flow-text z-depth-2">
                        {logged_in}
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    logUser: PropTypes.func.isRequired,
    users: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.currentuser.user
});

export default connect(mapStateToProps, { logUser })(Login);