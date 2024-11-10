/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function GameRulesPopup({ isOpen, togglePopup }) {
  return (
    <Popup
      open={isOpen}
      onClose={() => togglePopup(false)}
      position="center"
      contentStyle={{
        width: "70%",
        height: "50vh",
        overflow: "scroll",
        borderRadius: "10vh",
        position: "fixed",
        bottom: "20vh",
        right: "15vw",
        left: "15vw",
        border: "1vh dotted #da0037",
      }}
    >
      <div className="GameRulles">
        <h1>Game Rules</h1>
        <ul>
          <li>
            Two-Player Game in Rounds: Each player takes turns rolling two dice.
          </li>
          <li>
            Rolling Rules: Players can roll as many times as they like in a
            turn, adding each roll's total to their round score.
          </li>
          <li>
            Double Penalty: Rolling a double causes the player to lose their
            entire round score.
          </li>
          <li>
            'Hold' Option: Players can choose to 'Hold,' adding their round
            score to their total score and ending their turn.
          </li>
          <li>
            Winning Condition: The first player to reach a total score of the
            pre-chosen points wins!
          </li>
        </ul>
        <button className="close" onClick={() => togglePopup(false)}>
          <FontAwesomeIcon className="icon" icon={faTimes} /> close
        </button>
      </div>
    </Popup>
  );
}
