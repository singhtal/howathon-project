import React, { Component } from "react";
import Myskills from "./Myskills";
import Header from "../layout/Header";
import Search from "./Search";
import Newmentor from "./NewMentor";
import { DashboardMentor, DashboardMentee } from "../services/DashboardService";

class Home extends Component {
  constructor(props) {
    super();
    document.body.classList.remove("loginPage");
    this.state = {
      mentors: "",
      mentees: "",
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
    DashboardMentor(this.getCookie("loggedUser")).then((mentor) => {
      this.setState({ mentors: mentor.data });
      console.log(mentor, "mentor");
    });
    DashboardMentee(this.getCookie("loggedUser")).then((mentee) => {
      this.setState({ mentees: mentee.data });
      console.log(mentee, "mentee");
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
                <Search name={user} />
                <Newmentor />
              </div>

              {this.state.mentees.length > 0 && (
                <div className="mentees">
                  <h2>Mentees</h2>
                  <div className="blocks row">
                    {this.state.mentees.map((mente) => (
                      <div className="card" key={mente._id}>
                        <div className="card-body">
                          <h5 className="card-title">{mente.MentorID}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
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
                          <p>Last updated : {mente.date}</p>
                          <p>Last contacted : 2-feb-21</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {this.state.mentors.length > 0 && (
                <div className="mentors">
                  <h2>Mentors</h2>
                  <div className="blocks row">
                    {this.state.mentors.map((mentor) => (
                      <div className="card" key={mentor._id}>
                        <div className="card-body">
                          <h5 className="card-title">{mentor.MentorID}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
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
                          <p>Last updated : {mentor.date}</p>
                          <p>Last contacted : 2-feb-21</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="row">
                {user !== undefined ? <Myskills name={user} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
