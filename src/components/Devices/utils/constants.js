import AngularCDKIcon from '../../../assets/icons/AngularCDKIcon';
import AngularIcon from '../../../assets/icons/AngularIcon';
import Auth0Icon from '../../../assets/icons/Auth0Icon';
import BitbucketIcon from '../../../assets/icons/BitbucketIcon';
import DjangoIcon from '../../../assets/icons/DjangoIcon';
import FirebaseIcon from '../../../assets/icons/FirebaseIcon';
import GitlabIcon from '../../../assets/icons/GitlabIcon';
import IonicIcon from '../../../assets/icons/IonicIcon';
import ReactFlowIcon from '../../../assets/icons/ReactFlowIcon';
import ReactIcon from '../../../assets/icons/ReactIcon';
import GithubIcon from '../../../assets/icons/socialIcons/GithubIcon';

export const ICONS_PROJECTS = {
    angular: {
      icon:  <AngularIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Angular Framework'
    },
    firebase: {
      icon: <FirebaseIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Firebase'
    },
    github: {
      icon: <GithubIcon wrapperClassName='text-default-text h-[19px] w-[19px]'/>,
      description: 'Git / Github'
    },
    angular_CDK: {
      icon: <AngularCDKIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Angular CDK'
    },
    gitlab: {
      icon: <GitlabIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Git / Gitlab'
    },
    ionic: {
      icon: <IonicIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Ionic Framework'
    },
    django: {
      icon: <DjangoIcon wrapperClassName='fill-default-text h-[37px] w-[37px]'/>,
      description: 'Django Framework'
    },
    reactjs: {
      icon: <ReactIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'ReactJs'
    },
    auth0: {
      icon: <Auth0Icon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Auth0'
    },
    react_flow: {
      icon: <ReactFlowIcon wrapperClassName='h-[19px] w-[19px]'/>,
      description: 'React-Flow'
    },
    bitbucket: {
      icon: <BitbucketIcon wrapperClassName='fill-default-text h-[19px] w-[19px]'/>,
      description: 'Git / Bitbucket'
    }
}