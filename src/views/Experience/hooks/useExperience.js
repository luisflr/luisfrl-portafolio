import { useEffect, useState } from 'react'
import { get } from '../../../services/API';

function useExperience() {
  const [works, setWorks] = useState(null)
  const [activeWork, setActiveWork] = useState('');
  const [currentWorkData, setCurrentWorkData] = useState()

  const updateWorkDescription = () => {
    if (activeWork) setCurrentWorkData(works.find(work => work.number_of_work === activeWork))
    else {
      setActiveWork(`${works.length}`)
    }
  }
  
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
    currentWorkData,
    works,

    /* State functions */
    setActiveWork
    /* Functions */
  }
}

export default useExperience