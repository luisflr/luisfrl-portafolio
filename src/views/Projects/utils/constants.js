import VozyDashboard from '../../../assets/images/vozy.png';
import ToDo from '../../../assets/images/To-Do.png';
import Incabeneficios from '../../../assets/images/incabeneficios.jpg';

export const PROJECTS = [
  {
    type: 1,
    title: 'To-Do Platform',
    links: {
      github: 'https://github.com/luisflr/todo-angular',
      web: 'https://todo-angular-43e05.web.app/'
    },
    description: `An app where you can create, update or delete your tasks or task lists. The design of 
      this application was inspired by the Trello platform, so it also handles features such as drag-drop.`,
    techStack: ['angular', 'firebase', 'github', 'angular_CDK'],
    image: ToDo,
    typeProject: 'Personal web project'
  },
  {
    type: 1,
    title: 'Vozy Dashboard',
    links: {
      web: 'https://web.vozy.ai'
    },
    description: `This project parameterized with diagrams, reports, etc. all product results
      purchased by other companies. This product consisted of the communication of an AI with 
      different clients either with whatsapp or calls, that is, a virtual assistant. Also, 
      the dashboard managed a conversational flows where built in detail the possible responses 
      of the AI to the client.`,
    techStack: ['reactjs', 'auth0', 'react_flow', 'gitlab'],
    image: VozyDashboard,
    typeProject: 'Work web project'
  },
  {
    type: 2,
    title: 'Inca Beneficios App',
    links: {
      iosLink: 'https://apps.apple.com/pe/app/inca-beneficios/id1507998300',
      androidLink: 'https://play.google.com/store/apps/details?id=com.apselom.inkabeneficios&hl=es_PE&gl=US',
    },
    description: `This application is a platform where articles, services and in general benefits are exposed, 
      which the collaborators of the Inca group have because they belong to work within the group.`,
    techStack: ['angular', 'ionic', 'django', 'bitbucket'],
    image: Incabeneficios,
    typeProject: 'Work mobile project'
  },
]