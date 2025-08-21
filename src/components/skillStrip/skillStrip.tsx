import React from 'react'
import reactSvg from "../../assets/react-svg.svg"
import nodeSvg from "../../assets/nodejs-svg.svg"
import expSvg from "../../assets/express-svg.svg"
import mongoSvg from "../../assets/mongodb-svg.svg"

export const SkillStrip = () => {
  const skills = [
    {
      id : "react",
      label : "React",
      skill : reactSvg
    },
     {
      id : "nodejs",
      label : "Nodejs",
      skill : nodeSvg
    },
    {
      id : "express",
      label : "Express",
      skill : expSvg
    },
    {
      id : "mongodb",
      label : "MongoDB",
      skill : mongoSvg
    }
  ]
  return (
    <div className='w-full p-5 bg-[rgba(255,255,255,0.6)]'>
      <ul className='flex justify-around items-center w-full' >
       {
        skills.map(({id, skill, label}) => {
          return (
            <li key={id} className='text-[25px] font-semibold flex justify-center items-center flex-col'>
              <img src={skill} className='w-12 h-12' alt="" />
              <span className='text-slate-300 text-[18px] md:text-[25px]'>{label}</span>
              </li>
          )
        })
        }
      </ul>
   
    </div>
  )
}
