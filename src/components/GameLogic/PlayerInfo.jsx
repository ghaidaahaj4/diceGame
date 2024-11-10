import React from "react";

export default function PlayerInfo({ name }) {
  return (
    <div className="home smaller">
      <h2>Player Name : {name}</h2>
      <h3>Total Points</h3>
    </div>
  );
}
