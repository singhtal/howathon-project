import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      loggedin: true,
    };
  }

  getCookie = (name) => {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };
  componentDidMount() {
    setTimeout(
      function() {
        let user = this.getCookie("loggedUser") !== undefined ? true : false;
        this.setState({ loggedin: user });
      }.bind(this),
      500
    );
  }
  logout = () => {
    document.cookie =
      "loggedUser" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    this.setState({ loggedin: false });
  };

  render() {
    let user = this.getCookie("loggedUser");
    if (this.state.loggedin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">We Learn</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/mentor">Register as mentor</Link>
          </li>
            <li>
              <a href="#">
                <span className="glyphicon glyphicon-user"></span> {user}
              </a>
            </li>
            <li onClick={this.logout}>
              <a href="#">
                <span className="glyphicon glyphicon-log-in"></span> Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
