/* eslint-disable react/prop-types */
import Slider from "react-slider";
import { useState } from "react";
import Typewriter from "typewriter-effect";
export default function StartPage(props) {
  const [notification, showNotification] = useState("");
  let {
    player1,
    player2,
    value,
    setPlayer1,
    setPlayer2,
    setValue,
    doneSetting,
    setDoneSettings,
  } = props;

  function handleSliderChange(val) {
    setValue(val);
  }
  function handleNameChange(playerNum, val) {
    if (playerNum === 1) {
      setPlayer1(val);
    } else {
      setPlayer2(val);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!player1 || !player2) {
      showNotification("ENTER PLAYER NAMES");
    } else {
      setDoneSettings(true);
    }
  }
  return (
    <div className="home taller">
      <form onSubmit={handleSubmit}>
        <Typewriter
          options={{
            strings: ["PLS, ENTER PLAYER NAMES"],
            autoStart: true,
            loop: false,

            deleteSpeed: 10000000000000000,
            backSpeed: 10000000000000000,
          }}
        />
        {notification && <p className="notification">MUST ENTER NAMES</p>}
        <label>
          <input
            type="text"
            name="name"
            placeholder="Player 1 Name"
            onChange={(event) => {
              handleNameChange(1, event.target.value);
            }}
          />
        </label>
        <label>
          <input
            type="text"
            name="name"
            placeholder="Player 2 Name"
            onChange={(event) => {
              handleNameChange(2, event.target.value);
            }}
          />
        </label>
        <div>
          <Slider
            className="slider"
            thumbClassName="slider-thumb"
            min={0}
            max={100}
            value={value}
            onChange={handleSliderChange}
            renderThumb={(props, state) => {
              const { key, ...restProps } = props;
              return (
                <div key={key} {...restProps}>
                  {state.valueNow}
                </div>
              );
            }}
          />

          <p>slide to select a goal</p>
        </div>

        <button type="submit">LET'S START</button>
      </form>
    </div>
  );
}
