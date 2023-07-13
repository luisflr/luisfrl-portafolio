import Link from '../../../assets/svg/enlace.svg';
import GithubIcon from '../../../assets/icons/socialIcons/GithubIcon';
import AndroidIcon from '../../../assets/icons/AndroidIcon';
import IosIcon from '../../../assets/icons/IosIcon';

export const LINK_ICONS = {
    web : <img src={Link} className='h-[18px] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125' alt='link vozy'/>,
    github: <GithubIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>,
    androidLink: <AndroidIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>,
    iosLink: <IosIcon wrapperClassName='text-[#A3B3BC] transition hover:drop-shadow-[0_0_3px_blue] hover:scale-125 h-[19px] w-[19px]'/>
  }