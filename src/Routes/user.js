import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logUser } from '../Actions/userActions';
import PropTypes from 'prop-types';
import {fakeAuth} from '../App.js'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Navigation from '../Navigation/Navigation.js';
import M from 'materialize-css';
import {startLogin} from '../Actions/auth';
import database from "../firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import user_details from '../Images/user-details.png';
import HeaderBox from '../Components/HeaderBox';
import locked from '../Images/login.png';

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
        M.toast({html:"Success! Welcome " + this.props.users.firstName}, 4000)

        database.ref(`users/${this.props.users.id}/info`).set({
          firstName: currentUser.firstName,
          lastName: currentUser.lastName,
          email: currentUser.email,
          img: currentUser.img,
          entrepreneurScore:'',
          depressionScore: ''
        });
    }

    // SET AUTHENTICATED TO FALSE - trigger redux action (set user to null)
    log_out = () => {
        M.toast({html: this.props.users.firstName + " has logged out"}, 4000)
        fakeAuth.signout()
        this.props.logUser(null);
    }

    // LOG API RESPONSE
    responseGoogle = (response) => {
        console.log(response);
    }

    // DISABLE BUTTON IF USER NOT LOGGED IN
    buttonState() {
        if (fakeAuth.isAuthenticated) {
            return false;
        }
        return true;
    }

    render() {
        var logged_in = fakeAuth.isAuthenticated ? (
            <div>
                <div className="row floating-container valign-wrapper">
                    <div className="floating-content col s6">
                        <h4 className="subHeader">
                            User Details
                        </h4><hr className="style"/>

                        <div className="center">
                            <img src={this.props.users.img} alt="" className="profileImage"/>
                        </div>

                        <div className="row valign-wrapper">
                            <div className="right-align col s1 offset-s4">
                                <i className="small material-icons">person_pin_circle</i>
                            </div>
                            <div className="left-align col s7">
                                <h5>name</h5>
                                {this.props.users.firstName} {this.props.users.lastName}
                            </div>
                        </div>

                        <div className="row valign-wrapper">
                            <div className="right-align col s1 offset-s4">
                                <i className="small material-icons">email</i>
                            </div>
                            <div className="left-align col s7">
                                <h5>email</h5>
                                {this.props.users.email}
                            </div>
                        </div> <hr className="style"/>

                        <GoogleLogout
                            clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                            render={renderProps => (
                                <button className="btn-small waves-effect waves-light black" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    Logout
                                </button>
                            )}
                            buttonText="Logout"
                            onLogoutSuccess={this.log_out}
                        />
                    </div>

                    <div className="col s6">
                        <img className="user-details" src={user_details} alt="" />
                    </div>
                </div>

                <div className="row floating-container">
                    <div className="floating-content">
                        <h4 className="subHeader">
                            Manage Account
                        </h4><hr className="style"/>

                        <div className="col s6">
                            <table className="centered">
                                <tbody>
                                    <tr>
                                        <td><h5>Manage details</h5></td>
                                        <td><a className="btn-small waves-effect waves-light black" href="https://myaccount.google.com/" target="_blank">
                                                <i className="tiny material-icons">settings</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Security</h5></td>
                                        <td><a className="btn-small waves-effect waves-light black" href="https://myaccount.google.com/security" target="_blank">
                                                <i className="tiny material-icons">https</i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h5>Personal info</h5></td>
                                        <td><a className="btn-small waves-effect waves-light black" href="https://myaccount.google.com/personal-info" target="_blank">
                                                <i className="tiny material-icons">info_outline</i>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col s6">
                            <table className="centered">
                                <tbody>
                                    <tr>
                                        <td><h5>View past results</h5></td>
                                        <td><a className="btn-small waves-effect waves-light black"><i className="tiny material-icons">equalizer</i></a></td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td><h5>remove account</h5></td>
                                        <td><a className="btn-small waves-effect waves-light black"><i className="tiny material-icons">do_not_disturb</i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>

            </div>
        ) :
            <div className="row floating-container valign-wrapper">
                <div className="col s6 floating-content">
                    <h4 className="subHeader">
                        Login
                    </h4><hr className="style" />

                    <p className="text-accent-1">
                        Welcome to Mass Diplomacy's Mindset Profile, <br/> During this development phase
                        we kindly ask that you login using a valid Google account for secure authentication.
                    </p>

                    <div className="floating-content">
                        <i class="fab fa-google fa-lg" />
                        <hr className="style" />
                        <GoogleLogin
                            clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                            render={renderProps => (
                                <button className="waves-effect waves-light black btn-small" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    continue with google
                                </button>
                            )}
                            onSuccess={this.login}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <p>
                            <i>or</i>
                        </p>
                        <p>
                            Don't have an account?<br />
                            <a href='https://accounts.google.com/sigNup' target='_blank'>Create one here.</a>
                        </p>
                    </div>
                </div>

                <div className="col s6">
                    <img className="user-details" src={locked} alt="" />
                </div>
            </div>

        return (
            <div>
                <Navigation />
                <HeaderBox />

                <div className="origin">
                    <div className="center header-position">
                        <i className="medium material-icons icon-color">account_circle</i>
                        <header className="pageHeaders white-text">
                            Account
                        </header>
                    </div>
                    <div className="center content container">
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

export default connect(mapStateToProps, {logUser})(Login);