import React from 'react'
import { motion } from "framer-motion";

const IntroductionHome = () => {
  const textClasses = 'text-transparent w-fit bg-clip-text bg-gradient-to-r from-sky to-cyan text-5xl sm:text-7xl font-bold leading-none font-sans truncate';
  
  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-col w-full ml-2'>
        <motion.p
          className='
            text-[#A3B3BC] overflow-hidden text-md mb-2 ml-1 font-sans 
            tracking-wide whitespace-nowrap'
            initial={{ width: '0' }}
            animate={{ 
              width: 'fit-content',
              transition: {
                delay: 1.1,
                duration: 0.8
              }
            }}
        >
          Hello, my name is
        </motion.p>
        <motion.div 
          className='flex flex-col truncate'
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: {
              delay: 1.9,
              duration: 0.4
            }
          }}
        >
          <h2 className={textClasses}>
            Luis
          </h2>
          <h2 className={textClasses}>Flores</h2>
          <h2 className={`${textClasses} pb-3`}>Rodríguez</h2>
        
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{ 
            opacity: 1,
            y: 0,
            transition: {
              delay: 2.1,
              duration: 0.4
            }
          }}
        >
          <p className='text-[#A3B3BC] text-lg mb-3 font-sans'>I'm web developer</p>
          <p className='text-[#A3B3BC] font-sans tracking-wide mb-6'>
            Hello everyone! I'm software developer and have experience creating, developing, and maintaining high-quality web applications.
          </p>
          <a 
            href='https://github.com/luisflr/luisfrl-portafolio'
            target='_blank' rel='noreferrer'
            className='float-left transition ease-linear w-fit bg-gradient-to-r from-cyan to-sky h-fit rounded-lg p-[1px] hover:shadow-[0_0_15px_cyan] active:scale-90'>
              <p className='
                bg-transparent rounded-lg text-background px-4 py-2
                transition ease-linear tracking-wide w-fit h-fit
                hover:bg-background hover:text-blue'
              >
                View portafolio code
              </p>
          </a>
        </motion.div>
        </div>
    </div>
  )
}

export default IntroductionHome