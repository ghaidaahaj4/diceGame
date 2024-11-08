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
      <planeGeometry args={[8, 8]} />
      <meshStandardMaterial
        // color="#a9a9a9" // Gray color
        transparent={true}
        opacity={0} // 0 is fully transparent
      />{" "}
    </mesh>
  );
};

export default Ground;
