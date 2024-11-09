import PlayerInfo from "./PlayerInfo";

import Scene from "../DiceStuff/Scene";
export default function Game() {
  return (
    <div className="home taller game">
      <PlayerInfo />
      <div>
        <div className="SceneInGame">
          <Scene />
        </div>
        <h4>Current Points</h4>
      </div>
      <PlayerInfo />
    </div>
  );
}
