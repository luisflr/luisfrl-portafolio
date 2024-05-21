import Cards from '../../components/Common/Cards';
import Timeline from '../../components/Timeline/Timeline';
import Title from '../../components/Title/Title';


export default function WorkProjects({ workProjects }) {
  
  
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      
      <div className='h-fit max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col justify-center items-center'>
        
        <Title textTitle='Work Projects'/>

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
