import ExperienceIcon from '../../assets/icons/PagesTimeLineIcons/ExperienceIcon';
import HomeIcon from '../../assets/icons/PagesTimeLineIcons/HomeIcon';
import ProjectsIcon from '../../assets/icons/PagesTimeLineIcons/ProjectsIcon';
import UserIcon from '../../assets/icons/PagesTimeLineIcons/User';

export const BUTTONS = [
  {
    label:'Home',
    id: 'home'
  },
  {
    label: 'About me',
    id: 'about-me'
  },
  {
    label: 'Experience',
    id: 'experience'
  },
  {
    label: 'Projects',
    id: 'projects'
  }
];

export const TIMELINE_ICONS = [
  <HomeIcon wrapperClassName='w-4 h-4' />,
  <UserIcon wrapperClassName='w-5 h-5'/>,
  <ExperienceIcon wrapperClassName='w-5 h-5'/>,
  <ProjectsIcon wrapperClassName='w-5 h-5'/>
]