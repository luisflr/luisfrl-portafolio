import { useEffect, useState } from 'react';
import { get } from '../../../services/API'

const useProjects = () => {
  const [workProjects, setWorkProjects] = useState(null);
  const [personalProjects, setPersonalProjects] = useState(null)

  const loadProjects = async () => {
    await get('/projects').then(res => {
      setWorkProjects(res?.data.filter(data => data.type_project === 'Work'))
      setPersonalProjects(res?.data.filter(data => data.type_project === 'personal' && data.is_active).slice(0,3))
    });
  }

  useEffect(()=>{
    if (workProjects === null || workProjects?.length === 0) loadProjects();
  },[]) //eslint-disable-line

  return {
    /* States */
    personalProjects,
    workProjects

    /* State functions */
    /* Functions */
  }
}

export default useProjects;