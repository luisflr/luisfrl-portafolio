import React from 'react'
import { ICONS_PROJECTS as icons } from './utils/constants';

function Laptop({ laptopImage, reverse, techStack }) {
  return (
    <div className='flex w-full'>
      <div className={`${reverse ? 'order-2' : 'order-1'} h-fit transition hover:drop-shadow-[0_0_5px_cyan] w-5/6`}> 
        <div className='
          relative mx-auto p-3 border-[#333] bg-background border-[1px]
          rounded-t-xl h-[172px] max-w-[301px]
          lg:h-[134px] xl:h-[184px] lg:max-w-[212px] xl:max-w-[312px]'
        >
          <div className='flex justify-center items-center rounded-lg overflow-hidden h-full w-full'>
            <img src={laptopImage} className='object-cover bg-background h-full w-full rounded-lg opacity-80 transition ease-linear hover:scale-110 hover:absolute hover:opacity-100' alt='screen'/>
          </div>
        </div>
        <div className='
          relative mx-auto border-[#333] bg-background border-[1px]
          rounded-b-xl rounded-t-sm h-[17px] max-w-[351px]
          lg:h-[17px] xl:h-[21px] lg:max-w-[267px] xl:max-w-[367px]'>
          <div className='
            absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px]
            lg:w-[96px] lg:h-[8px] border-[#333] bg-background border-[1px]'>
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

export default Laptop