import { useEffect, useState } from 'react';
import { getProjects } from '../../services/projects'

const useProjects = () => {
  const [workProjects, setWorkProjects] = useState(null);
  const [personalProjects, setPersonalProjects] = useState(null)

  const loadProjects = async () => {
    await getProjects(process.env.REACT_APP_GET_PROJECTS_URI).then(res => {
      setWorkProjects(res?.data.filter(data => data.type_project === 'Work'))
      setPersonalProjects(res?.data.filter(data => data.type_project === 'personal'))
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