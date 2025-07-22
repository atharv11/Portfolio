import React, { useState } from "react";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(null);

  const headers = ["Project", "Category", "Client", "Year"];
  const rows = [
    ["AI Explanable Financial App", "FrontEnd Development","OVGU, Magdeburg", "2025", ],
    ["AI flashcard/quizz generator", "Development", "OVGU, Magdeburg", "2025"],
    ["MuseWomen", "FullStack Development", "personal", "2025"],
    ["Information Retrieval and Clustering Tool", "FrontEnd Development", "OVGU,Magdeburg", "2024"]
  ];
  const project = {
    discription: {
      one: "This project is still in progress the updates regarding this project will up updated here soon",
      two : "Built interactive UI elements with Framer Motion, enhancing navigation and reducing load times.",
      three: "Built the frontend of an adaptive learning platform using ReactJS and TailwindCSS, enabling PDF uploads, dynamic quizzes, and performance tracking. The UI connects to a Django backend with an LLM and genetic algorithm for personalized content.",
    },
  };

  const toggleExpand = (index) => {
    setIsExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className=" w-full h-full  p-5 text-[1.25vw] overflow-y-auto ">
      {/* Header Row */}
      <div className="grid opacity-60 grid-cols-4 gap-x-[9vw] border-b-2 border-white pb-2 text-zinc-200 uppercase">
        {headers.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </div>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden border-b-2 border-white text-white">
          {/* Main Row */}
          <div
            onClick={() => toggleExpand(rowIndex)}
            className={`cursor-pointer grid grid-cols-4 gap-x-[7vw] py-2 px-2 transition-all duration-500  ease-in-out 
              ${
                isExpanded === rowIndex
                  ? "bg-white text-black"
                  : "hover:bg-white hover:pl-6 hover:text-black"
              }
            `}
          >
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="text-xl">
                {cell}
              </div>
            ))}
          </div>

          {/* Expandable Content */}
          <div
            className={` col-span-4 overflow-hidden transition-[max-height] duration-500 ease-in-out 
              ${isExpanded === rowIndex ? "max-h-[80vw]" : "max-h-0"}
            `}
          >
          
    
          {rowIndex === 0 && (
  <div className="w-[40vw] h-[20vw]  text-white ">
     <div className="text-3xl mt-2">{project.discription.one}</div>
     <button  className="bg-white rounded-full text-black mt-6 px-3">SEE PROJECT</button>
  </div>
)}
     {rowIndex === 2 && (
  <div className="w-[60vw] h-[20vw]  text-white ">
     <div className="text-3xl mt-2">{project.discription.two}</div>
     <button   className="bg-white rounded-full text-black mt-6 px-3">SEE PROJECT</button>
  </div>
)}
       {rowIndex === 1 && (
  <div className="w-[60vw] h-[20vw]  text-white ">
     <div className="text-3xl mt-2">{project.discription.three}</div>
     <button  className="bg-white rounded-full text-black mt-6 px-3">SEE PROJECT</button>
  </div>
)}
  {rowIndex === 3 && (
  <div className="w-[60vw] h-[20vw]  text-white ">
     <div className="text-3xl mt-2">{project.discription.two}</div>
     <button  className="bg-white rounded-full text-black mt-6 px-3">SEE PROJECT</button>
  </div>
)}
        
          </div>
        </div>
      ))}
    </div>
  );
}
