import React, { Component } from "react";
import "./rating.scss";
import { DashboardProfile } from "../services/DashboardService";
import './Profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        skills: [],
      },
    };
  }
  componentDidMount() {
    let user = this.props.user;
    DashboardProfile(user).then((user) => {
      this.setState({ user: user.data });
    });
  }
  render() {
    return (
      <div className="profile">
        {this.state.user && (
          <div className="profile-wrapper">
              <button type="button" onClick = {this.props.closeHandler} className="profile-close">x</button>
            <div className="profile-top">
              <div className="profile-pic">
                <img src="assets/img/user.png" alt="name" />
              </div>
              <label>
                {this.state.user.firstName} {this.state.user.lastName}
              </label>
            </div>
            <div className="profile-skills">
              <div className="row">
                <div className="col-md-12">
                  {this.state.user.skills.length > 0 ? (
                    <table>
                      <tr>
                        <th>Skill Name</th>
                        <th>Ratings</th>
                      </tr>
                      <tbody>
                        {this.state.user.skills.map((skill) => {
                          return (
                            <tr key={skill._id}>
                              <td>{skill.skills}</td>
                              <td>{skill.rating}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
