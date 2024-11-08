import React from "react";
import Slider from "react-slider";
import { useState } from "react";
export default function StartPage() {
  const [value, setValue] = useState(50);
  const handleSliderChange = (val) => {
    setValue(val);
  };
  return (
    <div className="home taller">
      <form>
        <h2>Enter Player Names</h2>
        <label>
          <input type="text" name="name" placeholder="Player 1 Name" />
        </label>
        <label>
          <input type="text" name="name" placeholder="Player 2 Name" />
        </label>
        <div>
          <Slider
            className="slider"
            thumbClassName="slider-thumb"
            min={0}
            max={100}
            value={value}
            onChange={handleSliderChange}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
          <p>slide to select a goal</p>
        </div>

        <button onClick={console.log("hi")}>LET'S START</button>
      </form>
    </div>
  );
}
