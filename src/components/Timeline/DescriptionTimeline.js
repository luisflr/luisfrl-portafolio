import React from 'react';

import Links from '../Common/Links';

function DescriptionTimeline({
  typeProject, titleProject, linksProject, reverse, description
}) {
  return (
    <>
      <p className={`${reverse ? 'float-right pr-3' : 'pl-3'} text-[#A3B3BC] w-fit text-sm font-sans tracking-wide`}>{typeProject}</p>
      <div className={`${reverse ? 'justify-end' : ''} w-full flex items-center mt-2 mb-4`}>
        <p
          className={`
          ${reverse ? 'order-2 pr-3' : 'pl-3'}
          text-transparent w-fit bg-clip-text bg-gradient-to-r 
          from-cyan to-sky text-3xl font-sans font-semibold
          cursor-default
        `}>
        {titleProject}
        </p>
    </div>
    <div className={`${reverse ? 'pl-[1px] mr-3' : 'pr-[1px] ml-3' } bg-gradient-to-r from-sky to-cyan w-fit pt-[1px] pb-[1px] mb-4`}>
        <p className='h-full bg-background p-3 text-[#A3B3BC] text-[0.95rem] font-sans tracking-wide leading-6'>
        {description}
        </p>
    </div>
    <Links linksProject={linksProject} reverse={reverse}/>
    </>
  )
}

export default DescriptionTimeline