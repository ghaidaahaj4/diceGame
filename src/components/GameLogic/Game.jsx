import { useState, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import Scene from "../DiceStuff/Scene";

export default function Game() {
  const [current, setCurrent] = useState(-6);
  const [mySet, setMySet] = useState(new Set());
  const [isTwice, setIsTwice] = useState(0);

  console.log(mySet);

  function updatePoints(val) {
    if (typeof val === "number" && !isNaN(val)) {
      setCurrent((prev) => prev + val);
      setIsTwice((prev) => {
        if (prev === 1) {
          if (mySet.has(val)) {
            setCurrent(0);
            setMySet(new Set());
            return 0; // Reset isTwice counter
          } else {
            setMySet((prevSet) => new Set(prevSet).add(val));
          }
          return 0; // Reset after checking twice
        }
        return prev + 1; // Otherwise, increment normally
      });

      console.log("Current:", current);
      console.log("Set:", mySet);
    }
    console.log("isTwice:", isTwice);
  }
  // useEffect(() => {
  //   console.log("Updated current points:", current);
  // }, [current]);

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
