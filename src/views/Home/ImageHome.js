import React from 'react'
import { motion } from "framer-motion";

import PerfilCartoon from '../../assets/images/perfil-cartoon.webp';

const ImageHome = () => {
  return (
    <motion.div
      className='hidden xl:flex justify-center items-center'
      initial={{
        opacity: 0,
        scale: 0.8
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.9,
          duration: 0.4
        }
      }}
    >
      <div className=' absolute rounded-full h-[320px] w-[320px] 2xl:h-[370px] 2xl:w-[370px]'>
      </div>
        <img
          src={PerfilCartoon}
          alt='developer'
          className='
            absolute h-[400px] 2xl:h-[500px]
            drop-shadow-[0_0_3px_cyan]
        '/>
    </motion.div>
  )
}

export default ImageHome