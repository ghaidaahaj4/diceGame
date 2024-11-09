import PlayerInfo from "./PlayerInfo";

import Scene from "../DiceStuff/Scene";
export default function Game() {
  return (
    <div className="home taller game">
      <PlayerInfo />
      <div className="SceneInGame">
        <Scene />
      </div>
      <PlayerInfo />
    </div>
  );
}
