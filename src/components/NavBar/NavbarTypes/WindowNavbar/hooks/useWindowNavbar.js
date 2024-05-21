import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useWindowNavbar = ({ setActivePage }) => {
  const [selectedButton, setSelectedButton] = useState('home');
  const [isOpen, setisOpen] = useState(false);
  const [show, setShow] = useState(true)
  const [prevScroll, setprevScroll] = useState(0);
  const navigate = useNavigate()

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

  const onActivePage = (to) => setSelectedButton(to)

  const moveCurrentPage = (page) => {
    setSelectedButton(page);
    setActivePage(page);
  }

  return {
    /* States */
    selectedButton,
    isOpen,
    show,
    navigate,

    /* State Functions */
    setisOpen,

    /* Functions */
    onActivePage,
    moveCurrentPage
  }
}

export default useWindowNavbar;