import { useState } from 'react';

import Logo from '../../assets/icons/Logo.png';
import Menu from '../../assets/svg/Menu';
import Overlay from './Overlay/Overlay';

export default function Header() {
  const buttons = ['HOME', 'ABOUT ME', 'EXPERIENCE', 'PROJECTS'];
  const buttonsMobile = ['HOME', 'ABOUT ME', 'EXPERIENCE', 'PROJECTS', 'CONTAC ME'];
  const [selectedButton, setSelectedButton] = useState(0);
  const [isOpen, setisOpen] = useState(false);

  const classButton = `block transition transform py-2 pr-4 pl-3 
    text-[#e1e0e0] hover:text-transparent hover:bg-clip-text 
    hover:bg-gradient-to-r hover:from-blue hover:to-cyan font-bold
    hover:bg-transparent lg:p-0 outline-none`;
  const selectedClassButton = 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan border-b-2 border-cyan outline-none font-bold';

  return (
    <header className='fixed w-screen z-20'>
      <nav className="bg-background px-5 sm:px-12 py-2.5 dark:bg-gray-800">
        <div className='py-4'>
          <div className="flex flex-wrap justify-between items-center w-full">
            <a href="/" className="flex items-center">
                <img src={Logo} className="ml-2 mr-1 h-5 sm:h-7" alt="Luis FR Logo" />
                <span className="self-center hidden sm:block sm:text-xl whitespace-nowrap text-[#c5c3c3] font-comic font-thin">Luis FR</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="mailto:luisflr1997@gmail.com" className="text-[#e1e0e0] hidden lg:block transition transform font-open-sans font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple hover:to-pink hover:shadow-[0px_0px_8px_3px_rgba(126,91,239)] rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                  CONTACT ME
                </a>
                <button className="flex lg:hidden  " onClick={() => setisOpen(!isOpen)} >
                  <Menu classname={`transition transform fill-white hover:drop-shadow-[0_0_10px_cyan]`}/>
                </button>
            </div>
            <Overlay buttons={buttonsMobile} setisOpen={setisOpen} isOpen={isOpen} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
            <div className="hidden xl:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 outline-none font-open-sans text-sm font-bold">
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
