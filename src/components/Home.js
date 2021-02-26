import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Myskills from './Myskills';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Search from './Search';
import Newmentor from './NewMentor';


class Home extends Component {
  constructor(props) {
    super();
    document.body.classList.remove('loginPage');
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
  render() {
    let user = this.getCookie("loggedUser");
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            {/* <Sidebar /> */}
            <div className="module-wrapper">
              <div className="dashboard">
              <Search name={user}/>
              <Newmentor />
              </div>
            </div>
          </div>
        <div className="row">
            { (user !== undefined) ?
                <Myskills name={user} /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
