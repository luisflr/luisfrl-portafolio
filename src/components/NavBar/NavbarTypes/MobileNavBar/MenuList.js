import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const MenuList = ({ buttons, activePage, moveCurrentPage, setActivePage }) => (
  <motion.ul
    className='p-[25px] absolute top-[100px] w-screen left-0'
    variants={variants}>
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
);
