import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import database from './firebase/firebase';
// PAGES
import MainPage from './index.js';
import Login from './Routes/user.js';
import errorPage from './Routes/ErrorPage.js';
import surveyPage from './Routes/survey.js';
import QuestionPage from './Routes/questions.js';
import Results from './Routes/Results.js';
import AboutUs from './Routes/Information.js';
import Footer from './Navigation/Footer';

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

//put info into db
database.ref().set({
    name: 'Jason Genova',
    location: 'delrey Fitness',
    condition: 'autism',
    iq: 17
});
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
                    <Switch>
                        <Route exact path="/404" component={errorPage} />
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/information" component={AboutUs} />
                        <Route path="/survey" component={surveyPage} />
                        <Route path="/questions" component={QuestionPage} />
                        <Route path="/results" component={Results} />
                        <Redirect to='/404' />
                    </Switch>
                    <Footer/>
                </Router>
            </Provider>
        );
    }
}
export default App;

