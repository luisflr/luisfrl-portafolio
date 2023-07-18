import React from 'react'
import { ICONS_PROJECTS as icons } from './utils/constants'

function Mobile({ mobileImage, reverse, techStack, id  }) {
  return (
    <div className='w-full flex'>
      <div className={`${reverse ? 'order-2 justify-end' : 'order-1'} flex transition h-fit hover:drop-shadow-[0_0_5px_cyan] w-5/6`}>
        <div className='
          relative mx-auto 
          p-4 border-[#333] bg-background border-[2px]
          rounded-[2.5rem] h-[400px] w-[200px]'
          id={`device-${id}`}>
          <div className='h-[32px] w-[5px] bg-[#303233] absolute -left-[5px] top-[72px] rounded-l-lg'></div>
          <div className='h-[46px] w-[5px] bg-[#303233] absolute -left-[5px] top-[124px] rounded-l-lg'></div>
          <div className='h-[46px] w-[5px] bg-[#303233] absolute -left-[5px] top-[178px] rounded-l-lg'></div>
          <div className='h-[64px] w-[5px] bg-[#303233] absolute -right-[5px] top-[142px] rounded-r-lg'></div>
          <div className='flex justify-center items-center rounded-[2rem] overflow-hidden w-full h-full  border-[#333] border-[2px]'>
            <img src={mobileImage} alt='mobile' className='w-full h-full transition ease-in opacity-80 hover:opacity-100 hover:absolute hover:scale-105 rounded-2xl' />
          </div>
        </div>
      </div>
      <ul className={`${reverse ? 'order-1 items-center' : 'order-2 items-center'} justify-center flex flex-col w-1/6 space-y-6`}>
        <li className='text-default-text'>Stack:</li>
        {techStack?.map((tech, idx) => (
          <li key={idx}>
            <div className='group flex relative'>
              {icons[tech]?.icon}
              <span className='
                group-hover:opacity-100 transition-opacity px-1 text-sm text-default-text rounded-md absolute left-1/2 
                translate-x-1 -translate-y-5 opacity-0 m-4 shrink-0 w-[90px]'
              >
                {icons[tech]?.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Mobile