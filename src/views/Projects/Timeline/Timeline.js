import React from 'react'

import Laptop from '../../../components/Devices/Laptop';
import Mobile from '../../../components/Devices/Mobile';
import DescriptionTimeline from './DescriptionTimeline';

function Timeline({ projects }) {

  return (
    <div className='w-full flex flex-col items-center bg-gradient-to-r from-sky to-cyan py-[1px] mb-40'>
      <div className='w-full py-40 bg-background'>

        <div className='relative'>

          {/* {Vertical middle line} */}
          <div className='absolute w-px h-full bg-default-text transform -translate-x-1/2 block left-1/2'></div>
          <div className='space-y-60'>
            
            {projects.map((project, idx) => (
              <div key={idx}>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-between w-full mx-auto'>
                    {/* {Left section } */}
                    <div className={`${idx % 2 === 0 ? 'flex justify-center pl-8' : 'pr-8 rounded shadow-lg shadow-red-300'} w-1/2 `}>
                      {idx % 2 === 0
                      ? project?.type === 1
                        ? <Laptop 
                            laptopImage={project.image}
                            reverse={idx % 2 === 0}
                            techStack={project.techStack}
                          />
                        : <Mobile
                            mobileImage={project.image}
                            reverse={idx % 2 === 0}
                            id={idx}
                            techStack={project.techStack}
                          />
                      : <DescriptionTimeline
                          typeProject={project.typeProject}
                          titleProject={project.title}
                          linksProject={project.links}
                          reverse={!(idx % 2 === 0)}
                          description={project.description}
                          techStack={project.techStack}
                        />
                      }

                      
                    </div>
                    {/* {Right section } */}
                    <div className={`${idx % 2 !== 0 ? 'flex justify-center w-1/2 lg:pr-8' : 'w-1/2 p-4  rounded shadow-lg shadow-red-300'}`}>
                    {idx % 2 !== 0
                      ? project?.type === 1
                        ? <Laptop laptopImage={project.image}
                            reverse={idx % 2 === 0}
                            techStack={project.techStack}/>
                        : <Mobile
                            mobileImage={project.image}
                            id={idx}
                            reverse={idx % 2 === 0}
                            techStack={project.techStack}
                          />
                      : <DescriptionTimeline
                          typeProject={project.typeProject}
                          titleProject={project.title}
                          linksProject={project.links}
                          reverse={!(idx % 2 === 0)}
                          description={project.description}
                          techStack={project.techStack}
                        />
                      }
                    </div>
                  </div>
                  <div
                    className='absolute flex items-center justify-center w-12 h-12 transform -translate-x-1/2 -translate-y-4 
                    rounded-full left-1/2 bg-background 
                    '>
                    <div className='text-white w-4 h-4 bg-gradient-to-r from-sky to-cyan rounded-full'> </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline