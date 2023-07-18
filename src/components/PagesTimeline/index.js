import React from 'react'
import HomeIcon from '../../assets/icons/PagesTimeLineIcons/HomeIcon'
import UserIcon from '../../assets/icons/PagesTimeLineIcons/User';
import ExperienceIcon from '../../assets/icons/PagesTimeLineIcons/ExperienceIcon';
import ProjectsIcon from '../../assets/icons/PagesTimeLineIcons/ProjectsIcon';

function PagesTimeline({ activePage }) {
  const styleIcon = 'flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border ring-8';

  return (
    <div className='fixed h-screen items-center right-0 z-10 hidden xl:flex'> 
      <div className='bg-gradient-to-t from-sky to-cyan pl-[1px] pt-[1px] pb-[1px]'>
        <ol className='relative bg-background p-6'>
          <li className='mb-14 '>
            <span className={`${styleIcon} ${activePage === 'home' ? 'fill-blue scale-125': 'fill-default-text'}`}>
              <HomeIcon wrapperClassName='w-4 h-4' />
            </span>
          </li>
          <li className='mb-14 '>
            <span className={`${styleIcon} ${activePage === 'about-me' ? 'fill-blue scale-125': 'fill-default-text'}`}>
              <UserIcon wrapperClassName='w-5 h-5'/>
            </span>
          </li>
          <li className='mb-14 '>
            <span className={`${styleIcon} ${activePage === 'experience' ? 'fill-blue scale-125': 'fill-default-text'}`}>
              <ExperienceIcon wrapperClassName='w-5 h-5'/>
            </span>  
          </li>
          <li className=''>
            <span className={`${styleIcon} ${activePage === 'projects' ? 'fill-blue scale-125': 'fill-default-text'}`}>
              <ProjectsIcon wrapperClassName='w-5 h-5'/>
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default PagesTimeline;