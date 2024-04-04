import { useEffect, useState } from 'react'
import { get } from '../../../services/API';

function useExperience() {
  const [works, setWorks] = useState(null)
  const [activeWork, setActiveWork] = useState('1');
  const [findWork, setFindWork] = useState(0)

  const updateWorkDescription = () => setFindWork(works.find(work => work.number_of_work === activeWork))
  
  const loadWorks = async () => {
    await get('/works').then(res => {
      setWorks(res.data)
    })
  }

  useEffect(() => {
    if (works) updateWorkDescription()
  },[activeWork, works]); //eslint-disable-line

  useEffect(() => {
    loadWorks()
  }, [])

  return {
    /* States */
    activeWork,
    findWork,
    works,

    /* State functions */
    setActiveWork
    /* Functions */
  }
}

export default useExperience