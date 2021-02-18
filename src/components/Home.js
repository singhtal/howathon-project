import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

class Home extends Component {
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

  render() {
    let user = this.getCookie("loggedUser");
    if (this.state.loggedin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                WeLearn
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-user"></span> {user}
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span> Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="sidebar">
              <ul>
                <li className="active">
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Become a mentor</a>
                </li>
                <li>
                  <a href="">Links</a>
                </li>
                <li>
                  <a href="">Links</a>
                </li>
                <li>
                  <a href="">Links</a>
                </li>
              </ul>
            </div>
            <div className="module-wrapper">
              <div className="dashboard">
                <h2>Mentees</h2>
                <div className="blocks row">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card expired">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                </div>
                <h2>Mentors</h2>
                <div className="blocks row">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                </div>
                <h2>Skills</h2>
                <div className="blocks row">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Mentee Name</h5>
                      <h6 class="card-subtitle mb-2 text-muted">
                        Areas: Life coach
                      </h6>
                      <div className="card-text">
                        <ul>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                          <li>Mood</li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-footer">
                      <p>Last updated : 2-feb-21</p>
                      <p>Last contacted : 2-feb-21</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
