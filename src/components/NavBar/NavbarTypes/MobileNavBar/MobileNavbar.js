import React from 'react'
import { motion } from 'framer-motion';

import { MenuList } from './MenuList';

import useMobileNavbar from './hooks/useMobileNavbar';

import { sidebar } from './utils/constants';
import { MenuToggle } from '../../../../assets/icons/CommonIcons/MenuToggle';
import Logo from '../../../../assets/images/LuisFR.png';

function MobileNavbar({ buttons, setActivePage, activePage }) {
  const { isOpen, height, containerRef, toggleOpen, moveCurrentPage } = useMobileNavbar({ setActivePage })
  return (
    <header>
      <motion.nav 
        initial={false}
        animate={isOpen ? {
          height: '100vh',
          backdropFilter: 'blur(5px)',
          background: '#0000009c',
        } : {
          background: '#000',
          height: '80px',
          backdropFilter: 'blur(0px)',
          transition: {
            delay: 0.4
          }
        }}
        className='lg:hidden fixed w-full flex  z-30'
      >
        <motion.a 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: {
                duration: 1
              }
            }} 
            whileHover={{
              scale: 1.1
            }}
            href='/' 
            className='mt-[18px] ml-12 w-20 h-fit'>
              <img src={Logo} className='h-6 ' alt='Luis FR Logo' />
          </motion.a>
        <motion.div
          className='absolute top-0 right-0 bottom-0 w-[230px] bg-transparent'
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className='absolute top-0 right-0 bottom-0 w-[230px] bg-background' variants={sidebar}/>
          <MenuList
            buttons={buttons}
            setActivePage={setActivePage}
            activePage={activePage}
            moveCurrentPage={moveCurrentPage}
          />
          <button
            onClick={toggleOpen}
            className='
              outline-none border-none cursor-pointer absolute 
              top-[18px] right-[15px] w-[50px] h-[50px] rounded-3xl
              z-30
            '>
            <MenuToggle />
          </button>
        </motion.div>
      </motion.nav>
    </header>
  );
}

export default MobileNavbar