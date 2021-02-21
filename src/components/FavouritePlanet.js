import React, { useContext } from "react";
import "./FavouritePlanet.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { stateContext } from "../StateProvider";

function FavouritePlanet({ id, image, name, description, isFavourite }) {
  const globalContext = useContext(stateContext);
  const { dispatch } = globalContext;
  const removeFav = () => {
    dispatch({
      type: "REMOVE_FROM_FAV",
      id: id,
    });
  };
  return (
    <div className="favourite__planet">
      <img src={image} alt="" />
      <div className="favourite__planetInfo">
        <h2> {name}</h2>
        <p>{description}</p>
        <div className="planet__favourite">
          <span>Remove from Favourites</span>
          <FavoriteIcon
            fontSize="large"
            onClick={removeFav}
            className={!isFavourite && "red"}
          />
        </div>
      </div>
    </div>
  );
}

export default FavouritePlanet;

{
  /* <FavoriteIcon
fontSize="large"
onClick={removeFav}
className={!isfav && "red"}
/> */
}
