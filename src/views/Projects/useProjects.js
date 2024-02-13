import { useEffect, useState } from 'react';
import { getProjects } from '../../services/projects'
import { GET_PROJECTS_URL } from './utils/constants';

const useProjects = () => {
  const [workProjects, setWorkProjects] = useState(null);

  // TODO: usar para proyectos personales
  const [personalProjects, setPersonalProjects] = useState(null)

  const loadProjects = async () => {
    await getProjects(GET_PROJECTS_URL).then(res => {
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