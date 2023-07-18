import React from 'react';
import { Link as LinkScroll } from 'react-scroll/modules';
import { motion } from "framer-motion";

import useWindowNavbar from './hooks/useWindowNavbar';

import Logo from '../../../../assets/images/LuisFR.png';
import {
  buttonVariants ,
  CLASS_BUTTON, 
  SELECTED_CLASS_BUTTON
} from './utils/constants';


function WindowNavbar({ buttons, setActivePage, activePage }) {
  const { 
    selectedButton, show, moveCurrentPage, onActivePage 
  } = useWindowNavbar({ setActivePage });
  

  return (
    <header className={`${show ? 'translate-y-0' : '-translate-y-[80px]'} transition ease-linear duration-200 fixed w-full z-20`}>

      <nav className="bg-background px-10 py-2.5 hidden lg:block">
        <div className="flex flex-wrap justify-between items-center w-full">
          <motion.a 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{
              duration: 1,
            }}
            href="/" 
            className="flex items-center">
              <img src={Logo} className="ml-2 mr-1 h-6" alt="Luis FR Logo" />
          </motion.a>
          <div className="flex items-center lg:order-2">
              <motion.a 
                href="mailto:luisflr1997@gmail.com"
                className="
                  text-[#e1e0e0]  font-open-sans
                  rounded-lg text-sm px-4 mr-2
                  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple hover:to-pink 
                  hover:shadow-[0px_0px_8px_3px_rgba(126,91,239)] hover:font-bold
                  lg:px-5 py-2 lg:py-2.5 lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }} 
                transition={{
                  duration: 1,
                }}
              >
                Contact me
              </motion.a>
          </div>
          
          <div className="xl:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 outline-none font-open-sans text-sm stroke-none">
                  {buttons.map((button, i) => 
                    <motion.li 
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={buttonVariants}
                      key={i}
                      className='relative'
                    >
                      <LinkScroll
                        activeClass='active'
                        to={button.id}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onSetActive={moveCurrentPage}
                        onClick={() => onActivePage(button.id)}
                        className={` ${selectedButton  === button.id || activePage === button.id ? SELECTED_CLASS_BUTTON : CLASS_BUTTON} transition duration-200 cursor-pointer relative`}
                      >
                        {button.label}
                      </LinkScroll>
                      {activePage === button.id ? (
                          <motion.div className="absolute bottom-0 bg-gradient-to-r from-blue to-cyan h-[1px] left-0 right-0 z-10" layoutId="underline" />
                        ) : null}
                    </motion.li>
                  )}
              </ul>
          </div>
        </div>   
      </nav>
    </header>
  )
}

export default WindowNavbar