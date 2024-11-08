import Scene from "../DiceStuff/Scene";
import { useState } from "react";
import GameRulesPopup from "./GameRulesPopup";

export default function Landing() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (bool) => {
    setIsOpen(bool);
  };

  return (
    <div className="home">
      <div className="SceneInhome">
        <Scene roll="auto" />
      </div>
      <div className="buttonsmain">
        <button>Start The Game</button>
        <button onClick={() => togglePopup(true)}>Read Game Rules</button>
        <GameRulesPopup isOpen={isOpen} togglePopup={togglePopup} />
      </div>
    </div>
  );
}
