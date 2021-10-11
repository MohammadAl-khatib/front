import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

class Nav extends Component {
  render() {
    return (
      <ul id="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        {this.props.auth0.isAuthenticated && (
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        )}
      </ul>
    );
  }
}

export default withAuth0(Nav);
