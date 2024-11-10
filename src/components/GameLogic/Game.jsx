import { useRef, useState, useEffect } from "react";
import PlayerInfo from "./PlayerInfo";
import Scene from "../DiceStuff/Scene";

export default function Game({ player1, player2, value }) {
  const [current, setCurrent] = useState(-6);
  const [mySet, setMySet] = useState(new Set());
  const [isTwice, setIsTwice] = useState(0);
  const [turn, setTurn] = useState(true); // player 1 turn
  const [p1points, setP1Points] = useState(0);
  const [p2points, setP2Points] = useState(0);
  const [countroll, setCountRoll] = useState(0);

  // Handle countroll and reset when it reaches 5
  function handleCountRoll() {
    setCountRoll((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        // Reset countroll and change turn when it reaches 5
        onClickHold();
        setCurrent(0);
        setMySet(new Set());
        setIsTwice(0);
        setTurn((prevTurn) => !prevTurn);
        return 0;
      }
      return newCount;
    });
    console.log(countroll);
  }

  useEffect(() => {
    if (p1points >= value) {
      alert(player1 + " is the winner");
      window.location.href = "/";
    } else if (p2points >= value) {
      alert(player2 + " is the winner");
      window.location.href = "/";
    }
  }, [p1points, p2points, player1, player2, value]);

  useEffect(() => {
    console.log("Turn changed to: ", turn ? player1 : player2);
  }, [turn]);

  function onClickHold() {
    if (turn === true) {
      setP1Points((prev) => prev + current);
      setTurn(false);
    } else {
      setP2Points((prev) => prev + current);
      setTurn(true);
    }
    setCurrent(0);
    setMySet(new Set());
    setIsTwice(0);
  }

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    if (renderCount.current === 2) {
      setMySet(new Set());
    }
  }, []);

  function updatePoints(val) {
    if (typeof val === "number" && !isNaN(val)) {
      setCurrent((prev) => prev + val);

      setIsTwice((prev) => {
        if (prev === 1) {
          if (mySet.has(val)) {
            setCurrent(0);
            setMySet(new Set());
            setTurn((prev) => !prev);
            return 0;
          }
          setMySet(new Set());
          return 0;
        } else {
          setMySet((prevSet) => new Set(prevSet).add(val));
        }
        return prev + 1;
      });
    }
  }

  return (
    <div className="home taller col">
      <div className="game">
        <PlayerInfo name={player1} points={p1points} />
        <div>
          <div className="SceneInGame">
            <Scene
              roll={""}
              points={current}
              setPoints={updatePoints}
              onClickHold={onClickHold}
              setCount={handleCountRoll}
            />
          </div>
        </div>
        <PlayerInfo name={player2} points={p2points} />
      </div>
      <div className="VarsIngams">
        <h4>Current Points: {current}</h4>
        <div>
          <h2>GOAL {value}</h2>

          <h3> rolls left {5 - countroll}</h3>
        </div>

        <h4>Turn: {turn ? player1 : player2}</h4>
      </div>
    </div>
  );
}
