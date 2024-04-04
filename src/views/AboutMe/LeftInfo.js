import React from 'react'
import { motion } from "framer-motion";

import Perfil from '../../assets/images/perfil-foto.webp';
import { buttonSkillsVariants, skills } from "./utils/constants";

const LeftInfo = () => {
  return (
    <div className='flex justify-center items-center w-full xl:w-5/12 mb-4 sm:mb-12 lg:mb-10 xl:mb-0'>

      <div className='w-fit h-fit rounded-full p-[2px] xl:rounded-2xl'>
        <motion.img
          src={Perfil}
          alt='developer'
          className={`
            object-cover h-[200px] w-[200px] duration-300
            rounded-full hover:drop-shadow-[0_0_5px_cyan]
            lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[260px]
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
  )
}

export default LeftInfo