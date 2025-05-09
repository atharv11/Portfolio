"use client"
import { useEffect, useRef } from "react";
import React from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
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
    <motion.div className=" -z-1 ml-[9.75vw]  h-[40vw] w-[85vw]  items-center  justify-center text-[5vw]   p-[15vw]">
      <motion.p
      ref={element}
      style={{ opacity }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className="leading-[0.9]">{value}</motion.p>
    </motion.div>
  );
}
