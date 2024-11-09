import React, { useState } from "react";
import Landing from "../LandingPage/Landing";
import StartPage from "./StartPage";
import Game from "./Game";
export default function Base() {
  const [game, StartGame] = useState(false);
  const [goal, setGoal] = useState(50);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [doneSettings, setDoneSettings] = useState(false);
  function onClickStartGame() {
    StartGame(true);
  }

  return (
    <div>
      {!game && <Landing startGame={onClickStartGame} />}
      {game && !doneSettings && (
        <StartPage
          player1={player1}
          player2={player2}
          value={goal}
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setValue={setGoal}
          doneSetting={doneSettings}
          setDoneSettings={setDoneSettings}
        />
      )}
      {doneSettings && <Game />}
    </div>
  );
}
