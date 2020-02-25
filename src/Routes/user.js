import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logUser } from '../Actions/userActions';
import PropTypes from 'prop-types';
import {fakeAuth} from '../App.js'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Navigation from '../Navigation/Navigation.js';

class Login extends Component {
    // SET AUTHENTICATED TO TRUE - trigger redux action (save users name)
    login = (res) => {
        fakeAuth.authenticate()
        const currentUser = {
            firstName: res.profileObj.givenName,
            lastName: res.profileObj.familyName
        }
        this.props.logUser(currentUser);
    }

    // SET AUTHENTICATED TO FALSE - trigger redux action (set user to null)
    log_out = () => {
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
            <div>Welcome {this.props.users.firstName}!<br/></div>
        ) : <div>No user logged in</div>

        return (
            <div className="origin">
                <Navigation />

                <div className="container center">
                <i className="medium material-icons icon-color">account_circle</i>
                    <header className="pageHeaders center">
                        Login
                    </header><hr />

                    <p className="text-accent-1">
                        During this development phase
                        we kindly ask that you login using a valid Google account for secure authentication.
                    </p>

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
                    {logged_in}<hr />
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

export default connect(mapStateToProps, { logUser })(Login);