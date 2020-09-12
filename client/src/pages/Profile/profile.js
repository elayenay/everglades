import React from "react";
// import profileImg from "../../profile.svg";

const Profile =()=>{
    return (
      <div className="base-container" >
        <div className="header">Profile</div>
        <div className="content">
          <div className="image">
            {/* <img src={profileImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Name</label>
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Bio</label>
              <input type="text" name="bio" placeholder="Bio" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn save">
            Save Profile
          </button>
        </div>
      </div>
    );
}

export default Profile;
