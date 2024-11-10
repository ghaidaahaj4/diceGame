import { useRef, useState, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import Scene from "../DiceStuff/Scene";

export default function Game({ player1, player2, val }) {
  const [current, setCurrent] = useState(-6);
  const [mySet, setMySet] = useState(new Set());
  const [isTwice, setIsTwice] = useState(0);

  console.log(player1 + "ppp");
  // Track render count
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Render count:", renderCount.current);

    // Reset mySet when renderCount reaches 2
    if (renderCount.current === 2) {
      setMySet(new Set());
    }
  }, []); // Only run once on mount

  function updatePoints(val) {
    if (typeof val === "number" && !isNaN(val)) {
      setCurrent((prev) => prev + val);

      setIsTwice((prev) => {
        if (prev === 1) {
          if (mySet.has(val)) {
            setCurrent(0);
            return 0;
          }
          setMySet(new Set());
          return 0; // Reset after checking twice
        } else {
          setMySet((prevSet) => new Set(prevSet).add(val));
        }
        return prev + 1; // Otherwise, increment normally
      });

      console.log("Current:", current);
      console.log("Set:", mySet);
    }
    console.log("isTwice:", isTwice);
  }

  return (
    <div className="home taller game">
      <PlayerInfo name={player1} />
      <div>
        <div className="SceneInGame">
          <Scene roll={""} points={current} setPoints={updatePoints} />
        </div>
        <h4>Current Points: {current}</h4>
      </div>
      <PlayerInfo name={player2} />
    </div>
  );
}
