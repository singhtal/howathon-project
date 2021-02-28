import React, { Component } from "react";
import "./rating.scss";
import { DashboardMentor, DashboardMentee } from "../services/DashboardService";

class MentorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: "",
      mentees: "",
    };
  }
  componentDidMount() {
    let user = this.props.user;
    DashboardMentor(user).then((mentor) => {
      this.setState({ mentors: mentor.data });
      console.log(mentor, "mentor");
    });
    DashboardMentee(user).then((mentee) => {
      this.setState({ mentees: mentee.data });
      console.log(mentee, "mentee");
    });
  }
  render() {
    return (
      <div className="mentorslist">
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
      </div>
    );
  }
}

export default MentorsList;
