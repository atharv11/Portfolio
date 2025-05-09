"use client";
import React, { useEffect } from "react";
import Paragraph from "./Paragraph";
import Lenis from "lenis";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ReactLenis } from "lenis/react";
import Projects from "./Projects";
import "./scroll.css";

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

  const paragraph =
    "Atharv Sahare Front End Developer & Illustrator Currently doing MSc @ OVGU Magdeburg";

  return (
    <ReactLenis root>
    
      <div className="
 h-screen w-full text-white bg-zinc-900">
        <Paragraph value={paragraph} />
      </div>
      <div className="h-[90vh] bg-zinc-900"></div>
   <Projects/>
    </ReactLenis>
  );
}
