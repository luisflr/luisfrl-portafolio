import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Cards from '../../components/Common/Cards';

import LinkWeb from '../../assets/svg/enlace.svg';

function PersonalProjects({ personalProjects}) {
  return (
    <section className='w-full pb-20 flex flex-col items-center justify-center px-5' id='projects'>
      <motion.p 
        className='text-3xl flex overflow-hidden text-default-text font-bold font-sans mb-20 pr-2 whitespace-nowrap'
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
          · Personal Projects
        </motion.p>
        <div className='lg:relative w-full max-w-[1400px] flex flex-col lg:flex-row justify-center items-center lg:space-x-14'>
          {personalProjects?.map((project, index) => 
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
          {/* <Link to='/all-personal-projects' className='
            lg:absolute lg:bottom-0 lg:right-14 
            text-default-text flex items-center 
            hover:drop-shadow-[0_0_3px_blue] hover:scale-105 transition'
          >
            View more personal projects ... 
            <img src={LinkWeb} className='h-[18px] ml-2 ' alt='link all projects'/>
          </Link> */}
        </div>
    </section>
  )
}

export default PersonalProjects