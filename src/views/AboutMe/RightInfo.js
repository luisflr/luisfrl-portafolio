import React from 'react'

import Description from './Description';
import Title from '../../components/Title/Title';

const RightInfo = () => {
  return (
    <div className='flex flex-col w-full xl:w-8/12 h-full justify-start sm:justify-center'>
      <Title textTitle='About me'/>
      <div className='w-fit h-fit bg-gradient-to-r from-sky to-cyan pl-[1px] pt-[1px]'>
        <Description />
      </div>
    </div>
  )
}

export default RightInfo