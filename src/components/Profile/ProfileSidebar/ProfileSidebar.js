// ------ Profile Sidebar ------
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./ProfileSidebar.scss";

function ProfileSidebar({ sideMenu, SetSideMenu }) {
  useEffect(() => {
    console.log(sideMenu);
  }, [sideMenu]);
  return (
    <div className="profileSidebar">
      <div className="profileSidebar__content">
        <div
          className="profileSidebar__wrapper"
          style={
            !sideMenu
              ? {
                  visibility: "hidden",
                  opacity: "0",
                  // transition: "all 0.1s ease-in-out",
                  // transitionDelay: "1s",
                }
              : {
                  visibility: "visible",
                  opacity: "1",
                  transition: "all 0.5s ease-in-out",
                  transitionDelay: "0.5s",
                }
          }
        >
          <p>Filter Options</p>
        </div>
      </div>
      <div className="profileSidebar__button">
        <div
          className="profileSidebar__button__container"
          onClick={() => SetSideMenu(!sideMenu)}
          style={
            sideMenu
              ? {
                  transform: "rotate(0deg)",
                  transition: "all 0.5s ease-in-out",
                }
              : {
                  transform: "rotate(-180deg)",
                  transition: "all 0.5s ease-in-out",
                }
          }
        >
          <ArrowBack style={{ color: "#575757" }} />
        </div>
      </div>
    </div>
  );
}

export default ProfileSidebar;
