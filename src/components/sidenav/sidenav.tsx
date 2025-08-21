import React, { useEffect, useRef, useState } from 'react'
import { useContextAPI } from '../context/context'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { links } from '../../assets/data';

type Props = {
  refs : any
}

export const Sidenav = ({refs} : Props) => {
  const sideRef = useRef<HTMLDivElement| null>(null)
  const {open, closeMenu} = useContextAPI()
   const [selected, setSelected] = useState("")
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

    const scrollToSection = (id : string ,ref: React.RefObject<HTMLDivElement>) => {
      setSelected(id)
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
    // If click happened outside of sideRef
     const target = e.target as HTMLElement;
    if (sideRef.current && !sideRef.current.contains(target as Node) && !target.closest("#toggleBtn")) {
      closeMenu();
    }
  };
      
      document.addEventListener("click", handleClick)
    },[])
  return (
    <aside ref={sideRef} className={`fixed h-screen w-[300px] backdrop-blur-lg bg-[rgba(255,255,255,0.6)] right-0 z-[100] ${open ? "translate-x-0" : "translate-x-100"} duration-300 mt-15 p-3`}>
      <ul className='justify-center items-start flex flex-col w-full'>
      {
        list.map(({id, name, ref}) => {
          return (
          <li
            onClick={() => scrollToSection(id, ref)}
            key={id}
            ref={ref}
            className={`group relative overflow-hidden cursor-pointer px-3 py-2 w-full transition-colors duration-150  ${selected === id ? "text-white" : "text-blue-800 hover:text-white"}`}
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
       <div className="translate-y-1 h-[5px] w-full bg-gradient-to-r from-slate-200 via-slate-200 to-transparent"></div>
        <div className='w-full flex justify-center items-center mt-5'>
          <ul className='flex gap-4 items-center justify-center h-full text-[#f5f5f5]'>
             {
                icons.map(({id, icon, url}) => {
                  return (
                    <a href={url} target="_" key={id} className='relative cursor-pointer w-7 h-7 text-[20px] rounded-full bg-amber-400 flex justify-center items-center'>
                    <span key={id} id={id} className=''>
                     {icon}
                  </span>
                </a>
                  )
                })
              }
          </ul>
        </div>
      </ul>
    </aside>
  )
}
 