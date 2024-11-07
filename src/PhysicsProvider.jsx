// src/PhysicsProvider.js
import React from "react";
import { Physics } from "@react-three/cannon";

const PhysicsProvider = ({ children }) => {
  return <Physics gravity={[0, -9.81, 0]}>{children}</Physics>;
};

export default PhysicsProvider;
