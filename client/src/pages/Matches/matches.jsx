import React from "react";
import profileImg from "../../profile.svg";
import Messages from "../..messages.jsx";

export class Matches extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img src={profileImg} className="card-img-top" alt="profile-image" />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{Bio}</p>
        </div>
        <ul className="list-group list-group-flush">
          <button type="button" className="list-group-item">
            Message
          </button>
        </ul>
      </div>
    );
  }
}
