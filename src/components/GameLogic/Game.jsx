import { useState, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import Scene from "../DiceStuff/Scene";

export default function Game() {
  const [current, setCurrent] = useState(-6);
  const [mySet, setMySet] = useState(new Set());

  function updatePoints(val) {
    if (typeof val === "number" && !isNaN(val)) {
      setCurrent((prev) => prev + val);
      setMySet((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.add(val);
        return newSet;
      });
      console.log("Adding value:", val);
    } else {
      console.error("Invalid value:", val);
    }
  }

  useEffect(() => {
    console.log("Updated current points:", current);
  }, [current]);

  // Log whenever 'mySet' changes
  useEffect(() => {
    console.log("Updated set values:", Array.from(mySet));
  }, [mySet]);

  return (
    <div className="home taller game">
      <PlayerInfo />
      <div>
        <div className="SceneInGame">
          <Scene roll={""} points={current} setPoints={updatePoints} />
        </div>
        <h4>Current Points: {current}</h4>
      </div>
      <PlayerInfo />
    </div>
  );
}
