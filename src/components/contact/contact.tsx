import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { links } from '../../assets/data';

type Props = {
  contactRef : any
}

export const Contact = ({contactRef} : Props) => {
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
       <section ref={contactRef} className='w-full bg-[#f5f5f5] min-h-[500px] text-slate-600 flex justify-center items-center'>
        <div className='w-[90%] flex justify-center items-center flex-col'>
        <div className='w-[60%] m-auto  p-3'>
         <h1 className='font-bold text-[50px] text-[#1E40AF] text-center'>I’d love to hear from you.</h1>
         <h3 className='font-bold text-slate-400 text-[20px] text-center'>You can contact on the number or email given below.</h3>
         <div className='flex w-full justify-center flex-col items-center mt-3'>
         <div className="flex justify-center items-center gap-3 flex-wrap text-amber-300 font-semibold">
            <span className='text-slate-500'>🇮🇳 +917448115877</span> | 
            <span className='text-slate-500'>🇮🇱 053-784-0375</span> | 
            <span className='text-slate-500'>liranramekar7@gmail.com</span> |
           <span className='text-slate-500'>lyranten10@gmail.com</span>
          </div>
         </div>
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
          </div>
      
        </div>
       
      </section>
  )
}
