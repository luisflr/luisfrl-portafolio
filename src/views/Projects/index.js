import useProjects from './useProjects';
import WorkProjects from './WorkProjects';


export default function Projects() {
  const { workProjects } = useProjects()
  
  return (
    <section className='w-full pt-40 flex flex-col items-center justify-center' id='projects'>
      <WorkProjects workProjects={workProjects} />
    </section>
  );
}
