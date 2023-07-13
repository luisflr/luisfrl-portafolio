import React from 'react'
import HomeIcon from '../../assets/icons/PagesTimeLineIcons/HomeIcon'
import UserIcon from '../../assets/icons/PagesTimeLineIcons/User';
import ExperienceIcon from '../../assets/icons/PagesTimeLineIcons/ExperienceIcon';
import ProjectsIcon from '../../assets/icons/PagesTimeLineIcons/ProjectsIcon';

function PagesTimeline() {
  return (
    <div className='fixed h-screen items-center right-0 z-10 hidden xl:flex'> 
      <div className='bg-gradient-to-t from-sky to-cyan pl-[1px] pt-[1px] pb-[1px]'>
        <ol className='relative bg-background p-6'>
          <li className='mb-14 '>
            <span className='flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border fill-blue ring-8'>
              <HomeIcon wrapperClassName='w-4 h-4' />
            </span>
          </li>
          <li className='mb-14 '>
            <span className='flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border fill-default-text hover:fill-blue ring-8'>
              <UserIcon wrapperClassName='w-5 h-5'/>
            </span>
          </li>
          <li className='mb-14 '>
            <span className='flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border fill-default-text hover:fill-blue ring-8'>
              <ExperienceIcon wrapperClassName='w-5 h-5'/>
            </span>  
          </li>
          <li className=''>
            <span className='flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border fill-default-text hover:fill-blue ring-8'>
              <ProjectsIcon wrapperClassName='w-5 h-5'/>
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default PagesTimeline;