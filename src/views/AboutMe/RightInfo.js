import React from 'react'
import { motion } from "framer-motion";

import Description from './Description';

const RightInfo = () => {
  return (
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
  )
}

export default RightInfo