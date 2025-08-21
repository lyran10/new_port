import React from 'react'

type Props = {
  experienceRef : any
}

export const Experience = ({experienceRef} : Props) => {
  return (
    <section ref={experienceRef} className='w-full bg-[#f5f5f5] min-h-[300px] flex justify-center items-center'>
       <div className='w-[90%] min-h-[80%] m-auto flex flex-col justify-center items-center'>
        <div className='relative w-full p-5 mt-20'>
          <div className="h-[100%] w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <h1 className='font-bold text-blue-900 text-[18px]'>Experience</h1>
          <div className='flex flex-col justify-start items-start gap-5 mt-8'>
            <div className='flex justify-center items-center gap-5'>
                 <div className='flex flex-col gap-3 justify-center items-center px-5 relative'>
                  <div className="h-[100%] w-[2px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
                   <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-1 rounded-full"></div>
                    <div className='flex justify-center items-start relative'>
                     <div className="relative z-[2] w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                    <div className='w-auto md:w-[500px] flex flex-col gap-2 justify-start items-start'>
                      <span className='text-slate-500 font-bold tracking-wide'>2017 - 2019</span>
                    <div className="backdrop-blur-lg w-auto md:w-[500px] bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Gallgher LLP</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Process Analyst</span>
                      
                      <div className='flex justify-start tracking-wide items-start gap-1 flex-col mt-2 text-slate-500 text-[14px]'>
                        <span className='text-black font-semibold'>Responsibilities</span>
                        <span>1. Verify documents of clients to ensure the claim is valid and renew policies.</span>
                        <span>2. Collect and enter financial data such as premium and tax.</span>
                        <span>3. Reply to clients' emails and answer calls if needed.</span>
                        <span>4. Maintain and communicate the updates with the team.</span>
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
            </div>

               <div className='flex justify-center items-center gap-5 self-auto md:self-end'>
                 <div className='flex flex-col gap-3 justify-center items-center px-5 relative'>
                  <div className="h-[100%] w-[2px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
                   <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-1 rounded-full"></div>
                    <div className='flex justify-center items-start relative'>
                     <div className="relative z-[2] w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                    <div className='w-auto md:w-[500px] flex flex-col gap-2 justify-start items-start'>
                      <span className='text-slate-500 font-bold tracking-wide'>2023 - 2023</span>
                     <div className="w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Convosense</span>
                      <span className='text-blue-900 font-bold tracking-wide'>Full Stack Developer Intern</span>                   
                      <div className='flex justify-start tracking-wide items-start gap-1 flex-col mt-2 text-slate-500 text-[14px]'>
                        <span className='text-black font-semibold'>Responsibilities</span>
                         <span>1. Designed and developed responsive user interfaces.</span>
                        <span>2. Resolved bugs and improved performance.</span>
                        <span>3. Implemented client-side logic using JavaScript/jQuery.</span>
                        <span>4. Built server-side scripts to handle API requests, responses, data.</span>
                      </div>
                    </div>
                    </div>
                   
                    </div>
                  </div>
            </div>

            <div className='flex justify-center items-center gap-5'>
                 <div className='flex flex-col gap-3 justify-center items-center px-5 relative'>
                  <div className="h-[100%] w-[2px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
                  <div className="absolute bg-amber-300 w-5 h-5 -left-[9px] top-1 rounded-full"></div>
                    <div className='flex justify-center items-start relative'>
                     <div className="relative z-[2] w-[2px] bg-gradient-to-b from-slate-300 via-slate-300 to-transparent">
                    </div>
                    <div className='w-auto md:w-[500px] flex flex-col gap-2 justify-start items-start'>
                      <span className='text-slate-500 font-bold tracking-wide'>2023 - Present</span>
                    <div className="w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent p-3 flex justify-start items-start flex-col gap-1">
                      <span className='text-blue-900 font-bold tracking-wide'>Big V Telecom</span>
                      <span className='text-blue-900 font-bold tracking-wide'>React js Developer</span>
                      
                      <div className='flex justify-start tracking-wide items-start gap-1 flex-col mt-2 text-slate-500 text-[14px]'>
                        <span className='text-black font-semibold'>Responsibilities</span>
                        <span>1. Built responsive SPAs using React-Typescript, ensuring app integrity through testing and creating reusable UI components.</span>
                        <span>2. Manage state efficiently using Redux and Context API.</span>
                        <span>3. Integrated APIs fordynamic data retrieval and user interactions.</span>
                        <span>4. Optimized the app using React hooks like memo,useMemo, useCallback, andlazyLoading.</span>
                        <span>5. Implemented Authentication and Authorization using LocalStorage, SessionStorage, JWT Tokens, and Cookies.</span>
                      </div>
                    </div>
                    </div>
                    </div>
                  </div>
            </div>

          </div>
          </div>
          </div>
          </section>
  )
}
