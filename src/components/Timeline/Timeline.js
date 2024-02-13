import React from 'react';
import { motion } from 'framer-motion';

import Laptop from '../Devices/Laptop';
import Mobile from '../Devices/Mobile';
import DescriptionTimeline from './DescriptionTimeline';

function Timeline({ projects }) {

  return (
    <div className='w-full flex flex-col items-center bg-gradient-to-r from-sky to-cyan py-[1px] mb-40'>
      <div className='w-full py-40 bg-background'>
        <div className='relative'>

          {/* {Vertical middle line} */}
          <motion.div 
            className='absolute w-px bg-default-text transform -translate-x-1/2 block left-1/2'
            initial={{ height: '0' }}
            whileInView={{ 
              height: '100%',
              transition: {
                delay: 0.6,
                duration: 3
              }
            }}
            viewport={{ once: true }} 
          />
          <div className='space-y-60'>
            {projects.map((project, idx) => (
              project.type_project === 'Work' &&
              <div key={idx}>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center justify-between w-full mx-auto'>
                    {/* {Left section } */}
                    <motion.div
                      className={`${idx % 2 === 0 ? 'flex justify-center pl-8' : 'pr-8 rounded shadow-lg shadow-red-300'} w-1/2 `}
                      initial= {{ y: 50, x: -50, opacity: 0 }}
                      whileInView={{ y: 0, x: 0,opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      {idx % 2 === 0
                      ? project?.type_platform === 'web'
                        ? <Laptop 
                            laptopImage={project.image}
                            reverse={idx % 2 === 0}
                            techStack={project.tech_stack}
                          />
                        : <Mobile
                            mobileImage={project.image}
                            reverse={idx % 2 === 0}
                            id={idx}
                            techStack={project.tech_stack}
                          />
                      : <DescriptionTimeline
                          typeProject={project.type_project}
                          titleProject={project.title}
                          linksProject={project.links}
                          reverse={!(idx % 2 === 0)}
                          description={project.description}
                        />
                      }

                      
                    </motion.div>
                    {/* {Right section } */}
                    <motion.div
                      className={`${idx % 2 !== 0 ? 'flex justify-center w-1/2 lg:pr-8' : 'w-1/2 p-4  rounded shadow-lg shadow-red-300'}`}
                      initial= {{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0,opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                    {idx % 2 !== 0
                      ? project?.type_platform === 'web'
                        ? <Laptop laptopImage={project.image}
                            reverse={idx % 2 === 0}
                            techStack={project.tech_stack}/>
                        : <Mobile
                            mobileImage={project.image}
                            id={idx}
                            reverse={idx % 2 === 0}
                            techStack={project.tech_stack}
                          />
                      : <DescriptionTimeline
                          typeProject={project.type_project}
                          titleProject={project.title}
                          linksProject={project.links}
                          reverse={!(idx % 2 === 0)}
                          description={project.description}
                        />
                      }
                    </motion.div>
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