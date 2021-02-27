import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Myskills from './Myskills';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Search from './Search';
import Newmentor from './NewMentor';
import Chat from './Chat';
import ReadingList from './ReadingList';


class Home extends Component {
  constructor(props) {
    super();
    document.body.classList.remove('loginPage');
    this.state = {chatWindow: false, chatWith: {}}
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
  showChatWindow = (item) => {
    let self = this;
      self.setState({
          chatWindow: false,
          chatWith: item
      });
      setTimeout(function() {
          self.setState({
              chatWindow: true
          });
      }, 500);
  }
  hideChatWindow = (event) => {
      this.setState({
          chatWindow: false
      });
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
              <Search name={user} showChatWindow={this.showChatWindow}/>
              <Newmentor />
              <ReadingList name={user}/>
              </div>
            </div>
          </div>
        <div className="row">
            { (user !== undefined) ?
                <Myskills name={user} /> : null
            }
          </div>
          {this.state.chatWindow ? 
              <Chat name={this.props.name} hideChatWindow={this.hideChatWindow} chatWith={this.state.chatWith}  /> : null
          } 
        </div>
      </div>
    );
  }
}

export default Home;
