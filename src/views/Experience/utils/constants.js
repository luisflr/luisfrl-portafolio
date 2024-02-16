import vozy from '../../../assets/images/vozy-logo.webp';
import code from '../../../assets/images/code.webp';
import kipu from '../../../assets/images/kipu-logo.webp';

export const WORKS = [
    {
      id: '3',
      name: 'Vozy',
      period: 'jun. 2022 - may. 2023',
      description: [
        'I worked as a software developer focused only on the front-end side, consuming REST services for the implementation of new modules.',
        'In addition, the SCRUM methodology was applied, so I belonged to a work team and my day-to-day tools were the following:'
      ],
      stack: ['ReactJs', 'Auth0', 'ReactFlow', 'Git', 'Gitlab'],
      image: vozy
    },
    {
      id: '2',
      name: 'Kipu Software',
      period: 'may. 2021 - may. 2022',
      description: [
        'I worked as a Frontend developer with the React library, building friendly and responsive web systems. Also, I started to develop API with the Django framework, applying all the security criteria and efficiency.',
        'I finished my period working on a project for a German company dedicated to investments, which helped me to familiarize myself with the projects large scale'
      ],
      stack: ['ReactTs', 'Angular', 'Ionic', 'Git', 'Django', 'Bitbucket'],
      image: kipu
    },
    {
      id: '1',
      name: 'Co-de',
      period: 'ago. 2020 - dic. 2020',
      description: [
        'During this period I worked as a FullStack developer, applying my knowledge in the development of web and mobile applications, as well as',
        'I also started to implement some APIs with the Lumen micro-framework.'
      ],
      stack: ['Angular', 'Flutter', 'Lumen', 'Git', 'Gitlab'],
      image: code
    }
  ];
