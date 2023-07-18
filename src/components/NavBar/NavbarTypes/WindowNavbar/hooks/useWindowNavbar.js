import { useEffect, useState } from 'react';

export const useWindowNavbar = ({ setActivePage }) => {
  const [selectedButton, setSelectedButton] = useState('home');
  const [isOpen, setisOpen] = useState(false);
  const [show, setShow] = useState(true)
  const [prevScroll, setprevScroll] = useState(0);

  const controlNavbar = () => {
    setprevScroll(window.scrollY)
    setShow(!(window.scrollY > prevScroll))

  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
        window.removeEventListener('scroll', controlNavbar)
    }
  }, [prevScroll]);//eslint-disable-line

  const onActivePage = (to) => {
    setSelectedButton(to)
  }

  const moveCurrentPage = (page) => {
    setSelectedButton(page);
    setActivePage(page);
  }
  return {
    /* States */
    selectedButton,
    isOpen,
    show,

    /* State Functions */
    setisOpen,

    /* Functions */
    onActivePage,
    moveCurrentPage
  }
}

export default useWindowNavbar;