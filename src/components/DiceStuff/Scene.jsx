/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import PhysicsProvider from "./PhysicsProvider";
import Dice from "./Dice";
import Ground from "./Ground";
import diceSound from "../../assets/diceSound.mp3";
import "../../index.css";
const Scene = ({ roll, points, setPoints }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [showButton, setShowButton] = useState(true); // Handle button visibility
  const handleRollDice = () => {
    setIsRolling(true); // Start rolling
    if (roll !== "auto") {
      new Audio(diceSound).play();
    }
    setTimeout(() => {
      setIsRolling(false); // End rolling after animation
    }, 1000);
  };

  useEffect(() => {
    // Set full-screen styles on mount
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    // Automatically roll dice if 'roll' is 'auto'
    if (roll === "auto") {
      setShowButton(false); // Hide the button
      handleRollDice(); // Trigger the dice roll automatically
    }

    return () => {
      // Reset body styles on unmount
      document.body.style.margin = "";
      document.body.style.overflow = "";
    };
  }, [roll]);

  return (
    <div
      style={{
        height: roll ? "100vh" : "100%",
        width: roll ? "100vh" : "100%",
        position: "relative",
      }}
    >
      <Canvas
        camera={{
          position: [0, 10, 0],
          rotation: [-Math.PI / 2, 0, 0],
          fov: 75,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PhysicsProvider>
          <Dice
            roll={roll}
            isRolling={isRolling}
            setIsRolling={setIsRolling}
            index={0}
            points={points}
            setPoints={setPoints}
          />
          <Dice
            roll={roll}
            isRolling={isRolling}
            setIsRolling={setIsRolling}
            index={1}
            points={points}
            setPoints={setPoints}
          />
          <Ground />
        </PhysicsProvider>
        <OrbitControls enableZoom={false} enableRotate={false} />
        <Environment preset="sunset" />
      </Canvas>

      <div className="ButtonInScene">
        {showButton && (
          <button onClick={handleRollDice} disabled={isRolling}>
            Roll Dice
          </button>
        )}
      </div>
      <div className="ButtonInScene2">
        {showButton && <button disabled={isRolling}>HOLD</button>}
      </div>
    </div>
  );
};

export default Scene;
