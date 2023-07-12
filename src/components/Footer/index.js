import React from 'react'

import LinkedIn from '../../assets/icons/socialIcons/LinkedIn.js';
import GithubIcon from '../../assets/icons/socialIcons/GithubIcon.js';
import MailIcon from '../../assets/icons/socialIcons/MailIcon.js';

import './footer.css'

const Footer = () => {
  const contact = (link, target) => {
    window.open(link)
  }
  return (
    <footer className='w-screen bg-transparent h-20 justify-center items-center flex fixed bottom-0 z-40'>
      <ul className='flex relative gap-[25px]'>
        <li className='btn-social linkedin'>
            <a
              href='https://www.linkedin.com/in/luis-flores-rodriguez/'
              target='_blank'
              className='icon-container' rel="noreferrer"
            >
              <LinkedIn wrapperClassName='icon'/>
            </a>
            <a
              href='https://www.linkedin.com/in/luis-flores-rodriguez/'
              target='_blank' rel="noreferrer"
              className='icon-description'
            >
              LinkedIn
            </a>
        </li>
        <li className='btn-social github'>
            <a
              href='https://github.com/luisflr?tab=repositories'
              target='_blank'
              className='icon-container' rel="noreferrer"
            >
              <GithubIcon wrapperClassName='icon' />
            </a>
            <a
              href='https://github.com/luisflr?tab=repositories'
              target='_blank' rel="noreferrer"
              className='icon-description'
            >
              Github
            </a>
        </li>
        <li className='btn-social mail' onClick={() => contact("mailto:luisflr1997@gmail.com")}>
            <span className='icon-container'><MailIcon wrapperClassName='icon'/></span>
            <span className='icon-description'>Mail</span>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;
