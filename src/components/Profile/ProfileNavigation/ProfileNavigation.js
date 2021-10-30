// ------ Profile Navigation ------
import React from "react";
import "./ProfileNavigation.scss";

import { Link } from "react-router-dom";
import { AddBox, Apps, Favorite } from "@material-ui/icons";

const StylesNavBorder = (Page, currentPage) => {
  if (Page === "collection" && currentPage === "collection") {
    return { backgroundColor: "#3cd0ff" };
  }
  if (Page === "created" && currentPage === "created") {
    return { backgroundColor: "#3cd0ff" };
  }
  if (Page === "favourite" && currentPage === "favourite") {
    return { backgroundColor: "#3cd0ff" };
  }
};

function ProfileNavigation({ page }) {
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <p>Collection</p>
              </Link>
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
              <Link to="/created" style={{ textDecoration: "none" }}>
                <p>Created</p>
              </Link>
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
              <Link to="/favourite" style={{ textDecoration: "none" }}>
                <p>Favourite</p>
              </Link>
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
