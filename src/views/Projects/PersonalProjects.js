import { motion } from 'framer-motion';
import Cards from '../../components/Common/Cards';

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
        <div className='w-full flex flex-col lg:flex-row justify-center lg:space-x-14'>
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
        </div>
    </section>
  )
}

export default PersonalProjects