import React, { useContext, useState } from "react";

function Navbar({ scrollHandler, sectionControl }) {

  const items = ["CONTACT", "GITHUB", "LINKEDIN"];
  return (
    <div className="fixed mix-blend-difference whitespace-nowrap opacity-90 text-[#ffffff] z-[9999] w-full px-10 py-2  flex justify-between items-center ">
      <div className="logo  font-extralight text-xl tracking-tighter ">
        Atharv Sahare
      </div>

      <div className="gap-5 flex">
        {items.map((item, index) => {

 if (item === "CONTACT") {
            return (
              <div
                key={index}
                onClick={() => scrollHandler(sectionControl)}
                className="cursor-pointer  capitalize font-light"
              >

                  {item}
              </div>
            );
          }
          if (item === "LINKEDIN") {
            return (
              <div
                key={index}
                className="cursor-pointer  capitalize font-light"
              >
                <a
                  href="https://www.linkedin.com/in/atharv-sahare/"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              </div>
            );
          }
          if (item === "GITHUB") {
            return (
              <div
                key={index}
                className="cursor-pointer  capitalize font-light"
              >
                <a href="https://github.com/atharv11"> {item} </a>
              </div>
            );
          }

          return (
            <div key={index} className="cursor-pointer capitalize font-light">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
