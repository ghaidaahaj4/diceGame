import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

export default function MyHeader() {
  return (
    <header>
      <FontAwesomeIcon className="icon" icon={faDice} />

      <h1>Dice Roller</h1>
    </header>
  );
}
