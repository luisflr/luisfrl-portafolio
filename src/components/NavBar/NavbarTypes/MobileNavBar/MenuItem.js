import React from "react";
import { Link as LinkScroll } from 'react-scroll/modules';
import { motion } from "framer-motion";

import { itemsColors, manuVariants } from './utils/constants';

export const MenuItem = ({ button, i, activePage, setActivePage, moveCurrentPage }) => {
  const style = { border: `2px solid ${itemsColors[i]}` };
  return (
    <motion.li
      className='list-none mb-7 flex items-center'
      variants={manuVariants}
    >
      <div className='w-4 mr-4' style={style} />
      <LinkScroll
        onClick={moveCurrentPage}
        onSetActive={() => setActivePage(button.id)}
        to={button.id}
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        className={`
        ${activePage === button.id ? 'text-cyan' : 'text-default-text'} 
        cursor-pointer text-md transition
        hover:scale-110 active:scale-95`}
      >
        {button.label}
      </LinkScroll>
    </motion.li>
  );
};
