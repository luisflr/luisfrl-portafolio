import { useRef } from "react";
import { useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";

function useMobileNavbar({ setActivePage }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height, width } = useDimensions(containerRef);

  const moveCurrentPage = (page) => {
    toggleOpen(false);
    setActivePage(page);
  }
  return {
    /* States */
    isOpen,
    height,
    containerRef,
    width,

    /* State Functions */
    toggleOpen,
    moveCurrentPage
  }
}

export default useMobileNavbar;