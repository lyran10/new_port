import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { links } from '../../assets/data';

export const Sidebar = () => {
 const [tooltip, setTooltip] = useState("")
  const icons = [
    {
      id : "Github",
      icon : <FaGithub/>,
      url : links.github
    },
    {
      id : "LinkedIn",
      icon : <FaLinkedin/>,
      url : links.linkedIn
    },
    {
      id : "Leetcode",
      icon : <SiLeetcode/>,
      url : links.leetcode
    },
    {
      id : "Insta",
      icon : <FaInstagram/>,
      url : links.insta
    },
  ]

  return (
   <aside className='hidden md:block fixed z-[49] h-full w-[40px] right-0 bg-transparent backdrop-blur-lg'>
  <div className='w-full h-full bg-[rgba(255,255,255,0.2)] flex flex-col text-[#f5f5f5] gap-4 justify-center items-center'>
    {/* <div className='flex flex-col gap-4 items-center justify-center h-full text-[#f5f5f5]'> */}
  {
        icons.map(({id, icon, url}) => {
          return(
            <div className='relative'>
          <a href={url} target="_" key={id} className='relative cursor-pointer w-7 h-7 text-[20px] rounded-full bg-amber-400 flex justify-center items-center'>
            <span onMouseEnter={() => setTooltip(id)} onMouseLeave={() => setTooltip("")} key={id} id={id} className=''>
              {icon}
            </span>
            
          </a>
           <span className={`cursor-default text-[12px] -top-1 right-[150%] absolute bg-slate-400 rounded-lg p-1 ${tooltip === id ? "opacity-100 translate-y-0 z-[-10]" : "opacity-0 translate-y-1 z-[-10]"}  duration-150 font-semibold tracking-wide`}>{id}</span>
          </div>
          )
        })
      }

    {/* </div> */}
  
  </div>
</aside>
  )
}
