import React from 'react'
import { ICONS_PROJECTS as icons } from '../../components/Devices/utils/constants';
import Links from '../../components/Common/Links';

function DescriptionProjects({project}) {
  return (
    <div className='w-full flex px-20 border border-l-[#ffffff23]'>
      <div className='pt-16 pr-20 border'>
        <div className='w-full flex items-center h-fit mb-9'>
          <h1 className='
            text-transparent bg-clip-text bg-gradient-to-r from-sky to-cyan
            w-fit font-semibold text-2xl'
          >{project.title}</h1>
          <Links linksProject={project.links} />
        </div>

        <p className='text-default-text'>
          {project.description}
        </p>

        <div className='mt-4 mb-6'>
          <h3 className='text-default-text w-fit'>Tech Stack:</h3>
          <ul className='flex flex-col text-default-text mt-2 space-y-1'>
            {project.tech_stack.map((tech, idx) => 
              <li key={idx}>
              <div className='w-[230px] group flex relative justify-between items-center'>
                <p className='text-default-text mr-3'>- {icons[tech]?.description}</p>
                {icons[tech]?.icon}
              </div>
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DescriptionProjects