import DjangoIcon from '../../../assets/icons/DjangoIcon';
import GitIcon from '../../../assets/icons/GitIcon';
import HtmlIcon from '../../../assets/icons/HtmlIcon';
import JavascriptIcon from '../../../assets/icons/JavascriptIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';
import TypescriptIcon from '../../../assets/icons/TypescriptIcon';

export const skills = [
  <HtmlIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <JavascriptIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <TypescriptIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <ReactIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>,
  <DjangoIcon wrapperClassName='fill-default-text h-[37px] w-[37px]' />,
  <GitIcon wrapperClassName='fill-default-text h-[22px] w-[22px]'/>
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