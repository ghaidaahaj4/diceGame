import { useState, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import Scene from "../DiceStuff/Scene";

export default function Game() {
  const [current, setCurrent] = useState(-6);

  // Function to update current points
  function setCurrentPoints(val) {
    // Ensure val is a number before adding
    if (typeof val === "number" && !isNaN(val)) {
      setCurrent((prev) => prev + val);
      console.log("Adding value: " + val);
    } else {
      console.error("Invalid value:", val); // Log an error if val is not a valid number
    }
  }

  useEffect(() => {
    console.log("Updated current points:", current);
  }, [current]);

  return (
    <div className="home taller game">
      <PlayerInfo />
      <div>
        <div className="SceneInGame">
          <Scene roll={""} points={current} setPoints={setCurrentPoints} />
        </div>
        <h4>Current Points: {current}</h4>
      </div>
      <PlayerInfo />
    </div>
  );
}
