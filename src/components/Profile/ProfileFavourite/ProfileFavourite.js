// ------ Profile Favourite ------
import React, { useState } from "react";
import "./ProfileFavourite.scss";

import Navbar from "../../Navbar/Navbar";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import ItemCard from "../ItemCard/ItemCard";
import Footer from "../../Footer/Footer";
function ProfileCollection() {
  const [sideMenu, SetSideMenu] = useState(true);

  const SetSideMenuStyles = () => {
    if (sideMenu) {
      return {
        width: "400px",
        transition: "all 0.5s ease-in-out",
        // transitionDelay: "1s",
      };
    } else {
      return { width: "40px", transition: "all 0.5s ease-in-out" };
    }
  };

  return (
    <div className="profileFavourite">
      <Navbar />
      <ProfileHeader />
      <ProfileNavigation page="favourite" />
      {/* Profile Body */}
      <div className="profileFavourite__body">
        {/* <div className="profileFavourite__sidebar" style={SetSideMenuStyles()}>
          <ProfileSidebar sideMenu={sideMenu} SetSideMenu={SetSideMenu} />
        </div> */}
        <div className="profileFavourite__content">
          <div className="profileFavourite__content__container">
            <p>You do not have favourite items</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileCollection;
