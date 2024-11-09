import React, { useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const Dice = (props) => {
  const { isRolling, setIsRolling, index, points, setPoints, roll } = props;
  const [key, setKey] = useState(0);
  const [rollingFinished, setRollingFinished] = useState(false);
  const initialX = index === 0 ? -1.5 : 1.5;

  // Only update points after roll finishes
  useEffect(() => {
    if (roll !== "auto") {
      setPoints();
    }
  }, [roll, setPoints]);

  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [initialX, 2, 0],
    args: [1.5, 1.5, 1.5],
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

  const faceCenters = [
    new THREE.Vector3(0, 0.75, 0),
    new THREE.Vector3(0, -0.75, 0),
    new THREE.Vector3(0.75, 0, 0),
    new THREE.Vector3(-0.75, 0, 0),
    new THREE.Vector3(0, 0, 0.75),
    new THREE.Vector3(0, 0, -0.75),
  ];

  const correctedFaceMapping = [3, 4, 1, 2, 5, 6];

  useEffect(() => {
    if (isRolling) {
      api.position.set(initialX, 2, 0);
      api.velocity.set((Math.random() - 0.5) * 2, 5, (Math.random() - 0.5) * 2);
      api.angularVelocity.set(
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10
      );
      setKey((prevKey) => prevKey + 1);
      setRollingFinished(false);
    }
  }, [isRolling, api]);

  useEffect(() => {
    const unsubscribeVelocity = api.velocity.subscribe((velocity) => {
      const speed = Math.sqrt(
        velocity[0] ** 2 + velocity[1] ** 2 + velocity[2] ** 2
      );
      if (speed < 0.1 && !rollingFinished) {
        const positions = faceCenters.map((center) => {
          const worldPos = new THREE.Vector3();
          ref.current.localToWorld(worldPos.copy(center));
          return worldPos;
        });

        let maxY = -Infinity;
        let upwardFaceIndex = -1;

        for (let i = 0; i < positions.length; i++) {
          if (positions[i].y > maxY) {
            maxY = positions[i].y;
            upwardFaceIndex = i;
          }
        }

        const correctedFaceIndex = correctedFaceMapping[upwardFaceIndex];
        console.log("Final upward face:", correctedFaceIndex);

        // Update points with the correct face index after roll finishes
        setPoints(correctedFaceIndex);

        setRollingFinished(true); // Set rolling finished flag to prevent multiple updates
      }
    });

    return () => {
      unsubscribeVelocity(); // Clean up the subscription on unmount
    };
  }, [api, rollingFinished, ref, setPoints]);

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
