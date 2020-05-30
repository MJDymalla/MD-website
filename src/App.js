import React, { Component } from 'react';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import AboutUs from './Routes/AboutUs';
import { AnimatePresence } from 'framer-motion';
import Footer from './Navigation/Footer';
import Login from './Routes/Login';
import MainPage from './index.js';
import Navigation from './Navigation/Navigation.js';
import { Provider } from 'react-redux';
import Questions from './Routes/Questions';
import Results from './Routes/Results';
import ScrollToTop from './Components/ScrollToTop';
import Survey from './Routes/Survey';
import database from './firebase/firebase';
import errorPage from './Routes/ErrorPage';
import store from './store.js';

// AUTHENTICATION CHECK
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

// PRIVATE ROUTE COMPONENT
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { reason: 'user is not active' }
             }}
            />
    )} />
)

// fetch request check console for what comes back
database.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router className="router">
                    <Navigation/>
                    <ScrollToTop />
                    <AnimatePresence>
                        <Switch>
                            <Route exact path="/404" component={errorPage} />
                            <Route exact path="/" component={MainPage} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/information" component={AboutUs} />
                            <PrivateRoute path="/survey" component={Survey} />
                            <PrivateRoute path="/questions" component={Questions} />
                            <PrivateRoute path="/results" component={Results} />
                            <Redirect to='/404' />
                        </Switch>
                    </AnimatePresence>
                </Router>
                <Footer />
            </Provider>
        );
    }
}
export default App;

