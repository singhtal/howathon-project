import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
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
    );
  }
}

export default Sidebar;
