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
class Login extends Component {
    // SET AUTHENTICATED TO TRUE - trigger redux action (save users name)
    login = (res) => {
        fakeAuth.authenticate()
        const currentUser = {
          firstName: res.profileObj.givenName,
          lastName: res.profileObj.familyName,
          email: res.profileObj.email,
          img: res.profileObj.imageUrl,
          id: uuidv4(),
        };
        this.props.logUser(currentUser);
        M.toast({html:"Success! Welcome " + this.props.users.firstName}, 4000)
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
                <b>Current user</b>
                <p>
                    <b>Name:</b> {this.props.users.firstName} {this.props.users.lastName}<br/>
                    <b>E-mail:</b> {this.props.users.email}
                </p>
            </div>
        ) : <div>No user logged in</div>

        return (
            <div className="origin">
                <Navigation />

                <div className="container center ">
                    <i className="medium material-icons icon-color">account_circle</i>
                    <header className="pageHeaders center">
                        Login
                    </header><hr />

                    <div className="row">
                        <div className="col s6">
                            <p className="text-accent-1">
                                During this development phase
                                we kindly ask that you provide a valid Google account for secure authentication.
                            </p>

                            <p>Don't have an account? <br/> <a href='https://accounts.google.com/sigNup' target='_blank'>Create one here.</a></p><br/>

                            <GoogleLogin
                                clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.login}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            <GoogleLogout
                                clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={this.log_out}
                            />
                            <br/><br/>
                            {logged_in}
                        </div>

                        <div className="col s6">
                            <img className="login_img" src={locked} alt=""/>
                        </div>

                    </div><hr />
                    <Link to="/survey"><button className="btn waves-effect waves-light blue lighten-1" disabled={this.buttonState()}>Continue to survey</button></Link>
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