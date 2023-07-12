import React from 'react'
import Links from './Links'

function Cards({ 
  image, typeProject, titleProject, linksProject, description,
  techStack,
 }) {
  return (
    <div
      className='max-w-[400px] rounded-lg bg-transparent
      transition transform
      mb-20 border border-[#ffffff1a]
      hover:shadow-[2px_10px_30px_0px_rgba(0,0,0,1)]
      hover:scale-105
      '
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
            '
          src={image}
          alt='work' />
      </div>
      <div className='pl-6 mt-6'>
        <p className='text-[#A3B3BC]'>{typeProject}</p>
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
      <div className='pl-6 pr-6 mt-2 text-[#A3B3BC] max-h-[180px] overflow-y-auto'>
        <p className='mb-4 text-base text-neutral-600'>
          {description}
        </p>
      </div>
      <div className='mt-2 mb-6 pl-3'>
        <h3 className='text-[#A3B3BC] ml-3 w-fit'>Tech Stack:</h3>
        <ul className='flex flex-col pl-3 text-[#A3B3BC] mt-2'>
          {techStack.map((tec, idx) => 
            <li key={idx}>- {tec}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Cards