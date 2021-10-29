// ------ Profile ------
import React from "react";
import "./Profile.scss";

import Navbar from "../Navbar/Navbar";

function Profile() {
  return (
    <div className="profile">
      {/* Navbar */}
      <Navbar />
      {/* Profile Banner */}
      <div className="profile__banner">
        <img src="./images/banner.jpg" alt="" />
      </div>
      {/* Profile Image */}
      <div className="profile__image">
        <img src="./images/profilePicture.jpg" alt="" />
      </div>
      {/* Profile Details */}
      <div className="profile__details">
        <div className="profile__details__name">
          <p>Janice Brownwell</p>
        </div>
        <div className="profile__details__userId">
          <p>#pTEx23zr</p>
        </div>
        <div className="profile__details__createdDate">
          <p>16th January 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
