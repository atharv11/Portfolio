"use client";
import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Paragraph from "./Paragraph";
import Lenis from "lenis";
import { ReactLenis } from "lenis/react";
import Projects from "./Projects";
import "./scroll.css";
import Navbar from "./Navbar";
import ModelViewer from "./ModelViewer";
import Contact from "./Contact";

export default function Page() {
  const sectionControl = useRef(null);

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behavior: "smooth" });
  };

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
        <Navbar scrollHandler={scrollHandler} sectionControl={sectionControl} />
        <Paragraph />
        <div className="h-[30vw]"></div>
        <Projects />
        <Contact sectionControl={sectionControl} />
      </div>
    </ReactLenis>
  );
}
