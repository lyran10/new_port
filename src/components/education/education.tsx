type Props = {
  educationRef : any
}

export const Education = ({educationRef} : Props) => {
  return (
    <section ref={educationRef} className='w-full bg-[#f5f5f5] min-h-[300px] flex justify-center items-center'>
       <div className='w-[90%] min-h-[80%] m-auto flex flex-col justify-center items-center'>
        <div className='relative w-full p-5 mt-5 md:mt-20'>
          <div className="h-[100%] w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <h1 className='font-bold text-blue-900 text-[18px]'>Education</h1>
            <div className='relative flex items-start justify-start h-full w-full mt-8'>
                <div className='flex justify-start md:justify-around items-start gap-10 md:gap-0 flex-col md:flex-row h-full w-full py-2'>
                  <div className='flex flex-col gap-3 justify-start items-start relative'>
                    <div className='flex flex-col gap-3 justify-start items-start relative'>
                   <span className='text-slate-500 font-bold tracking-wide'>2010 - 2013</span>
                    <div className='flex justify-center items-start relative px-3'>
                       <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-0 rounded-full z-[10]"></div>
                     <div className="h-full absolute left-0 z-[2] w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                    <div className="left-0 z-[1] text-[14px] mt-6 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Hislop College (RTMNU)</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Bachelors of Business Administration</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Nagpur, India</span>
                    </div>
                    </div>
                    </div>
                
                   
                  </div>
                  <div className='flex flex-col gap-3 justify-start items-start'>
                    <span className='text-slate-500 font-bold tracking-wide'>2022 - 2022</span>
                     <div className='flex justify-center items-start relative px-3'>
                      <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-0 rounded-full z-[10]"></div>
                     <div className="h-full absolute left-0 w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                      <div className="left-0 z-[1] text-[14px] mt-6 md:mt-30 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Developers Institute</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Full Stack Development</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Tel Aviv, Israel</span>
                    </div>
                    </div>
                  </div>
                    <div className='flex flex-col gap-3 justify-start items-start'>
                    <span className='text-slate-500 font-bold tracking-wide'>2023 - 2025</span>
                     <div className='flex justify-center items-start relative px-3'>
                      <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-0 rounded-full z-[10]"></div>
                     <div className="h-full absolute left-0 w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                      <div className="left-0 z-[1] text-[14px] mt-6 md:mt-60 bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Manipal University</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Master of Computer Application</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Jaipur, India</span>
                    </div>
                    </div>
                  </div>
                  {/* <div className=''>
                    <span>2017</span>
                  </div>
                  <div className=''>
                    <span>2017</span>
                  </div> */}
                </div>
            </div>
          </div>
      </div>
    </section>
  )
}
