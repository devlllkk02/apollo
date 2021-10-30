// ------ Profile Created ------
import React, { useState } from "react";
import "./ProfileCreated.scss";

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
    <div className="profileCreated">
      <Navbar />
      <ProfileHeader />
      <ProfileNavigation page="created" />
      {/* Profile Body */}
      <div className="profileCreated__body">
        <div className="profileCreated__sidebar" style={SetSideMenuStyles()}>
          <ProfileSidebar sideMenu={sideMenu} SetSideMenu={SetSideMenu} />
        </div>
        <div className="profileCreated__content">
          <div className="profileCreated__content__container">
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
            <ItemCard image="/images/ocean.jpg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileCollection;
