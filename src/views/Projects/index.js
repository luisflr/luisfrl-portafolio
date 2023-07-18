import React from 'react';
import { motion } from 'framer-motion';

import Cards from '../../components/Common/Cards';
import Timeline from './Timeline/Timeline';

import {
  PROJECTS as projects
} from './utils/constants';

export default function Projects() {
  
  return (
    <section className='w-full pt-40 flex flex-col items-center justify-center' id='projects'>
      <div className='h-fit max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col justify-center items-center'>
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
          · Projects
        </motion.p>
        
        <div className='hidden lg:block'>
          <Timeline projects={projects}/>
        </div>
        
        <div className='w-full flex flex-col items-center justify-center lg:hidden'>
          {projects.map((project, index) => 
            <Cards 
              key={`project-id-${index}`}
              typeProject={project.typeProject}
              image={project.image}
              titleProject={project.title}
              linksProject={project.links}
              description={project.description}
              techStack={project.techStack}
            />
          )}
        </div>
      </div>
    </section>
  );
}
