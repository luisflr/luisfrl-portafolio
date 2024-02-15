import React from 'react';
import { motion } from 'framer-motion';

import Links from './Links';

import { ICONS_PROJECTS as icons } from '../Devices/utils/constants';

function Cards({ 
  image, typeProject, titleProject, linksProject, description,
  techStack,
 }) {
  return (
    <motion.div
      className='max-w-[400px] rounded-lg bg-transparent
        mb-20 border border-[#ffffff1a]'
      initial= {{ y: 50, opacity: 0 }}
      whileHover={{ 
        shadow: '2px 10px 30px 0px rgba(0,0,0,1)',
        scale: 1.1,
        transition: {
          duration: 0.2
        }
      }}
      whileInView={{ 
        y: 0, opacity: 1,
        transition: { duration: 0.3, delay: 0.1 }
      }}
      viewport={{ once: true }}
    >
      <div
        className='relative h-[200px]'
        data-te-ripple-init
        data-te-ripple-color='light'>
        <img
          className='
            w-full h-full object-contain rounded-t-lg border-b 
            bg-background border-[#ffffff1a] opacity-70
            transition transform
            hover:opacity-100 hover:scale-105 hover:rounded-lg
            hover:shadow-[0_0_5px_cyan]
            '
          src={image}
          alt='work' />
      </div>
      <div className='pl-6 mt-6'>
        <p className='text-default-text capitalize'>{typeProject}</p>
        <div className='flex items-center mt-2'>
          <h5
            className='
            my-2 leading-tight w-fit bg-clip-text text-transparent
            bg-gradient-to-r from-cyan to-sky text-xl
            font-bold font-open-sans cursor-default
            '>
            {titleProject}
          </h5>
          <Links linksProject={linksProject} />
        </div>
      </div>
      <div className='pl-6 pr-6 mt-2 text-default-text max-h-[180px] overflow-y-auto'>
        <p className='mb-4 text-base text-neutral-600'>
          {description}
        </p>
      </div>
      <div className='mt-2 mb-6 pl-3'>
        <h3 className='text-default-text ml-3 w-fit'>Tech Stack:</h3>
        <ul className='flex flex-col pl-3 text-default-text mt-2 space-y-1'>
          {techStack.map((tech, idx) => 
            <li key={idx}>
            <div className='w-[230px] group flex relative justify-between px-3'>
              <p className='text-default-text mr-3'>- {icons[tech]?.description}</p>
              {icons[tech]?.icon}
            </div>
          </li>
          )}
        </ul>
      </div>
    </motion.div>
  )
}

export default Cards