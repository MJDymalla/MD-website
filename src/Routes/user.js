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
import locked from '../Images/login.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import user from '../Images/user.jpg';

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
                <h4 className="subHeader">
                    User Details
                </h4><hr className="style"/>

                <div className="row">
                    <img src={this.props.users.img} alt="" className="profileImage"/>
                </div>

                <div className="row valign-wrapper">
                    <div className="right-align col s1 offset-s3">
                        <i className="small material-icons">person_pin_circle</i>
                    </div>
                    <div className="left-align col s8">
                        <h5>name</h5>
                        {this.props.users.firstName} {this.props.users.lastName}
                    </div>
                </div>

                <div className="row valign-wrapper">
                    <div className="right-align col s1 offset-s3">
                        <i className="small material-icons">email</i>
                    </div>
                    <div className="left-align col s8">
                        <h5>email</h5>
                        {this.props.users.email}
                    </div>
                </div><br/>

                <GoogleLogout
                    clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                    render={renderProps => (
                        <button className="btn standard-btn waves-effect waves-light" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                            <i class="fab fa-google icon-color"/>  Logout
                        </button>
                    )}
                    buttonText="Logout"
                    onLogoutSuccess={this.log_out}
                />
            </div>
        ) :
        <div>
            <h4 className="subHeader">
                Login
            </h4><hr className="style"/>

            <p className="text-accent-1">
                During this development phase
                we kindly ask that you provide a valid Google account for secure authentication.
            </p>
            <p>
                Don't have an account? <br/>
                <a href='https://accounts.google.com/sigNup' target='_blank'>Create one here.</a>
            </p><br/>

            <GoogleLogin
                clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                render={renderProps => (
                    <button className="btn standard-btn waves-effect waves-light" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i class="fab fa-google icon-color"/> Login
                    </button>
                )}
                buttonText="Login"
                onSuccess={this.login}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>

        return (
            <div>
                <Navigation />
                <div className="origin">

                        <div className="headers center container">
                            <i className="medium material-icons icon-color">account_circle</i>
                            <header className="pageHeaders white-text">
                                Account
                            </header>
                        </div>

                        <div className="center content container ">
                            <div className="row content-container">
                                <div className="col s6">
                                    {logged_in}
                                </div>

                                <div className="col s6">
                                    <img className="login_img" src={locked} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="center">
                            <Link to="/survey">
                                <button className="btn standard-btn waves-effect waves-light lighten-1" disabled={this.buttonState()}>
                                    Continue to survey
                                </button>
                            </Link>
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