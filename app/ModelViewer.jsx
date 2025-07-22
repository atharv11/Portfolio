//ModelViewer.jsx
"use client";
import { motion, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import ObjModel from "./ObjModel.jsx";
import { ScrollControls, useScroll } from "@react-three/drei";
import { useRef } from "react";


export default function ModelViewer() {
  console.log("ModelViewer mounted");

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0">
      <Canvas
        camera={{ position: [50, 20, 20], fov: 20 }}
        gl={{ antialias: true }}
      >

          <ambientLight intensity={0.5} />
          <directionalLight
            color="blue"
            position={[-5, 5, 5]}
            intensity={4.2}
          />
          <directionalLight color="red" position={[5, 0, 5]} intensity={2.2} />

          <mesh  position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]}>
            <ObjModel />
          </mesh>
          {/* <Drag meshRef={meshRef} /> */}
   
      </Canvas>
    </div>
  );
   
  function Drag() {
    const {scrollYprogress} = useScroll();
    const x = useTransform(scrollYprogress , [0, 0.1, 0.4, 0.5, 0.8, 1], [0, 5, -3, 0, 8, 5])
    const y = useTransform (scrollYprogress, [0, 0.1, 0.4, 0.5, 0.8, 1], [0, 0, 4, -5, 2, 0])
    const z = useTransform (scrollYprogress, [0, 0.1, 0.4, 0.5, 0.8, 1], [0, -4, 3, 5, 3, -5])
 const {camera} = useThree()                                                                                                                                      
    useFrame(() => {
    const xpos= x.get()
       const ypos= y.get()
          const zpos= z.get()
          camera.position.set(xpos,ypos,zpos)
          camera.lookAt(0,0,0)
    });
  }
}
 