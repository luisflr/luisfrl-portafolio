import PersonalProjects from './PersonalProjects';
import useProjects from './hooks/useProjects';
import WorkProjects from './WorkProjects';


export default function Projects() {
  const { personalProjects, workProjects } = useProjects()
  
  return (
    <section className='w-full flex flex-col items-center justify-center' id='projects'>
      <PersonalProjects personalProjects={personalProjects}/>
      <WorkProjects workProjects={workProjects} />
    </section>
  );
}
