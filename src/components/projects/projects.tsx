import { links } from '../../assets/data'

type Props = {
projectsRef : any
}

export const Projects = ({projectsRef} : Props) => {
  return (
    <section ref={projectsRef} className='w-full bg-[#f5f5f5] min-h-[300px] flex justify-center items-center'>
       <div className='w-[90%] min-h-[80%] m-auto flex flex-col justify-center items-center'>
        <div className='relative w-full p-5 mt-20'>
          <div className="h-[100%] w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <h1 className='font-bold text-blue-900 text-[18px]'>Projects</h1>
        <div className='w-full flex justify-center items-center gap-10 flex-wrap mt-8'>
          <div className='relative w-[350px] min-h-[450px] flex flex-col justify-between p-5 gap-5'>
              {/* Side borders */}
              <div className="h-full w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
              <div className="h-full w-[5px] bg-gradient-to-t absolute right-0 from-slate-300 via-slate-300 to-transparent"></div>
              <div className="h-[5px] w-full bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div>

              {/* Top content */}
              <div>
                <h1 className='font-bold text-blue-900 text-[15px]'>Connect. Team Up. Compete. (Chat App)</h1>
                <div className='flex gap-1 flex-col mt-2'>
                  <h2 className='font-bold text-slate-700 text-[15px]'>Description</h2>
                  <p className='text-slate-500 text-[14px] tracking-wide'>
                    A real-time chat app where users can connect, create teams, and challenge other teams. For football enthusiasts to find teammates or opponents and send match invites through chat.
                  </p>
                </div>
                <div className='flex gap-1 flex-col mt-2'>
                  <h2 className='font-bold text-slate-700 text-[15px]'>Technologies</h2>
                  <p className='text-slate-500 text-[14px] tracking-wide'>
                    React, Redux, Socket.io, Nodejs, Express, MongoDB, JWT tokens, Cookies, Private routes, Tailwind.
                  </p>
                </div>
              </div>

              {/* Bottom button */}
              <button className='w-full bg-amber-200 p-3 font-semibold text-slate-700'>
                In Progress
              </button>
            </div>

         <div className='relative w-[350px] min-h-[450px] flex flex-col justify-between p-5 gap-5'>
              {/* Side borders */}
              <div className="h-full w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
              <div className="h-full w-[5px] bg-gradient-to-t absolute right-0 from-slate-300 via-slate-300 to-transparent"></div>
              <div className="h-[5px] w-full bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div>

              {/* Top content */}
              <div>
                <h1 className='font-bold text-blue-900 text-[15px]'>Rewards</h1>
                <div className='flex gap-1 flex-col mt-2'>
                  <h2 className='font-bold text-slate-700 text-[15px]'>Description</h2>
                  <p className='text-slate-500 text-[14px] tracking-wide'>
                   For Shop owners to manage offers and validate coupon redemptions, displaying customer and redemption data. Reward system where users earn points for waste disposal, redeemable as discount coupons.<br/>
                   <span>user - swapy</span><br/>
                   <span>password - swapy1</span>
                  </p>
                </div>
                <div className='flex gap-1 flex-col mt-2'>
                  <h2 className='font-bold text-slate-700 text-[15px]'>Technologies</h2>
                  <p className='text-slate-500 text-[14px] tracking-wide'>
                    React, Redux, Apex charts, Session storage, DotNet, Tailwind, Responsive.
                  </p>
                </div>
              </div>

              {/* Bottom button */}
              <a className='w-full bg-amber-300 p-3 font-semibold text-slate-700 flex justify-center items-center' target='_' href={links.rewardsLink}>Link</a>
            </div>

        <div className='relative w-[350px] min-h-[450px] flex flex-col justify-between p-5 gap-5'>
          {/* Side borders */}
          <div className="h-full w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <div className="h-full w-[5px] bg-gradient-to-t absolute right-0 from-slate-300 via-slate-300 to-transparent"></div>
          <div className="h-[5px] w-full bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div>

          {/* Top content */}
          <div>
            <h1 className='font-bold text-blue-900 text-[15px]'>DMA</h1>
            <div className='flex gap-1 flex-col mt-2'>
              <h2 className='font-bold text-slate-700 text-[15px]'>Description</h2>
              <p className='text-slate-500 text-[14px] tracking-wide'>
                Data visualization system, Real-time employee activity tracking, QR code-based tracking.<br/>
                <span>id - testdma</span><br/>
                <span>password - testdma@567</span>
              </p>
            </div>
            <div className='flex gap-1 flex-col mt-2'>
              <h2 className='font-bold text-slate-700 text-[15px]'>Technologies</h2>
              <p className='text-slate-500 text-[14px] tracking-wide'>
                React, Redux, Apex charts, Session storage, DotNet, Tailwind, Responsive.
              </p>
            </div>
          </div>

          {/* Bottom button */}
           <a className='w-full bg-amber-300 p-3 font-semibold text-slate-700 flex justify-center items-center' target='_' href={links.dmaLink}>Link</a>
          {/* <button className='w-full bg-amber-300 p-3 font-semibold text-slate-700'>
            Link
          </button> */}
        </div>
          {/* <div className='w-[50%] flex'>sadasd</div> */}
          {/* <div className='w-[50%] flex'></div>
          <div className='w-[50%] flex'></div> */}
        </div>
        </div>
      
       </div>

    </section>
  )
}
