
import { motion } from 'framer-motion';

import Cards from '../../components/Common/Cards';
import Timeline from '../../components/Timeline/Timeline';


export default function WorkProjects({ workProjects }) {
  
  
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      
      <div className='h-fit max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col justify-center items-center'>
        
        <motion.p 
        className='text-3xl flex overflow-hidden text-default-text font-bold font-sans mb-8 pr-2 whitespace-nowrap'
        initial={{ width: '0' }}
        whileInView={{ 
          width: 'fit-content',
          transition: {
            delay: 0.1,
            duration: 0.8
          }
        }}
        viewport={{ once: true }}  
        >
          · Work Projects
        </motion.p>

        {workProjects 
          ? <>
            <div className='hidden lg:block'>
              <Timeline projects={workProjects}/>
            </div>
            
            <div className='w-full flex flex-col items-center justify-center lg:hidden'>
              {workProjects?.map((project, index) => 
                <Cards 
                  key={`project-id-${index}`}
                  typeProject={project.type_project}
                  image={project.image}
                  titleProject={project.title}
                  linksProject={project.links}
                  description={project.description}
                  techStack={project.tech_stack}
                />
              )}
            </div>
          </>
          : <p>loading</p>
        }
      </div>
    </section>
  );
}
