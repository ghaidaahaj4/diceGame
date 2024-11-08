import React from "react";
import Scene from "./DiceStuff/Scene";

export default function Landing() {
  return (
    <div className="gameDescription">
      <Scene roll="auto" style={{ position: "relative", height: "100vh" }} />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: 2,
        }}
      >
        <h2>Game Description</h2>
        <p>
          RollDiceGame is a thrilling two-player game played in rounds. Each
          player rolls two dice as many times as they want during their turn.
          The results are added to their round's score. However, if a player
          rolls a double six, they lose their entire round's score. Players can
          choose to 'Hold', adding their round's score to their global score.
          The first player to reach 100 points wins the game!
        </p>
        <button>Start The Game</button>
      </div>
    </div>
  );
}
