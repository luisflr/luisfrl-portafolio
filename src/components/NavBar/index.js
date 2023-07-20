import MobileNavbar from './NavbarTypes/MobileNavBar/MobileNavbar';
import WindowNavbar from './NavbarTypes/WindowNavbar/WindowNavbar';
import { BUTTONS } from '../utils/constants';

export const Navbar = ({ activePage, setActivePage }) => {
  
  /* Component Props */
  const commonProps = {
    buttons: BUTTONS, activePage, setActivePage
  }
  return (
    <>
      <WindowNavbar {...commonProps} />
      <MobileNavbar {...commonProps}/>
    </>
    
  )
}

export default Navbar;