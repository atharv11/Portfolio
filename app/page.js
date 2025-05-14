"use client";
import React, { useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Paragraph from "./Paragraph";
import Lenis from "lenis";
import { ReactLenis } from "lenis/react";
import Projects from "./Projects";
import "./scroll.css";
import Navbar from "./Navbar";
import ModelViewer from "./ModelViewer";

export default function Page() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // const paragraph =
  //   "Atharv Sahare Front End Developer & Illustrator Currently doing MSc @ OVGU Magdeburg";

  return (
    <ReactLenis root>
                 <ModelViewer />
<div className="relative z-10">
  <Navbar />
  <Paragraph />
      <div className="h-[50vw]"></div>
  <Projects />
</div>


    </ReactLenis>
  );
}
