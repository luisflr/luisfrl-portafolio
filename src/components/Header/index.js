import { useState } from 'react';

import Logo from '../../assets/icons/Logo.png';
import Menu from '../../assets/svg/Menu';
import Overlay from './Overlay/Overlay';

export default function Header() {
  const buttons = ['Home', 'About me', 'Experience', 'Projects'];
  const [selectedButton, setSelectedButton] = useState(0);
  const [isOpen, setisOpen] = useState(false);

  const classButton = `block transition transform py-2 pr-4 pl-3 
    text-[#e1e0e0] hover:text-transparent hover:bg-clip-text 
    hover:bg-gradient-to-r hover:from-blue hover:to-cyan 
    hover:bg-transparent text-primary-700 lg:p-0 outline-none font-comic`;
  const selectedClassButton = 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan border-b-2 border-cyan outline-none font-comic';

  const selectedMenu = 'stroke-pink fill-purple'
  const normalMenu = 'stroke-white fill-white'
  return (
    <header className='fixed w-screen z-10'>
    <nav className="bg-background1 px-12 py-2.5 dark:bg-gray-800">
      <div className='py-4'>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
              <img src={Logo} className="ml-2 mr-1 h-6 sm:h-7" alt="Luis FR Logo" />
              <span className="self-center text-xl whitespace-nowrap text-[#c5c3c3] font-prompt font-thin">Luis FR</span>
          </a>
          <div className="flex items-center lg:order-2">
              <a href="mailto:luisflr1997@gmail.com" className="text-[#e1e0e0] transition transform font-comic hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple hover:to-pink hover:shadow-[0px_0px_10px_0px_rgba(126,91,239)] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                Contact Me
              </a>
              <button className="flex lg:order-3 lg:hidden" onClick={() => setisOpen(!isOpen)} >
                <Menu classname={`transition transform ${isOpen ? selectedMenu : normalMenu}`}/>
              </button>
          </div>
          <Overlay buttons={buttons} isOpen={isOpen} selectedButton={selectedButton}/>
          <div className="hidden xl:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 outline-none">
                  {buttons.map((button, idx) => 
                    <li key={idx}>
                      <button className={selectedButton === idx ? selectedClassButton : classButton} onClick={() => setSelectedButton(idx)}>{button}</button>
                    </li>
                  )}
              </ul>
          </div>
        </div>
      </div>
    </nav>
</header>
  )
}
