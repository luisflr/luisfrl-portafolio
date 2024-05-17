import Link from '../../../assets/svg/enlace.svg';
import GithubIcon from '../../../assets/icons/socialIcons/GithubIcon';
import AndroidIcon from '../../../assets/icons/CommonIcons/AndroidIcon';
import IosIcon from '../../../assets/icons/CommonIcons/IosIcon';

export const LINK_ICONS = {
    web : <img src={Link} className='h-[18px] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125' alt='link vozy'/>,
    github: <GithubIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>,
    android: <AndroidIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>,
    ios: <IosIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>
  }