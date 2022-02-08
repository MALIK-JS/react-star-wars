import React from "react";

function StarShipCard({ name }) {
  console.log("malik", name);
  return (
    <article className="card">
      <h1>{name}</h1>
    </article>
  );
}

export default StarShipCard;
