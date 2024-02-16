import { useEffect, useState } from 'react'

function useExperience({ works }) {
  const [activeWork, setActiveWork] = useState('1');
  const [findWork, setFindWork] = useState(0)

  const updateWorkDescription = () => { setFindWork(works.find(work => work.id === activeWork)) }
  
  useEffect(() => {
    updateWorkDescription()
  },[activeWork]); //eslint-disable-line

  return {
    /* States */
    activeWork,
    findWork,

    /* State functions */
    setActiveWork
    /* Functions */
  }
}

export default useExperience