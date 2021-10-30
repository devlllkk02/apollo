// ------ Profile Collection ------
import React, { useState } from "react";
import "./ProfileCollection.scss";

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
    <div className="profileCollection">
      <Navbar />
      <ProfileHeader />
      <ProfileNavigation page="collection" />
      {/* Profile Body */}
      <div className="profileCollection__body">
        <div className="profileCollection__sidebar" style={SetSideMenuStyles()}>
          <ProfileSidebar sideMenu={sideMenu} SetSideMenu={SetSideMenu} />
        </div>
        <div className="profileCollection__content">
          <div className="profileCollection__content__container">
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
            <ItemCard image="/images/banner.jpg"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileCollection;
