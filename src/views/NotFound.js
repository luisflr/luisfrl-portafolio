import React from 'react';
import { NavLink } from 'react-router-dom';

import NotFoundIcon from '../assets/svg/NotFoundIcon';
import HomeIcon from '../assets/icons/PagesTimeLineIcons/HomeIcon';

function NotFound() {
  return (
    <div className='text-white w-screen h-screen flex flex-col justify-center items-center'>
      <h1 className='text-8xl font-bold text-transparent w-fit bg-clip-text bg-gradient-to-r from-purple to-pink -mb-7'>Oops.. 404</h1>
      <NotFoundIcon wrapperClassName='w-80 h-80 md:w-[450px] xl:w-[500px] md:h-[450px] xl:h-[500px]' />
      <h2 className='text-2xl xl:text-3xl text-default-text -mt-10 mb-4'>I think you're lost</h2>
      <div className='flex items-center'>
        <h2 className='text-xl xl:text-2xl text-default-text mr-3'>Let me help you back {'->'} </h2>
        <NavLink to='/'>
          <HomeIcon 
            wrapperClassName='fill-default-text w-5 h-5 
            transition ease-linear
            hover:scale-150 hover:fill-purple'
          />
        </NavLink>
      </div>
    </div>
  )
}

export default NotFound