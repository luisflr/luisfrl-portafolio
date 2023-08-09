import { motion } from "framer-motion";

import Perfil from '../../assets/images/perfil-foto.webp';
import Description from './Description';
import { buttonSkillsVariants, skills } from "./utils/constants";

function AboutMe() {
  return (
    <section className='w-full pt-32 md:pt-0 h-[800px] md:h-screen mt-10 lg:mt-0 mb-56 xl:my-10 xl:h-screen flex items-center justify-center' id='about-me'>
      <div className='h-full w-full max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col xl:flex-row justify-center items-center'>
        <div className='flex justify-center items-center w-full xl:w-5/12 mb-4 sm:mb-12 lg:mb-10 xl:mb-0'>
          <div className='
            w-fit h-fit 
            rounded-full p-[2px]
            xl:rounded-2xl '>
            <motion.img
              src={Perfil}
              alt='developer'
              className={`
                object-cover  
                h-[200px] w-[200px] duration-300
                rounded-full
                hover:drop-shadow-[0_0_5px_cyan]
                hover:cursor-pointer
                lg:w-[240px] lg:h-[240px]
                xl:w-[300px] xl:h-[260px]
                2xl:h-[300px]
              `}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <div className='w-full flex flex-col items-center mt-6'>
              <motion.h2 
                className='text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky to-cyan'
                initial={{
                  y: -100, opacity: 0
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Skills
              </motion.h2>
              <motion.ul 
                className='text-default-text flex space-x-4 mt-4'
                initial={{
                  y: -100, opacity: 0
                }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {skills.map((skill, i) => 
                  <motion.li 
                    custom={i}
                    initial='hidden'
                    whileInView='visible'
                    className='relative grid place-content-center'
                    variants={buttonSkillsVariants}
                    key={i}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                )}
              </motion.ul>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full xl:w-8/12 h-full justify-start sm:justify-center'>
          <motion.p
            className='text-3xl overflow-hidden text-default-text font-bold font-sans mb-6 pr-2 whitespace-nowrap'
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
          · About me
          </motion.p>
          <div className='w-fit h-fit bg-gradient-to-r from-sky to-cyan pl-[1px] pt-[1px]'>
            <Description />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;