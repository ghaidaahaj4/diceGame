import React, { useState } from "react";
import Scene from "./DiceStuff/Scene";
import diceSound from "../assets/diceSound.mp3";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
export default function Landing() {
  const ReadGameRules = () => {
    new Audio(diceSound).play();
  };

  return (
    <div className="home">
      <div
        style={{
          position: "absolute",
          top: "-10vh",

          left: "0",
          right: "0",

          zIndex: -3,
        }}
      >
        <Scene roll="auto" />
      </div>
      <div className="buttonsmain">
        <button>Start The Game</button>

        <Popup
          trigger={<button onClick={ReadGameRules}>Read Game Rules</button>}
          position="center"
        >
          <div>
            <h1>Game Rulles</h1>
            <p>
              RollDiceGame is a thrilling two-player game played in rounds. Each
              player rolls two dice as many times as they want during their
              turn. The results are added to their round's score. However, if a
              player rolls a double six, they lose their entire round's score.
              Players can choose to 'Hold', adding their round's score to their
              global score. The first player to reach 100 points wins the game!
            </p>
          </div>
          <button>Click here</button>
        </Popup>
      </div>
    </div>
  );
}
