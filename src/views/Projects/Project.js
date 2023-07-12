import React from 'react';

import Laptop from '../../components/Devices/Laptop';
import Mobile from '../../components/Devices/Mobile';
import Links from '../../components/Common/Links';


function Project({
  image, typeProject, titleProject, linksProject, description,
  techStack, reverse, typeDevice, idx
}) {
  return (
    <div className='h-[500px] w-full flex justify-center items-center'>
      <div
        className={`
        ${reverse ? 'order-2 ml-4' : 'mr-4'} ${typeDevice === 1 ? 'w-4/12' : 'w-3/12'}
        transition ease-linear flex items-center justify-center h-full opacity-70
        hover:opacity-100
        `}
        id={`project-${idx}`}
      >
          {typeDevice === 1
            ? <Laptop laptopImage={image} id={idx}/>
            : <Mobile mobileImage={image} id={idx}/>
          }

      </div>
      <div className={`${reverse ? 'order-1 items-end' : ''} w-8/12 flex flex-col h-full bg-background justify-center`}>
        <p className='pl-3 text-[#A3B3BC] w-fit text-sm font-open-sans font-bold tracking-wide'>{typeProject}</p>
        <div className={`${reverse ? 'justify-end' : ''} w-full flex items-center mt-2 mb-4`}>
          <p
            className={`
              ${reverse ? 'order-2' : ''}
              pl-3 text-transparent w-fit bg-clip-text bg-gradient-to-r 
              from-cyan to-sky text-3xl font-bold font-open-sans 
              cursor-default
            `}>
          {titleProject}
          </p>
          <Links linksProject={linksProject} reverse={reverse}/>
        </div>
        <div className='bg-gradient-to-r from-sky to-cyan w-fit pt-[1px] pb-[1px] ml-3'>
          <p className='h-full bg-background pl-3 text-[#A3B3BC] text-sm font-open-sans font-bold tracking-wide leading-6 py-3 pr-3'>
            {description}
          </p>
        </div>
        <h3 className='text-[#A3B3BC] ml-3 mt-3 float-right w-fit'>Tech Stack:</h3>
        <ul className='w-full flex justify-around text-[#A3B3BC] mt-2'>
          {techStack.map((tec, idx) => 
            <li key={idx}>- {tec}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Project