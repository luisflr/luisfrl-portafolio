import React from 'react'

const ContentOfList = ({ findWork }) => {
  return (
    <div key={`work-active-${findWork.number_of_work}`} className='animate-[appear_0.5s_ease-in] opacity-1 max-w-[750px] pl-6 pr-2'>
      <div className='flex mb-3 items-center'>
        <a href={findWork.work_link} target='_blank' rel='noreferrer' className='cursor-pointer'>
          <img src={findWork?.image} alt={`${findWork?.image} logo`} className='h-8 w-28 mr-2'/>
        </a>
        <p className='text-[#A3B3BC] text-xl'>{findWork.name}</p>
      </div>
      {findWork.description?.map((description, index) => (
        <div key={`work-description-${index}`}>
          <p className='text-[#A3B3BC] text-left mb-2 font-sans tracking-wide leading-relaxed'>
            {description}
          </p> 
        </div>
      ))}
      <ul>
        {findWork.stack?.map((tech_stack, index) => (
          <li key={`work-stack-${index}`} className='flex items-center before:content-["▹"] before:text-blue before:-ml-1'>
            <p className='pl-4 relative text-[#A3B3BC]'>{tech_stack}</p>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default ContentOfList