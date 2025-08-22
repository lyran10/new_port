import codeImg from "../../assets/code-white.jpeg"

type Props = {
  homeRef : any
}

export const Home = ({homeRef} : Props) => {

  return (
    <section ref={homeRef} className='text-slate-600 h-screen w-full flex justify-center items-center relative overflow-hidden'>
      <img src={codeImg} className='w-full h-full absolute blur-md' alt="" />
      {/* <FaCode className='absolute top-50 left-10 text-slate-400  z-[1]'/>
      <FaCode className='absolute bottom-50 right-10 text-slate-400'/> */}
   
     
      
      {/* <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
       repeating-linear-gradient(to right, rgba(146, 155, 184, 0.2) 0, rgba(238, 238, 241, 0.2) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(to bottom, rgba(30,64,175,0.2) 0, rgba(30,64,175,0.2) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "20px 20px",
      WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "100% 100%",
      maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
      maskRepeat: "no-repeat",
      maskSize: "100% 100%",
    }}
  ></div>  */}
      {/* <div className='h-full w-[50%] flex justify-center items-center'> */}
      {/* <div className='w-[50%] h-full'> */}
      <div className="relative z-[10] h-full w-full flex flex-col justify-center items-center md:items-start text-slate-400 p-3 ms-0 md:ms-[50px] ld:ms-[200px]">
        {/* <Circle width='w-[700px]' height='h-[700px]'/> */}
        {/* <div className='w-[200px] h-[2px] top-20 absolute left-0 bg-slate-200'></div> */}
        {/* <div className="text-amber-50 w-[500px] h-[500px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] opacity-30 blur-[100px] lg:blur-[120px] z-0 absolute bg-blue-200"></div> */}
      <span className="text-[40px] md:text-[50px] font-semibold">Hello,</span>
      <span className="text-[60px] md:text-[80px] font-semibold">
        I am <span className="text-[#1E40AF] font-bold">Liran</span>.
      </span>
      <span className="text-[40px] md:text-[60px] font-semibold text-blue-900 text-center">
        Full Stack Developer
      </span>
      <div className='flex gap-5 justify-center items-center flex-col md:flex-row'>
        <button className='mt-2 flex justify-center items-center px-6 py-4 bg-[#1E40AF] border font-semibold text-[#f5f5f5] cursor-pointer hover:bg-blue-900 duration-300 relative'>
         <a className='flex justify-center items-center gap-2' href="/liranCV.pdf" download="LIRAN_CV">My Resume</a>
      </button>
       <div className="translate-y-1 h-[5px] w-[100px] bg-gradient-to-r from-slate-300 via-slate-300 to-transparent"></div>
      {/* <div className='flex justify-center items-center gap-3 text-[20px] text-[#f5f5f5]'>
        <div className='w-10 h-10 text-[25px] rounded-full bg-amber-400 flex justify-center items-center'>
          <FaGithub/>
        </div>
        <div className='w-10 h-10 text-[25px] rounded-full bg-amber-400 flex justify-center items-center'>
           <FaLinkedin/>
        </div>
        <div className='w-10 h-10 text-[25px] rounded-full bg-amber-400 flex justify-center items-center'>
           <SiLeetcode/>
        </div>
        <div className='w-10 h-10 text-[25px] rounded-full bg-amber-400 flex justify-center items-center'>
           <FaInstagram/>
        </div>
      </div> */}
      </div>
     </div>
      {/* </div> */}

     {/* <div className="absolute left-10 top-50 -translate-y-1/2 opacity-30">
  <div className="w-[250px] h-[250px] border border-blue-300 rotate-12"></div>
  <div className="w-[250px] h-[250px] border border-yellow-400 -rotate-12 absolute top-0 left-0"></div>
</div> */}
      {/* </div> */}

         {/* <div className='h-full w-[50%]'> */}
         {/* <Circle width='w-[500px]' height='h-[500px]'/> */}
      {/* </div> */}

    </section>
  )
}
