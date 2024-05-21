import React from 'react';

import useAllPersonalProjects from './hooks/useAllPersonalProjects';
import SidebarProjects from './SidebarProjects';
import Title from '../../components/Title/Title';
import DescriptionProjects from './DescriptionProjects';



function AllPersonalProjects() {
  const { allPersonalProjects, selectedProject, setSelectedProject } = useAllPersonalProjects();
  const commonProps = {allPersonalProjects, selectedProject, setSelectedProject}
  return (
    <>
    {allPersonalProjects !== null && 
      <section className='h-screen w-full flex flex-col justify-center items-center px-12'>
        <Title textTitle='All Personal Projects'/>
        <div className=' border border-[#ffffff23] flex justify-between w-[1300px]'>
          <SidebarProjects {...commonProps}/>
          <DescriptionProjects project={allPersonalProjects[selectedProject]} />
        </div>
      </section>
    }
    </>
  )
}

export default AllPersonalProjects