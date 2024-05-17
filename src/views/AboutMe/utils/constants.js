import DjangoIcon from '../../../assets/icons/FrameworkIcons/DjangoIcon';
import GitIcon from '../../../assets/icons/ToolIcons/GitIcon';
import HtmlIcon from '../../../assets/icons/LanguageIcons/HtmlIcon';
import JavascriptIcon from '../../../assets/icons/LanguageIcons/JavascriptIcon';
import ReactIcon from '../../../assets/icons/FrameworkIcons/ReactIcon';
import TypescriptIcon from '../../../assets/icons/LanguageIcons/TypescriptIcon';

export const skills = [
  <HtmlIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <JavascriptIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <TypescriptIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <ReactIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <DjangoIcon wrapperClassName='fill-default-text h-[37px] w-[37px]' />,
  <GitIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>
]

export const PlatziCourses = [
  {
    link: 'https://platzi.com/p/lflores8455/curso/2597-react-estado/diploma/detalle/',
    title: 'Curso Manejo profesional del estado / React'
  },
  {
    link: 'https://platzi.com/p/lflores8455/curso/6241-react-ssr/diploma/detalle/',
    title: 'Curso server side render SSR / React'
  },
  {
    link: 'https://platzi.com/p/lflores8455/curso/2478-angular/diploma/detalle/',
    title: 'Curso de Fundamentos de Angular'
  },
  {
    link: 'https://platzi.com/p/lflores8455/curso/4459-angular-tailwind/diploma/detalle/',
    title: 'Curso de Maquetación con Angular CDK y Tailwind'
  }
]
export const UdemyCourses = [
  {
    link: 'https://www.linkedin.com/in/luis-flores-rodriguez/overlay/1635528741751/single-media-viewer/?profileId=ACoAADcq26IBBXfjsMQumIEg3ctLuLbuP9XpUoE',
    title: 'Curso Seguridad Informática'
  },
  {
    link: 'https://www.udemy.com/certificate/UC-1a124250-242e-4808-95df-8f25eff95898/',
    title: 'Clean Code y Principios Solid'
  },
]

/* Animations */
export const buttonSkillsVariants = {
  visible: i => ({
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      delay: (8 + i) * 0.2,
      duration: 0.8,
    },
  }),
  hidden: i => ({
    y: -60, 
    opacity: 0,
    x: i < 3 ? (20 - (10 * i)) + 10 : (-20 * (i % 3)) - 10
  }),
}