import React, { useContext } from "react";
import FavouritePlanet from "./FavouritePlanet";
import "./Favourites.css";
import { stateContext } from "../StateProvider";

function Favourites() {
  const globalContext = useContext(stateContext);
  const {
    state: { favPlanets },
  } = globalContext;
  return (
    <div className="favourite">
      <div className="favourite__header">
        <h1>Your Favourite Planets</h1>
      </div>

      <div className="favourite__list">
        {favPlanets.map((planet) => (
          <FavouritePlanet
            key={planet.id}
            id={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
            isFavourite={planet.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
