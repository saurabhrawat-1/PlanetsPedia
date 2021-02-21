import React, { useState, useEffect } from "react";
import "./Body.css";
import Planet from "./Planet";
import axios from "axios";
import { planetData } from "../utils";

function Body() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://assignment-machstatz.herokuapp.com/planet")
      .then((res) => {
        //Add other properties
        res.data.forEach((item, i) => {
          item.description = planetData[i].description;
          item.url = planetData[i].url;
        });

        setPlanets(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // const handleFav = (planetId) => {
  //   let clickedPlanet = planets.find((planetObj) => planetObj.id === planetId);
  //   let updatedPlanetObj = {
  //     ...clickedPlanet,
  //     isFavourite: !clickedPlanet.isFavourite,
  //   };
  // };

  return (
    <div className="planet__container">
      {planets.map((planet) => (
        <Planet
          key={planet.id}
          name={planet.name}
          id={planet.id}
          isFavourite={false}
          description={planet.description}
          image={planet.url}
          // handleClick={handleFav}
        />
      ))}
    </div>
  );
}

export default Body;
