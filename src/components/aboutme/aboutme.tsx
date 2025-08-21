import myImg from "../../assets/myImg1.png"
import webdev from "../../assets/web-dev-svg.svg"
import webhos from "../../assets/web-hos-svg.svg"
import idea from "../../assets/idea-svg.svg"
// bg-[rgba(255,255,255,0.6)]
type Props = {
  aboutMeRef : any
}
export const Aboutme = ({aboutMeRef} : Props) => {
  return (
    <section ref={aboutMeRef} className='w-full bg-[#f5f5f5] min-h-[300px] flex justify-center items-center'>
      <div className='w-[90%] min-h-[80%] m-auto flex flex-col md:flex-row justify-center items-center'>
        <div className='w-full md:w-[40%] relative p-5'>
          <div className="h-[100%] w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <h1 className='font-bold text-blue-900 text-[18px]'>About me</h1>
          <p className='text-slate-500 font-semibold text-[16px] tracking-wide mt-3 '> 
            Passionate about coding and driven by curiosity to learn something new every day.
             An MCA graduate with a strong dedication to building clean, efficient, and user-focused applications.
          </p>
          <div className='flex justify-center gap-10 items-center mt-10 flex-wrap'>
             <div className='flex flex-col gap-2 justify-center items-center'>
              <div className='w-20 h-20 text-[20px] rounded-full bg-amber-400 flex justify-center items-center'>
                 <img className='w-12 h-12' src={webdev} alt="" />
              </div>
             
              <span className='font-semibold text-slate-500'>Web Development</span>
            </div>
             <div className='flex flex-col gap-2 justify-center items-center'>
              <div className='w-20 h-20 text-[20px] rounded-full bg-amber-400 flex justify-center items-center'>
                 <img className='w-12 h-12' src={idea} alt="" />
              </div>
             
              <span className='font-semibold text-slate-500'>problem Solving</span>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <div className='w-20 h-20 text-[20px] rounded-full bg-amber-400 flex justify-center items-center'>
                 <img className='w-12 h-12' src={webhos} alt="" />
              </div>
             
              <span className='font-semibold text-slate-500'>Web Hosting</span>
            </div>
            
          </div>
           {/* <p className='text-slate-600 text-[16px] tracking-wide flex flex-col gap-3 mt-3'> 
            <span className='font-semibold'>1. Full Stack Developer with a strong focus on building dynamic and responsive web applications</span>
             <span className='font-semibold'> 2. Passionate about coding and always eager to learn and explore new technologies.</span>
              <span className='font-semibold'>3. Thrive on solving complex technical challenges and finding efficient solutions.<br/></span>
               <span className='font-semibold'>5. Football enthusiast – brings a strong sense of teamwork, discipline, and a competitive spirit.</span>
                <span className='font-semibold'> 6. Goal-oriented, self-motivated, and driven to deliver impactful digital solutions.</span>         
          </p> */}
        </div>
        <div className='w-full md:w-[60%] relative flex justify-center items-center p-5 overflow-hidden'>
          <div className='rounded-full w-[300px] h-[300px] bg-blue-400 blur-3xl absolute'></div>
          <div className='rounded-full w-[500px] h-[500px] border-[20px] border-slate-200 absolute'></div>
          <img src={myImg} className='relative z-[10] translate-y-5' alt="" />
        </div>
      </div>
    </section>
  )
}



  // <p className='text-slate-500 text-[16px] tracking-wide flex flex-col gap-3'> 
  //           <span>1. Full Stack Developer with a strong focus on building dynamic and responsive web applications</span>
  //            <span> 2. Passionate about coding and always eager to learn and explore new technologies.</span>
  //             <span>3. Thrive on solving complex technical challenges and finding efficient solutions.<br/></span>
  //              <span>5. Football enthusiast – brings a strong sense of teamwork, discipline, and a competitive spirit.</span>
  //               <span> 6. Goal-oriented, self-motivated, and driven to deliver impactful digital solutions.</span>         
  //         </p>
