import { useEffect, useState } from 'react';
import { get } from '../../../services/API'

const useAllPersonalProjects = () => {
  const [allPersonalProjects, setAllPersonalProjects] = useState(null);
  const [selectedProject, setSelectedProject] = useState(0);

  const loadProjects = async () => {
    await get('/projects').then(res => {
      setAllPersonalProjects(res?.data.filter(data => data.type_project === 'personal'))
    });
  }

  useEffect(()=>{
    if (allPersonalProjects === null || allPersonalProjects?.length === 0) loadProjects();
  },[]) //eslint-disable-line

  return {
    /* States */
    allPersonalProjects,
    selectedProject, 
    
    /* State functions */
    setSelectedProject
    
    /* Functions */
  }
}

export default useAllPersonalProjects;