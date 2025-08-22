import webdev from "../../assets/web-dev-svg.svg"
import reactSvg from "../../assets/react-svg.svg"
import javascriptSvg from "../../assets/javascript-svg.svg"
import typescripttSvg from "../../assets/typescript-svg.svg"
import htmlSvg from "../../assets/html-5-svg.svg"
import cssSvg from "../../assets/css-3-svg.svg"
import reduxSvg from "../../assets/redux-svg.svg"
import graphqlSvg from "../../assets/graphql-svg.svg"
import nodeSvg from "../../assets/nodejs-svg.svg"
import expSvg from "../../assets/express-svg.svg"
import mongoSvg from "../../assets/mongodb-svg.svg"
import backendSvg from "../../assets/datastore-svg.svg"
import otherSvg from "../../assets/permalink-svg.svg"
import gitSvg from "../../assets/git-svg.svg"
import webpackSvg from "../../assets/webpack-svg.svg"
import postmanSvg from "../../assets/postman-svg.svg"

type Props = {
   skillsRef : any
}

export const Skills = ({skillsRef} : Props) => {
  return (
    <section ref={skillsRef} className='w-full min-h-[300px] bg-[#f5f5f5]'>
      <div className='relative w-[90%] m-auto flex flex-col md:flex-row justify-center items-center'>
        <div className='relative w-full p-5 mt-5 md:mt-20'>
        <div className="h-[100%] w-[5px] bg-gradient-to-b absolute left-0 from-slate-300 via-slate-300 to-transparent"></div>
          <h1 className='font-bold text-blue-900 text-[18px]'>Skills</h1>
           <div className='w-full flex flex-col justify-center items-start mt-8'>

            <div className='w-full  flex gap-[20px] justify-center items-center py-5 relative'>
              <div className="h-[5px] w-[100%] bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div>
                <div className='flex relative w-[200px] flex-col gap-2 justify-center items-center'>
                  <div className='absolute right-0 bg-slate-100 w-[1px] h-full'></div>
                   <div className='flex flex-col justify-center items-center gap-2'>
                      <div className='w-20 h-20 relative'>
                        <div className='relative z-[10] w-full h-full bg-slate-100 shadow-md p-1 flex justify-center items-center'>
                             <img className='w-12 h-12 text-white' src={webdev} alt="" />
                        </div>
                        <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div>
                     </div> 
                     <span className='font-semibold text-blue-900 text-[18px]'>Frontend</span>  
                  </div>
                 {/* <img className='w-12 h-12 text-white' src={webdev} alt="" />
                 <span className='font-semibold text-slate-500'>Frontend</span> */}
               </div>
                <div className='w-full flex justify-start items-center gap-10 flex-wrap border-l border-slate-300 px-3'>

                  <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={javascriptSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Javascript</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={typescripttSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Typescript</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={htmlSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>HTML</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={cssSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>CSS</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={reactSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>React</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={reduxSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Redux</span>  
                  </div>

                    {/* <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='relative w-15 h-15 z-[10] bg-slate-100 shadow-md p-1'>
                           <img src={graphqlSvg} alt="" />
                        </div>
                     <span className='font-semibold text-slate-500'>GraphQL (Client)</span>  
                  </div> */}

                
                </div>
            </div>

           </div>


         <div className='w-full flex flex-col justify-center items-start mt-8'>
            <div className='w-full  flex gap-[20px] justify-center items-center py-5 relative'>
              <div className="h-[5px] w-[100%] bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div>
                <div className='flex relative w-[200px] flex-col gap-2 justify-center items-center'>
                  <div className='absolute right-0 bg-slate-100 w-[1px] h-full'></div>
                   <div className='flex flex-col justify-center items-center gap-2'>
                      <div className='w-20 h-20 relative'>
                        <div className='relative z-[10] w-full h-full bg-slate-100 shadow-md p-1 flex justify-center items-center'>
                             <img className='w-12 h-12 text-white' src={backendSvg} alt="" />
                        </div>
                        <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div>
                     </div> 
                     <span className='font-semibold text-blue-900 text-[18px]'>Backend</span>  
                  </div>
                 {/* <img className='w-12 h-12 text-white' src={webdev} alt="" />
                 <span className='font-semibold text-slate-500'>Frontend</span> */}
               </div>
                <div className='w-full flex justify-start items-center gap-10 flex-wrap border-l border-slate-300 px-3'>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={nodeSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Nodejs</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={expSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Express</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={mongoSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>MongoDB</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={graphqlSvg} alt="" />
                        </div>
                     <span className='font-semibold text-slate-500'>GraphQL</span>  
                  </div>

                
                </div>
            </div>

           </div>


               <div className='w-full flex flex-col justify-center items-start mt-8'>
            <div className='w-full  flex gap-[20px] justify-center items-center py-5 relative'>
              {/* <div className="h-[5px] w-[100%] bg-gradient-to-r absolute bottom-0 from-slate-300 via-slate-300 to-transparent"></div> */}
                <div className='flex relative w-[200px] flex-col gap-2 justify-center items-center'>
                  <div className='absolute right-0 bg-slate-100 w-[1px] h-full'></div>
                   <div className='flex flex-col justify-center items-center gap-2'>
                      <div className='w-20 h-20 relative'>
                        <div className='relative z-[10] w-full h-full bg-slate-100 shadow-md p-1 flex justify-center items-center'>
                             <img className='w-12 h-12 text-white' src={otherSvg} alt="" />
                        </div>
                        <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div>
                     </div> 
                     <span className='font-semibold text-blue-900 text-[18px]'>Other</span>  
                  </div>
                 {/* <img className='w-12 h-12 text-white' src={webdev} alt="" />
                 <span className='font-semibold text-slate-500'>Frontend</span> */}
               </div>
                <div className='w-full flex justify-start items-center gap-10 flex-wrap border-l border-slate-300 px-3'>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={gitSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Git</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={webpackSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Webpack</span>  
                  </div>

                    <div className='flex flex-col justify-center items-center gap-2'>
                      {/* <div className='w-20 h-20 relative'> */}
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={postmanSvg} alt="" />
                        </div>
                        {/* <div className='border-[5px] w-full -top-4 left-4 h-full absolute border-amber-300'></div> */}
                     {/* </div>  */}
                     <span className='font-semibold text-slate-500'>Postman</span>  
                  </div>

                    {/* <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='relative w-15 h-15 z-[10]'>
                           <img src={graphqlSvg} alt="" />
                        </div>
                     <span className='font-semibold text-slate-500'>GraphQL (Client)</span>  
                  </div> */}

                
                </div>
            </div>

           </div>
           
        </div>
     
      </div>
    </section>
  )
}
