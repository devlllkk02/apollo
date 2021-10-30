// ------ Profile Navigation ------
import { AddBox, Apps, Favorite, GridOn } from "@material-ui/icons";
import React from "react";
import "./ProfileNavigation.scss";

const StylesNavBorder = (Page, currentPage) => {
  if (Page == "collection" && currentPage == "collection") {
    return { backgroundColor: "#3cd0ff" };
  }
  if (Page == "created" && currentPage == "created") {
    return { backgroundColor: "#3cd0ff" };
  }
  if (Page == "favourite" && currentPage == "favourite") {
    return { backgroundColor: "#3cd0ff" };
  }
};

function ProfileNavigation({ page }) {
  {
    console.log(page);
  }
  return (
    <div className="profile__navigation">
      <div className="profile__navigation__container">
        {/* Collection */}
        <div className="profile__navigation__collection">
          <div className="profile__navigation__collection__content">
            <div className="profile__navigation__collection__icon">
              <Apps style={{ fontSize: "18px", color: "#575757" }} />
            </div>
            <div className="profile__navigation__collection__text">
              <p>Collection</p>
            </div>
            <div className="profile__navigation__collection__amount">
              <p>07</p>
            </div>
          </div>
          <div
            style={StylesNavBorder(page, "collection")}
            className="profile__navigation__collection__border"
          ></div>
        </div>
        {/* Created */}
        <div className="profile__navigation__created">
          <div className="profile__navigation__created__content">
            <div className="profile__navigation__created__icon">
              <AddBox style={{ fontSize: "18px", color: "#575757" }} />
            </div>
            <div className="profile__navigation__created__text">
              <p>Created</p>
            </div>
            <div className="profile__navigation__created__amount">
              <p>18</p>
            </div>
          </div>
          <div
            style={StylesNavBorder(page, "created")}
            className="profile__navigation__created__border"
          ></div>
        </div>
        {/* Favourite */}
        <div className="profile__navigation__favourite">
          <div className="profile__navigation__favourite__content">
            <div className="profile__navigation__favourite__icon">
              <Favorite style={{ fontSize: "18px", color: "#575757" }} />
            </div>
            <div className="profile__navigation__favourite__text">
              <p>Favourite</p>
            </div>
            <div className="profile__navigation__favourite__amount">
              <p>00</p>
            </div>
          </div>
          <div
            style={StylesNavBorder(page, "favourite")}
            className="profile__navigation__favourite__border"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileNavigation;
