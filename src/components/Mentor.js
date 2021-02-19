import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {CreateMentor} from '../services/MentorService';

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
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };
  handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        slots: this.state.slots,
        skills: this.state.skills,
        desciption: this.state.desciption,
        certifications: this.state.certifications,
        registeras: this.state.registeras,
      }
      const result = await CreateMentor(data);
      if (result !== 200) {
        this.setState({
          error: true,
          register: false,
        });
      } else
        this.setState({
            register: true,
          error: false,
        });
        document.cookie = `loggedUser=${this.state.user_name};max-age=604800;`;
    };

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
                  <span className="glyphicon glyphicon-user"></span> {user}
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="glyphicon glyphicon-log-in"></span> Logout
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
              <div className="mentor-form">
                <h2>Form</h2>
                <form onSubmit={this.handleSubmit} method="post">
                  <div className="form-group">
                    <label htmlFor="slots" className="form-label">
                      Total slots
                    </label>
                    <input
                      type="text"
                      onChange={(e) => this.handleInput(e)}
                      className="form-control"
                      name="slots"
                      id="slots"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="skills" className="form-label">
                      Search skills
                    </label>
                    <input
                      type="text"
                      onChange={(e) => this.handleInput(e)}
                      className="form-control"
                      name="skills"
                      id="skills"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desciption" className="form-label">
                      Desciption
                    </label>
                    <input
                      type="text"
                      onChange={(e) => this.handleInput(e)}
                      className="form-control"
                      name="desciption"
                      id="desciption"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="certifications" className="form-label">
                      Certifications
                    </label>
                    <input
                      type="text"
                      onChange={(e) => this.handleInput(e)}
                      className="form-control"
                      name="certifications"
                      id="certifications"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="desciption" className="form-label">
                      Register as
                    </label>
                    <div className="form-check">
                      <input
                        onChange={(e) => this.handleInput(e)}
                        className="form-check-input"
                        type="radio"
                        name="registeras"
                        id="mentor"
                        value="Mentor"
                      />
                      <label className="form-check-label" htmlFor="mentor">
                        Mentor
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        onChange={(e) => this.handleInput(e)}
                        className="form-check-input"
                        type="radio"
                        name="registeras"
                        id="mentee"
                        value="Mentee"
                        checked
                      />
                      <label className="form-check-label" htmlFor="mentee">
                        Mentee
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
