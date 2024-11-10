import React from "react";

export default function PlayerInfo({ name, points }) {
  return (
    <div style={{}} className="home smaller">
      <h2>Player Name : </h2>
      <h2>{name}</h2>
      <h3>Total Points : {points}</h3>
    </div>
  );
}
