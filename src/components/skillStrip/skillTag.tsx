import webdev from "../../assets/web-dev-svg.svg"
import webhos from "../../assets/web-hos-svg.svg"

export const SkillTag = () => {
  const skills = [
    {
      id : "webdev",
      label : "Web Development",
      skill : webdev
    },
     {
      id : "webhos",
      label : "Web Hosting",
      skill : webhos
    },
    // {
    //   id : "express",
    //   label : "Express",
    //   skill : expSvg
    // },
    // {
    //   id : "mongodb",
    //   label : "MongoDB",
    //   skill : mongoSvg
    // }
  ]
  return (
    <div className='w-full p-5 bg-[rgba(255,255,255,0.6)]'>
      <ul className='flex justify-around items-center w-full' >
       {
        skills.map(({id, skill, label}) => {
          return (
            <li key={id} className='text-[25px] font-semibold text-blue-900 flex justify-center items-center flex-col'>
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
