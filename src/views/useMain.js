import { useState } from 'react'

const useMain = () => {
  const [activePage, setActivePage] = useState('');
  return {
    /* States */
    activePage,

    /* State Functions*/
    setActivePage
  }
}

export default useMain;