// src/Ground.js
import React from "react";
import { usePlane } from "@react-three/cannon";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

extend({ PlaneGeometry: THREE.PlaneGeometry });

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[8, 8]} /> {/* Adjusted size to provide padding */}
      <meshStandardMaterial opacity={0.3} />
    </mesh>
  );
};

export default Ground;
