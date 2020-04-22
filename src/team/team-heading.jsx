import React, { Component } from "react";
import "./team.css";
import Navbar from "../components/navbar/navbar";

class TeamHeading extends Component {
  state = {};
  render() {
    return (
      <div className="team">
        <Navbar></Navbar>
        <div className="team-heading">Our Team</div>
      </div>
    );
  }
}

export default TeamHeading;
