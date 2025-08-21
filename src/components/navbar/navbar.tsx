import React, { useEffect, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { useContextAPI } from '../context/context';

type Props = {
  refs? : any
}

export const Navbar = ({refs} : Props) => {
  const {open, handleMenuToggle} = useContextAPI()
  const [selected, setSelected] = useState("home")
  const list = [
    {
      id : "home",
      name : "Home",
      ref : refs && refs.home
    },
     {
      id : "aboutMe",
      name : "About Me",
      ref : refs && refs.aboutMe
    },
     {
      id : "skills",
      name : "Skills",
      ref : refs && refs.skills
    },
     {
      id : "projects",
      name : "Projects",
       ref : refs && refs.projects
    },
     {
      id : "experience",
      name : "Experience",
      ref : refs && refs.experience
    },
     {
      id : "education",
      name : "Education",
       ref : refs && refs.education
    },
      {
      id : "contact",
      name : "Contact",
      ref : refs && refs.contact
    },
  ]

    const scrollToSection = (id : string ,ref: React.RefObject<HTMLDivElement>) => {
    setSelected(id)
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

// bg-[rgba(255,255,255,0.8)]
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[rgba(255,255,255,0.6)] h-[60px] px-5 flex justify-between md:justify-around items-center'>
      {/* <div className='bg-white h-full w-full blur-xs top-0 left-0 z-[100]'>asdasd</div> */}
   <div className="flex items-center justify-center">
    <span className='font-bold text-[20px] text-slate-400 tracking-wide'>Liran Ramekar</span>
    {/* <div className="flex items-center justify-center">
  <div className="flex items-center gap-1 group cursor-pointer">
    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 drop-shadow-[0_0_10px_rgba(59,130,246,0.7)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,1)] transition-all duration-500">
      L
    </span>
    <span className="text-2xl self-end font-semibold tracking-wide text-slate-300 group-hover:text-blue-300 transition-colors duration-500">
      iran
    </span>
  </div>
</div> */}

  {/* <div className="relative w-10 h-10 group">
    <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-b from-blue-500 via-blue-600 to-blue-800 rounded-l-lg shadow-lg group-hover:scale-y-105 transition-transform duration-300"></div>
    
    <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-b-lg shadow-lg group-hover:scale-x-105 transition-transform duration-300"></div>
  </div> */}

</div>
      <ul className='justify-center items-center hidden md:flex'>
      {
        list.map(({id, name, ref}) => {
          return (
          <li
            onClick={() => scrollToSection(id, ref)}
            key={id}
            ref={ref}
            className={`group relative overflow-hidden cursor-pointer px-3 py-2  transition-colors duration-150  ${selected === id ? "text-white" : "text-blue-800 hover:text-white"}`}
          >
              <span className="relative z-10">{name}</span>

            {/* Blue overlay sliding from bottom */}
            <div
              className={`${selected === id ? "top-0" : "group-hover:top-0 top-full"} absolute left-0  w-full h-full bg-[#FBBF24] transition-all duration-150 `}
            ></div>
          </li>
          )
        })
      }
      </ul>

      <button id="toggleBtn" onClick={handleMenuToggle} className={`md:hidden relative cursor-pointer flex gap-1 flex-col items-end justify-center  duration-500`}>
        <div className='w-10 h-1 bg-slate-400'></div>
         <div className={`w-8 h-1 bg-slate-400 ${open ? "-translate-x-[0.50rem]" : "translate-x-0"} duration-300`}></div>
         <div className={`w-6 h-1 bg-slate-400 ${open ? "-translate-x-[1rem]" : "translate-x-0"} duration-300`}></div>
          {/* <div className='w-6 h-1 bg-slate-400'></div> */}
      </button>
    </nav>
  )
}
