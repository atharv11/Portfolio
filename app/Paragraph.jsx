"use client"
import { useEffect, useRef } from "react";
import React from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import "./font.css";
export default function Paragraph({ value }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start start', 'end start'],

  });
const opacity = useTransform(scrollYProgress, [0,0.05, 0.1,  1], [1,0.9, 0.8, 0]);

  useEffect ( ()=>{
     scrollYProgress.on("change", e=> console.log(e))
  },[])
  return (
    <motion.div className=" text-white  ml-[2vw] flex flex-col opacity-85 h-[40vw] w-[95vw]   text-[4.9vw]  pt-[15vw] ">
      <motion.div
      ref={element}
      style={{ opacity }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="leading-[0.9]  w-full ">
        <div className=" h2 capitalize pl-[24vw]">A <span className="h1">THARV</span> S<span className="h1">AHARE</span></div> 
       <div className="h1  pl-[35vw] capitalize">FRONT END</div>  <div className="h3 pl-[22vw] capitalize text-[5.5vw]">☼ WEB DEVELOPER☀ </div><div className="h1 pl-[20vw] ">STUDYING MSc @ OVGU</div> 
        <div className="capitalize h3 text-[5vw] pl-[20vw]">BASED IN  MAGDEBURG ⚗✨</div></motion.div>
    </motion.div>
  );
}
