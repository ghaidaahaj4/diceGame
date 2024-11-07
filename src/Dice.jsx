// src/Dice.js
import React, { useRef, useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";

const Dice = ({ isRolling, setIsRolling, index }) => {
  const [key, setKey] = useState(0);
  const initialX = index === 0 ? -0.75 : 0.75; // Separate the initial positions slightly
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [initialX, 2, 0], // Lower initial position
    args: [1.5, 1.5, 1.5], // Dice size
    onCollide: () => setIsRolling(false),
    key: key,
  }));

  const textures = useTexture([
    "/textures/dice1.png",
    "/textures/dice2.png",
    "/textures/dice3.png",
    "/textures/dice4.png",
    "/textures/dice5.png",
    "/textures/dice6.png",
  ]);

  useEffect(() => {
    if (isRolling) {
      // Ensure dice starts from a lower height and falls within the middle bounds
      api.position.set(initialX, 2, 0);
      api.velocity.set((Math.random() - 0.5) * 2, 5, (Math.random() - 0.5) * 2);
      api.angularVelocity.set(
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10
      );
      // Force a re-render to ensure the position is reset
      setKey((prevKey) => prevKey + 1);
    }
  }, [isRolling, api]);

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

export default Dice;
