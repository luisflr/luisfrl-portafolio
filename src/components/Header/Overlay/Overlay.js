import React from 'react'

function Overlay({ buttons, isOpen, selectedButton }) {
  const classButton = `block transition transform 
  text-white hover:text-transparent hover:bg-clip-text 
  hover:bg-gradient-to-r hover:from-blue hover:to-cyan 
  hover:bg-transparent text-primary-700 lg:p-0 font-comic`;

  const selectedClassButton = 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan font-comic';

  return (
    <div
      className={`${isOpen ? 'right-0' : '-right-[200px]'}
      absolute transition-all duration-500 w-[200px] h-screen 
      bg-background1 top-[87px] 
      shadow-default 
      `}
    >
      <ul className="flex flex-col pl-4 pr-7 font-medium text-white">
        {buttons.map((button, idx) => 
          <li key={idx} className='border-b-2 border-blue-100 '>
            <button className={`${selectedButton === idx ? selectedClassButton : classButton} my-3`}>{button}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Overlay
