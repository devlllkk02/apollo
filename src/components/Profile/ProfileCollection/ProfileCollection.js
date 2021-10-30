// ------ Profile Collection ------
import React from "react";
import "./ProfileCollection.scss";

import { GridOn } from "@material-ui/icons";

import Navbar from "../../Navbar/Navbar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";

function ProfileCollection() {
  return (
    <div className="profileCollection">
      <Navbar />
      <ProfileHeader />

      {/* Profile Navigation */}
      <ProfileNavigation page="collection" />
      {/* Profile Body */}
      {/* Profile Sidebar */}
      {/* Profile Content */}
    </div>
  );
}

export default ProfileCollection;
