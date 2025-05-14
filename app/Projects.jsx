import React, { useState } from "react";

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(null);

  const headers = ["Project", "Category", "Client", "Year"];
  const rows = [
    ["AI flashcard/quizz generator", "Development", "OVGU, Magdeburg", "2025"],
    ["MuseWomen", "FullStack Development", "personal", "2025"],
    ["Gallery Portfolio", "FrontEnd Development", "-", "2024"]
  ];

  const toggleExpand = (index) => {
    setIsExpanded(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full h-[100vh]  bg-zinc-950 p-5 text-[1.25vw] overflow-y-auto z-99">
      
      {/* Header Row */}
      <div className="grid opacity-60 grid-cols-4 gap-x-[11vw] border-b-2 border-white pb-2 text-zinc-200 uppercase">
        {headers.map((title, i) => (
          <div key={i}>{title}</div>
        ))}
      </div>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="border-b-2 border-white text-white">
          
          {/* Main Row */}
          <div
            onClick={() => toggleExpand(rowIndex)}
            className={`cursor-pointer grid grid-cols-4 gap-x-[10vw] py-2 px-2 transition-all duration-500  ease-in-out 
              ${isExpanded === rowIndex ? "bg-white text-black" : "hover:bg-white hover:pl-6 hover:text-black"}
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
              ${isExpanded === rowIndex ? "max-h-[50vw]" : "max-h-0"}
            `}
          >
            <div className="text-sm text-white mt-2 px-2">
              <p className="h-[10vw]">
               As part of the Locomotive team, we ensured modularity and scalability by employing a component-based approach, enhancing the user interface with dynamic animations for Unity's main website. 
               This resulted in delivering an engaging website that aligns with Unity's brand and objectives.
              </p>
              <p>(You can add descriptions, links, tech stack, etc.)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
