// ------ Item Card ------
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import React from "react";
import "./ItemCard.scss";

function ItemCard({ image }) {
  return (
    <div className="itemCard">
      <div className="itemCard__image">
        <div className="itemCard__image__container">
          <img src={image} alt="" />
        </div>
      </div>

      <div className="itemCard__details">
        <div className="itemCard__details__category">
          <p>Item Category</p>
        </div>
        <div className="itemCard__details__price">
          <p>$134.89</p>
        </div>
      </div>
      <div className="itemCard__date">
        <p>12th January 2021</p>
      </div>
      <div className="itemCard__buyNow">
        <div className="itemCard__buyNow__text">
          <p>Buy Now</p>
        </div>
        <div className="itemCard__buyNow__icon">
          <FavoriteBorder style={{ color: "#575757" }} />
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
