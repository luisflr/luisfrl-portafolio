import React from 'react';
import { motion } from 'framer-motion';

function SidebarProjects({ allPersonalProjects, selectedProject, setSelectedProject }) {
  return (
    <div className='flex flex-col items-end my-6 w-[230px] max-h-[500px] overflow-hidden overflow-y-auto'>
      {allPersonalProjects?.map((project, index) => 
        <motion.button
          onClick={() => setSelectedProject(index)}
          key={`image-all-project-${index}`}
          initial={false}
          animate={index === selectedProject ? {
            height: '125px',
            width: '190px',
            opacity: '1'
          }
          : {
            height: '100px',
            width: '150px',
            opacity: '0.4'
          }  
          }
          className='transition ease-linear duration-200 flex justify-center items-center p-4'
        >
          <img  src={project.image} className='w-64 h-20 object-cover' alt={project.title} />
        </motion.button>
      )}
    </div>
  )
}

export default SidebarProjects