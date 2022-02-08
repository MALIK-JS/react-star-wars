import React, { useState, useEffect } from "react";
import axios from "axios";
import StarShipCard from "./StarShipCard";

const url = "https://swapi.dev/api/starships/";
function Sw_api() {
  const [ships, setShips] = useState([]);

  const fetchShip = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setShips(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShip();
  }, []);

  return (
    <section>
      {ships.map((ship) => {
        return <StarShipCard {...ship} />;
      })}
    </section>
  );
}

export default Sw_api;
