import React from "react";

export default function Projects() {
  const headers = ["Project", "Category", "Client", "Year"];
  const rows = [
    ["AI flashcard/quizz generator", "Development", "OVGU, Magdeburg", "2025"],
    ["MuseWomen", "FullStack Development", "personal", "2025"],
    ["Gallery Portfolio", "FrontEnd Development", "a friend", "2024"]
  ];

  return (
    <div className="w-full h-[100vh] bg-zinc-900   p-5 text-[1.25vw]">
      {/* Header Row */}
      <div className="grid opacity-60 grid-cols-5 gap-x-[27vw] border-b-2 border-white pb-2 text-zinc-200 uppercase">
        {headers.map((title, i) => (
          <div key={i} className="">{title}</div>
        ))}
      </div>

      {/* Data Rows */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="hover:text-black hover:pl-4 transition-all duration-500 hover:bg-white cursor-pointer grid text-[1.5vw] grid-cols-4 gap-x-[11vw] border-b-2 border-white py-2 text-white">
          {row.map((cell, cellIndex) => (
            <div  key={cellIndex} className="text-xl ">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
