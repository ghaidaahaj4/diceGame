// src/Scene.js
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import PhysicsProvider from "./PhysicsProvider";
import Dice from "./Dice";
import Ground from "./Ground";

const Scene = () => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRollDice = () => {
    setIsRolling(true);
    setTimeout(() => setIsRolling(false), 1000); // Reset after 1 second
  };

  // Add full screen styles
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <Canvas
        camera={{
          position: [0, 10, 0],
          rotation: [-Math.PI / 2, 0, 0],
          fov: 75,
        }} // Adjusted fov for better small screen fit
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <PhysicsProvider>
          <Dice isRolling={isRolling} setIsRolling={setIsRolling} index={0} />
          <Dice isRolling={isRolling} setIsRolling={setIsRolling} index={1} />
          <Ground />
        </PhysicsProvider>
        <OrbitControls enableZoom={false} enableRotate={false} />{" "}
        {/* Disable zoom and rotation */}
        <Environment preset="sunset" />
      </Canvas>
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <h1>3D Dice Roller</h1>
        <button
          onClick={handleRollDice}
          disabled={isRolling}
          style={{ marginTop: "10px" }}
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};

export default Scene;
