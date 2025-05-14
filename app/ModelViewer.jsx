//ModelViewer.jsx
"use client";

import { Canvas } from "@react-three/fiber";
import ObjModel from "./ObjModel.jsx";
import { OrbitControls } from "@react-three/drei";

export default function ModelViewer() {
  console.log("ModelViewer mounted");

  return (
    <div className="fixed -z-1 top-0 left-0 w-full h-screen ">
      <Canvas camera={{ position: [50, 20, 20], fov: 20 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight color="blue" position={[-5, 5, 5]} intensity={4.2} />

        <directionalLight color="red" position={[5, 0, 5]} intensity={2.2} />

        {/* Model and Controls */}
        <mesh position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
          <ObjModel />
        </mesh>
      </Canvas>
    </div>
  );
}
