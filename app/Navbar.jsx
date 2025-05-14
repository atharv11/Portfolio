import React, { useContext, useState } from "react";


function Navbar() {

  const items = ["Contact", "Illustrator", "LinkeIn"];
  return (
    <div className="fixed mix-blend-difference whitespace-nowrap opacity-90 duration-300 text-[#ffffff] z-[9999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center ">
  
        <div className="logo font-['Neue Montreal'] font-extralight text-3xl tracking-tighter ">
      Atharv Sahare
        </div>

      <div className="gap-10 flex">
        {items.map((item, index) => {
          if (item === "Shopping bag") {
            return (
              <div
                key={index}
    
                className="cursor-pointer text-lg capitalize font-light ml-32"
              >
                {item} 
              </div>
            );
          }
          if (item === "Search") {
            return (
              <div
                key={index}
         
                className="cursor-pointer text-lg capitalize font-light"
              >
                {item}
              </div>
            );
          }

          return (
            <div   
            key={index}
              className="cursor-pointer text-lg capitalize font-light"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
