import { useEffect, useState } from 'react';
import { getProjects } from '../../services/projects'

const useProjects = () => {
  const [workProjects, setWorkProjects] = useState(null);

  // TODO: usar para proyectos personales
  const [personalProjects, setPersonalProjects] = useState(null)

  const loadProjects = async () => {
    await getProjects('http://localhost:8080/api/v1/projects').then(res => {
      setWorkProjects(res.data.filter(data => data.type_project === 'Work'))
    });
  }

  useEffect(()=>{
    if (workProjects === null || workProjects.length === 0) loadProjects();
  },[]) //eslint-disable-line

  return {
    /* States */
    workProjects

    /* State functions */
    /* Functions */
  }
}

export default useProjects;