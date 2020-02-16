import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {fakeAuth} from '../App.js'
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import Navigation from '../Navigation/Navigation.js';
import Footer from '../Navigation/Footer.js';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            loginVisible: true,
            showAlert: false,
            buttonState: true,
            loading: false,
        }
        this.handleLastName = this.handleLastName.bind(this);
    }

    handleLastName(event) {
        this.setState({ lastName: event.target.value })
    };

    // SET AUTHENTICATED TO TRUE
    login = (res) => {
        fakeAuth.authenticate()
        this.setState({ name: res.profileObj.givenName})
        this.setState({ buttonState: false})
        this.setState({loading: true})
        console.log("logged in: ", this.state.name)
    }

    // SET AUTHENTICATED TO FALSE
    log_out = () => {
        fakeAuth.signout()
        this.setState({ buttonState: true})
        console.log('user logged out: ', this.state.name);
    }

    // LOG API RESPONSE
    responseGoogle = (response) => {
        console.log(response);
    }

    protectedAlert = () => {
        this.setState({logoutVisible: true});
    }

    componentDidMount() {
        if (fakeAuth.isAuthenticated) {
            this.setState({buttonState: false})
        }
    }

    render() {
        var logged_in = fakeAuth.isAuthenticated ? (
            <div class="alert alert-dismissible alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Success!</strong> User logged in<br/>
            </div>
        ) : null

        return (
            <div>
                <Navigation/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 bg-dark rounded-left">
                            <header className="pageHeaders">
                                User Login
                            </header><hr/>
                            <p>
                                During this development phase <br />
                                we kindly ask you login using a valid Google account for secure authentication.
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
                            <Link to="/survey"><button className="btn btn-success" disabled={this.state.buttonState}>Continue to survey</button></Link>
                            {logged_in}
                        </div>

                        <div className="col-md-6 bg-white rounded-right">
                            <img src="undraw.png" alt="locked"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Login);