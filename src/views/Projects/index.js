import React from "react";

import Cards from '../../components/Common/Cards';
import Timeline from './Timeline/Timeline';

import {
  PROJECTS as projects
} from './utils/constants';

export default function Projects() {
  
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className='h-fit max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col justify-center items-start'>
        <p className={`
          text-3xl items-center flex text-[#A3B3BC] font-bold font-sans mb-10 pr-2 
          float-left w-full
          after:content-[""] after:block after:relative after:grow after:h-[1px]
          after:ml-[20px] after:bg-[#A3B3BC]
          lg:w-1/2
          `}>
          · Projects
        </p>
        
        <div className='hidden lg:block'>
          <Timeline projects={projects}/>
        </div>
        
        <div className='w-full flex flex-col items-center justify-center lg:hidden'>
          {projects.map((project, index) => 
            <Cards 
              key={`project-id-${index}`}
              typeProject={project.typeProject}
              image={project.image}
              titleProject={project.title}
              linksProject={project.links}
              description={project.description}
              techStack={project.techStack}
            />
          )}
        </div>
      </div>
    </section>
  );
}
