// ------ Profile Header ------
import React from "react";
import "./ProfileHeader.scss";

function ProfileHeader() {
  return (
    <div className="profileHeader">
      {/* Profile Banner */}
      <div className="profileHeader__banner">
        <img src="./images/banner.jpg" alt="" />
      </div>
      {/* Profile Image */}
      <div className="profileHeader__image">
        <img src="./images/profilePicture.jpg" alt="" />
      </div>
      {/* Profile Details */}
      <div className="profileHeader__details">
        <div className="profileHeader__details__name">
          <p>Janice Brownwell</p>
        </div>
        <div className="profileHeader__details__userId">
          <p>#pTEx23zr</p>
        </div>
        <div className="profileHeader__details__createdDate">
          <p>16th January 2021</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
