import React from "react";
import { motion } from "framer-motion";

import { WORKS as works } from './utils/constants';
import useExperience from "./hooks/useExperience";

export default function Experience() {
  const { activeWork, setActiveWork, findWork } = useExperience({ works });

  return (
    <section className='xl:flex w-full h-[700px] pt-32 lg:pt-0 sm:h-[700px] lg:h-screen flex-col items-center justify-center' id='experience' >
      <div className='w-full px-5 sm:px-20 lg:px-0 flex text-center justify-center items-center sm:-mb-12 md:-mb-12 xl:mb-12 2xl:mb-12'>
        <div className='flex flex-col w-full lg:w-[750px] items-center'>
          <motion.p
            className='text-3xl flex overflow-hidden text-default-text font-bold font-sans mb-8 pr-2 whitespace-nowrap'
            initial={{ width: '0' }}
            whileInView={{ 
              width: 'fit-content',
              transition: {
                delay: 0.1,
                duration: 0.8
              }
            }}
            viewport={{ once: true }}
          >
          · Experience
          </motion.p>
          <motion.div 
            className='w-full overflow-x-auto overflow-hidden'
            initial= {{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <ol className="items-center w-[750px] justify-between flex space-x-8 space-y-0 mt-3 mb-5">
              {works.map((work, i) => {
                return (
                  <li
                    key={`works-${i}`}
                    className="flex items-center space-x-3 cursor-pointer transition active:scale-90"
                    onClick={() => setActiveWork(work.id)}
                  >
                    <span
                      className={`border ${activeWork === work.id ? 'border-sky' : 'border-[#A3B3BC]' } transition transform flex items-center justify-center w-8 h-8 rounded-full shrink-0`}
                    >
                      <svg
                        className='w-[21px] h-[21px]'version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                          fill={`${activeWork === work.id ? '#007CF0' : '#A3B3BC'}`} stroke="none">
                          <path d="M183 440 c-10 -24 -24 -40 -45 -48 -32 -12 -34 -35 -2 -41 18 -3 34
                            -18 34 -33 0 -4 -24 -8 -52 -10 l-53 -3 0 -115 0 -115 68 -3 c65 -3 89 -18 47
                            -29 -47 -12 -14 -23 70 -23 84 0 117 11 70 23 -42 11 -18 26 48 29 l67 3 0
                            115 0 115 -52 3 c-29 2 -53 6 -53 10 0 15 16 30 34 33 31 6 31 29 -1 41 -18 7
                            -34 24 -44 47 -15 36 -17 37 -69 37 -52 0 -53 -1 -67 -36z m55 8 c8 -8 15 -8
                            26 1 20 17 33 7 41 -30 4 -19 15 -33 27 -37 15 -4 17 -7 6 -13 -18 -12 -160
                            -11 -178 1 -13 8 -12 10 3 10 11 0 23 15 33 40 17 43 23 47 42 28z m-16 -130
                            c-9 -9 -15 -9 -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m80 0 c-9 -9 -15 -9
                            -24 0 -9 9 -7 12 12 12 19 0 21 -3 12 -12z m118 -128 l0 -100 -59 0 c-64 0
                            -71 6 -71 61 0 16 -5 29 -11 29 -8 0 -9 -21 -4 -70 l7 -70 -32 0 -32 0 7 70
                            c5 49 4 70 -4 70 -6 0 -11 -13 -11 -29 0 -55 -7 -61 -71 -61 l-59 0 0 100 0
                            100 170 0 170 0 0 -100z"
                            className='transition transform'
                          />
                        </g>
                      </svg>
                    </span>
                    <span >
                        <h3
                          className={`${activeWork === work.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan' : 'text-[#A3B3BC]'} transition transform w-fit font-medium leading-tight`}
                        >
                          {work.name}
                        </h3>
                        <p
                          className={`${activeWork === work.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan' : 'text-[#A3B3BC]'} transition transform w-fit font-medium leading-tight text-sm`}
                        >
                          {work.period}
                        </p>
                    </span>
                  </li>
              )})}
            </ol>
          </motion.div>
          <motion.div
            className='flex flex-col pl-0 pt-3 mt-5 h-[320px] overflow-y-auto border-l border-[#A3B3BC]'
            initial= {{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            {works &&
              <div key={`work-active-${findWork.id}`} className='animate-[appear_0.5s_ease-in] opacity-1 max-w-[750px] pl-6 pr-2'>
                <div className='flex mb-3 items-center'>
                  <a href='https://kipu-software.pe/' target='_blank' rel='noreferrer' className='cursor-pointer'>
                    <img src={findWork?.image} alt={`${findWork?.image} logo`} className='h-8 w-28 mr-2'/>
                  </a>
                  <p className='text-[#A3B3BC] text-xl'>{findWork.name}</p>
                </div>
                {findWork.description?.map((description, index) => (
                  <div key={`work-description-${index}`}>
                    <p className='text-[#A3B3BC] text-sm text-left mb-2 font-sans tracking-wide leading-relaxed'>
                      {description}
                    </p> 
                  </div>
                ))}
                <ul>
                  {findWork.stack?.map((tech_stack, index) => (
                    <li key={`work-stack-${index}`} className='flex items-center before:content-["▹"] before:text-blue before:-ml-1'>
                      <p className='pl-4 relative text-[#A3B3BC]'>{tech_stack}</p>
                    </li>
                  ))}
                  </ul>
              </div>

            }
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
