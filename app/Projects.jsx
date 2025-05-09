import React from "react";

export default function Projects() {
  const arr = ["Projects", "Category", "Client", "Year"];
  
  return (
    <div className="flex text-2xl p-5 gap-[25vw] w-full h-[200vh] bg-red-500  ">
      {arr.map((item, index) => (
        
        <div key={index} className="text-white">
          {item}
        </div>
      ))}
      
    </div>
  );
}
