import React from "react";
import { motion } from "framer-motion";

import { MenuItem } from "./MenuItem";

import MailIcon from '../../../../assets/icons/socialIcons/MailIcon';

const variants = {
  open: {
    display: 'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MenuList = ({ buttons, activePage, moveCurrentPage, setActivePage }) => (
  <>
    <motion.ul
      className='p-[25px] absolute top-[100px] left-0'
      variants={variants}
    >
      {buttons.map((button, i) => (
        <MenuItem
          button={button}
          i={i}
          key={i} 
          activePage={activePage}
          moveCurrentPage={moveCurrentPage}
          setActivePage={setActivePage}
        />
      ))}
    </motion.ul>
    <motion.a 
      className='absolute bottom-7 right-9 rounded-full p-2 cursor-pointer' 
      href='mailto:luisflr1997@gmail.com'
      variants={{
        open: {
          display: 'block',
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.5
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            duration: 0.5
          }
        }
      }}
      whileHover={{
        boxShadow: '0px 0px 8px 3px rgba(126,91,239)',
        transition: {
          duration: 0.2
        }
      }}
    >
      <MailIcon wrapperClassName='stroke-default-text hover:stroke-pink transition ease-linear'/>
    </motion.a>
  </>
);
