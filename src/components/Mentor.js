import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { UpdateSkill, GetSkills } from "../services/skillupdate";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

class Mentor extends Component {
  constructor(props) {
    super();
    this.state = "";
  }

  getCookie = (name) => {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };
  componentDidMount() {
    setTimeout(
      function() {
        let user = this.getCookie("loggedUser") !== undefined ? this.getCookie("loggedUser") : false;
        this.setState({ username: user });
      }.bind(this),
      500
    );
    GetSkills().then((skills) => {
      this.setState({ fetchedSkills: skills.data });
    });
  }

  getCookie = (name) => {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    if (match) return match[2];
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      skills: this.state.skills,
      desciption: this.state.desciption,
      certifications: this.state.certifications,
      volunteer: this.state.registeras ? true : false,
    };
    const result = await UpdateSkill(data);
    if (result !== 201) {
      console.log('error')
    } else {
      document.getElementById('skillform').reset();
    }
    //document.cookie = `loggedUser=${this.state.user_name};max-age=604800;`;
  };
  handleOnSearch = (string, results) => {
    this.setState({ skills: string });
  };

  handleOnSelect = (item) => {
    this.setState({ skills: item.name });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="containernavbar-brand">
          <div className="row">
            <div className="module-wrapper">
              <div className="mentor-form">
                <h2>Update Skills</h2>
                <form onSubmit={this.handleSubmit} method="post" id="skillform">
                  <div className="form-group searchinput">
                    <label htmlFor="skills" className="form-label">
                      Search skills
                    </label>
                    {this.state.fetchedSkills && (
                      <ReactSearchAutocomplete
                        items={this.state.fetchedSkills}
                        onSearch={this.handleOnSearch}
                        onSelect={this.handleOnSelect}
                        onFocus={this.handleOnFocus}
                        showIcon={false}
                        autoFocus
                      />
                    )}
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
                    <div className="form-check">
                      <input
                        onChange={(e) => this.handleInput(e)}
                        className="form-check-input"
                        type="Checkbox"
                        name="registeras"
                        id="mentor"
                        value="true"
                      />
                      <label className="form-check-label" htmlFor="mentor">
                        I want to volunteer
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Add
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

export default Mentor;
