import React, { Component } from "react";
import "./rating.scss";
import { DashboardProfile } from "../services/DashboardService";
import "./Profile.scss";
import user from "../assets/img/user.png";
import close from "../assets/img/close.svg";

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
      console.log(user);
      if (user.length === 0) {
        this.setState({
          message: "There is some error please contact administrator",
        });
      }
      this.setState({ user: user.data });
    });
  }
  render() {
    return (
      <div className="profile">
        {this.state.user && (
          <div className="profile-wrapper">
            <button
              type="button"
              onClick={this.props.closeHandler}
              className="profile-close"
            >
              <img src={close} alt="name" />
            </button>
            {this.state.message}
            <div className="profile-top">
              <div className="profile-pic">
                <img src={user} alt="name" />
              </div>
              <div className="profile-desc">
                <label>
                  {this.state.user.firstName} {this.state.user.lastName}
                </label>
              </div>
            </div>
            <div className="profile-skills">
              <div className="row">
                <div className="col-md-12">
                  {this.state.user.skills.length > 0 ? (
                    <table>
                      <tr>
                        <th>Area of expertise</th>
                      </tr>
                      <tbody>
                        {this.state.user.skills.map((skill) => {
                          return (
                            <tr key={skill._id}>
                              <td>{skill.skills}</td>
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
