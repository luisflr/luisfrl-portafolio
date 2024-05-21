import React from 'react';
import { motion } from "framer-motion";

function Title({ wrapperCassName='', textTitle=''}) {
  return (
    <motion.p
      className={`text-3xl flex overflow-hidden text-default-text font-bold 
      font-sans mb-8 pr-2 whitespace-nowrap ${wrapperCassName}
      `}
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
    · {textTitle}
    </motion.p>
  )
}

export default Title