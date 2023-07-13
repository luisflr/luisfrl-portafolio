import React from 'react'

function Overlay({ buttons, isOpen, selectedButton, setisOpen, setSelectedButton }) {
  const classButton = `block transition transform 
  text-white hover:text-transparent hover:bg-clip-text 
  hover:bg-gradient-to-r hover:from-blue hover:to-cyan 
  hover:bg-transparent text-primary-700 lg:p-0 font-open-sans`;

  const selectedClassButton = 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan font-open-sans';

  return (
    <aside
      className={`${isOpen ? 'right-0' : '-right-[200px]'}
      absolute transition-all duration-500 w-[200px] h-screen 
      bg-background top-0 
      shadow-default lg:hidden
      `}
    >
      <button className='absolute transition transform right-7 top-5 font-comic text-white hover:text-blue' onClick={() => setisOpen(false)}>X</button>
      <ul className="flex flex-col mt-10 pl-4 pr-7 font-bold text-sm">
        {buttons.map((button, idx) => 
          <li key={idx} className='border-b-2 border-blue-100 outline-none'>
            <button onClick={() => setSelectedButton(idx)} className={`${selectedButton === idx ? selectedClassButton : classButton} outline-none my-3`}>{button}</button>
          </li>
        )}
      </ul>
    </aside>
  )
}

export default Overlay
