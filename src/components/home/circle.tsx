import React from 'react';
import reactSvg from "../../assets/react-svg.svg"
import nodeSvg from "../../assets/nodejs-svg.svg"
import expSvg from "../../assets/express-svg.svg"
import mongoSvg from "../../assets/mongodb-svg.svg"

type Props = {
  width: string;
  height: string;
};

export const Circle = ({ height, width }: Props) => {
  const dots = 4;

  // Radius will be half of width (assuming width = height)
  const radius = parseInt(width) / 2;

  // Angles for the left vertical border from top to bottom
  const angles = [
    {
      angle : 110,
      position : "left-6 top-[20%]",
      svg : reactSvg
    },
     {
      angle : 140,
      position : "-left-9 top-[40%]",
      svg : nodeSvg
    },
     {
      angle : 220,
      position : "-left-8 top-[60%]",
      svg : expSvg
    },
     {
      angle : 250,
      position : "left-9 top-[80%]",
      svg : mongoSvg
    },
    110, 140, 220, 250
  ]; // tweak to space dots evenly along left curve

  return (
    <div className="absolute left-[70%] flex justify-center items-center h-full w-full">
      {/* Outer Circle */}
      <div
        className="relative h-full w-full rounded-full border-2 border-slate-200  flex justify-center items-center"
      >
        {angles.map(({angle, position, svg} : any, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div className={`absolute z-[10] ${position} flex`}
            style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <img src={svg} className='h-8 w-8 -translate-y-3 -translate-x-2' alt="" />
               <div
              key={i}
              className={` w-4 h-4 bg-slate-200 rounded-full`}
              
            ></div>
            
            </div>
           
          );
        })}
      </div>
    </div>
  );
};
