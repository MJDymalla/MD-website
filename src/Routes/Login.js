import { GoogleLogin, GoogleLogout } from 'react-google-login';
import React, { Component } from 'react';
import { container, item } from '../TransitionVariants';

import HeaderBox from '../Components/HeaderBox';
import M from 'materialize-css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import database from "../firebase/firebase";
import { fakeAuth } from '../App.js'
import locked from '../Images/login.png';
import { logUser } from '../Actions/userActions';
import { motion } from 'framer-motion';

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
        };
        this.props.logUser(currentUser);
        M.toast({ html: "Success! Welcome " + this.props.users.firstName }, 4000)

        database.ref(`users/${this.props.users.id}/details`).set({
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email,
            img: currentUser.img,
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
        if (this.props.location.state !== null && this.props.location.state !== undefined) {
            if (this.props.location.state.reason !== null) {
                M.toast({ html: "You need to log in to do that", displayLength: 1500 });
            }
        }
    }

    render() {
        var logged_in = fakeAuth.isAuthenticated ? (
            <div>
                <div className="row">
                    <div className="col s6">
                        <motion.div variants={container} initial="hidden" animate="visible">
                            <motion.h4 className="subHeader grey-text text-darken-3" variants={item}>
                                User Details
                            </motion.h4><hr className="style" />

                            <motion.div variants={item}><img src={this.props.users.img} alt="" className="circle" /></motion.div>

                            <motion.div variants={item}>
                                <h4>Name</h4>
                                {this.props.users.firstName} {this.props.users.lastName}
                            </motion.div>

                            <motion.div variants={item}>
                                <h4>Email</h4>
                                {this.props.users.email}
                            </motion.div><br />

                            <motion.div variants={item}>
                                <GoogleLogout
                                    clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <button
                                            className="btn-small waves-effect waves-light"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            Logout
                                        </button>
                                    )}
                                    buttonText="Logout"
                                    onLogoutSuccess={this.log_out}
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="col s6">
                        <motion.table className="centered" variants={container} initial="hidden" animate="visible">
                            <h4 className="subHeader grey-text text-darken-3">
                                Manage Account
                            </h4><hr className="style" />

                            <tbody>
                                <motion.tr variants={item}>
                                    <td>Manage details</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light"
                                            href="https://myaccount.google.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">settings</i>
                                        </a>
                                    </td>
                                </motion.tr>
                                <motion.tr variants={item}>
                                    <td>Security</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light"
                                            href="https://myaccount.google.com/security"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">https</i>
                                        </a>
                                    </td>
                                </motion.tr>
                                <motion.tr variants={item}>
                                    <td>Personal info</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light"
                                            href="https://myaccount.google.com/personal-info"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="tiny material-icons">info_outline</i>
                                        </a>
                                    </td>
                                </motion.tr>
                                <motion.tr variants={item}>
                                    <td>View past results</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light"
                                            href="#!"
                                        >
                                            <i className="tiny material-icons">equalizer</i>
                                        </a>
                                    </td>
                                </motion.tr>
                                <motion.tr variants={item}>
                                    <td>Remove account</td>
                                    <td>
                                        <a
                                            className="btn-small waves-effect waves-light"
                                            href="#!"
                                        >
                                            <i className="tiny material-icons">do_not_disturb</i>
                                        </a>
                                    </td>
                                </motion.tr>
                            </tbody>
                        </motion.table>
                    </div>
                </div>
            </div>
        ) :
            <div>
                <motion.div variants={item}>
                    <div className="row valign-wrapper">
                        <div className="col s6">
                            <p>Welcome to Mass Diplomacy's Mindset Activity Profile, <br /> During this development phase
                            we kindly ask that you login using a valid Google account for secure authentication.</p>

                            <i class="fab fa-google fa-lg" />
                            <hr className="style" />
                            <GoogleLogin
                                clientId="610400745499-8gku1hcjeo1od6u2a8n4i372ansna6dh.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button
                                        className="waves-effect waves-light btn-small"
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
                </motion.div>
            </div>

        return (
            <div>
                <HeaderBox />
                <div className="origin">
                    <motion.div className="center header-position" variants={container} initial="hidden" animate="visible">
                        <i className="medium material-icons icon-color">account_circle</i>
                        <header className="pageHeaders white-text">Account</header>
                    </motion.div>
                    <motion.div variants={container} initial="hidden" animate="visible">
                        <motion.div variants={item} className="container">
                            <div className="center floating-container floating-content flow-text z-depth-2">
                                {logged_in}
                            </div>
                        </motion.div>
                    </motion.div>
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