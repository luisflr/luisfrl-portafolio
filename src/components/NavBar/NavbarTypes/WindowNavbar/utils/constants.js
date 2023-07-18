/* Window button classes  */
export const CLASS_BUTTON = `block py-2 pr-4 pl-3 
  text-[#e1e0e0] hover:text-transparent hover:bg-clip-text 
  hover:bg-gradient-to-r hover:from-blue hover:to-cyan
  hover:bg-transparent lg:p-0 outline-none`;

export const SELECTED_CLASS_BUTTON = `text-transparent bg-clip-text
  bg-gradient-to-r from-blue to-cyan outline-none font-bold`;

/* Animation */
export const buttonVariants = {
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: (2 + i) * 0.1,
      duration: 0.7,
    },
  }),
  hidden: {
    y: -60, 
    opacity: 0
  },
}