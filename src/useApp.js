import { useState } from 'react'

const useApp = () => {
  const [activePage, setActivePage] = useState('');
  return {
    /* States */
    activePage,

    /* State Functions*/
    setActivePage
  }
}

export default useApp;