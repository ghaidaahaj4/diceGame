import React, { useState } from "react";
import Landing from "../LandingPage/Landing";
import StartPage from "./StartPage";
export default function Base() {
  const [game, StartGame] = useState(false);
  const [goal, setGoal] = useState(50);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function onClickStartGame() {
    StartGame(true);
  }
  console.log(goal);
  console.log(player1);
  return (
    <div>
      {!game && <Landing startGame={onClickStartGame} />}
      {game && (
        <StartPage
          player1={player1}
          player2={player2}
          value={goal}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setValue={setGoal}
        />
      )}
    </div>
  );
}
