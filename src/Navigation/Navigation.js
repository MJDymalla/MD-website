import "materialize-css/dist/css/materialize.min.css";

import React, { Component } from 'react';

import M from 'materialize-css';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fakeAuth } from '../App.js';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.listener = null;
    this.state = {
      status: "top"
    }
  }

  componentDidMount() {
    M.AutoInit();
    this.listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 10) {
        if (this.state.status !== "changed") {
          this.setState({ status: "changed" });
        }
      } else {
        if (this.state.status !== "top") {
          this.setState({ status: "top" });
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener);
  }

  render() {
    var status = fakeAuth.isAuthenticated ? null : <i className="medium material-icons white-icon">lock</i>
    var tip = fakeAuth.isAuthenticated ? "Authenticated" : "Un-authenticated"

    return (
      <div>
        <nav style={{ backgroundColor: this.state.status === "top" ? "transparent" : "rgba(0, 0, 0, 0.9)" }}>
          <div className="nav-wrapper">
            <a className="nav-head" href="#!"> MASS DIPLOMACY </a>

            <a href="#!" data-target="mobile-demo" class="sidenav-trigger">
              <i className="medium material-icons icon-color">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li
                className="nav-link tooltipped"
                data-position="bottom"
                data-tooltip={tip}
              >
                <span className="badge">{status}</span>
              </li>
              <li>
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="medium material-icons">account_circle</i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="information"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="medium material-icons">info</i>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/survey"
                  activeClassName="active"
                  className="nav-link"
                >
                  <i className="medium material-icons">equalizer</i>
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