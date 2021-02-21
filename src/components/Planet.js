import React, { useState, useContext } from "react";
import "./Planet.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { stateContext } from "../StateProvider";

function Planet({ name, id, description, image, isFavourite }) {
  const globalContext = useContext(stateContext);
  const { dispatch } = globalContext;
  const [isfav, setIsfav] = useState("false");

  const handleFav = () => {
    setIsfav(!isfav);
    isfav
      ? dispatch({
          type: "ADD_TO_FAV",
          planet: {
            id: id,
            name: name,
            description: description,
            image: image,
            isFavourite: isFavourite,
          },
        })
      : dispatch({ type: "REMOVE_FROM_FAV", id: id });
  };
  return (
    <div className="planet">
      <img src={image} alt="" />
      <div className="planet__info">
        <h2> {name} </h2>
        <p>{description}</p>
        <div className="planet__favourite">
          <span className={`normal ${!isfav && "green"}`}>
            {!isfav ? (
              <div className="added">
                <b>Added</b>
                <span>
                  <DoneAllIcon />
                </span>
              </div>
            ) : (
              "Add to Favourites"
            )}{" "}
          </span>
          <FavoriteIcon
            fontSize="large"
            onClick={handleFav}
            className={!isfav && "red"}
          />
        </div>
      </div>
      <DoneAllIcon className={!isfav ? "green" : "dark"} fontSize="large" />
    </div>
  );
}

export default Planet;
