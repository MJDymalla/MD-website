import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import {fakeAuth} from '../App.js'
import "materialize-css/dist/css/materialize.min.css";
import M from 'materialize-css';

class Navigation extends Component {
    componentDidMount() {
        M.AutoInit();
    }
    render()
    {
        var status = fakeAuth.isAuthenticated ? (
            <i className="medium material-icons icon-color">lock_open</i>
        ) : <i className="medium material-icons icon-color">lock</i>

        var tip = fakeAuth.isAuthenticated ? (
          "Authenticated"
        ) : "Un-authenticated"

        return (
          <div>
            <nav>
              <div className="nav-wrapper z-depth-2">
                <a className=" nav-head "> MASS DIPLOMACY </a>

                <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                  <i className="medium material-icons icon-color">menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li
                    className="nav-link tooltipped"
                    data-position="bottom"
                    data-tooltip={tip}
                    activeClassName="false"
                  >
                    {status}
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      activeClassName="active"
                      className="nav-link"
                    >
                      USER
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="information"
                      activeClassName="active"
                      className="nav-link"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/survey"
                      activeClassName="active"
                      className="nav-link"
                    >
                      SURVEY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/results"
                      activeClassName="active"
                      className="nav-link"
                    >
                      RESULTS
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
              <li>
                <NavLink to="/login" className="nav-link">
                  USER
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="information"
                  activeClassName="active"
                  className="nav-link"
                >
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/survey"
                  activeClassName="active"
                  className="nav-link"
                >
                  SURVEY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/results"
                  activeClassName="active"
                  className="nav-link"
                >
                  RESULTS
                </NavLink>
              </li>
              <li>
                  {status}
              </li>
            </ul>
            <br />
          </div>
        );
    }
}

Navigation.propTypes = {
    users: PropTypes.object
};

const mapStateToProps = state => ({
    users: state.currentuser.user
});

export default connect(mapStateToProps, {})(Navigation);