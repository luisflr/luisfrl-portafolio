import React from 'react'

function Mobile({ mobileImage, id }) {
  return (
    <div className='
      relative mx-auto border-[#303233] bg-[#303233] border-[14px] rounded-[2.5rem] h-[400px] w-[200px]
      hover:hover:drop-shadow-[0_0_15px_rgba(0,0,0,1)] hover:absolute'
      id={`device-${id}`}>
      <div className='h-[32px] w-[3px] bg-[#303233] absolute -left-[17px] top-[72px] rounded-l-lg'></div>
      <div className='h-[46px] w-[3px] bg-[#303233] absolute -left-[17px] top-[124px] rounded-l-lg'></div>
      <div className='h-[46px] w-[3px] bg-[#303233] absolute -left-[17px] top-[178px] rounded-l-lg'></div>
      <div className='h-[64px] w-[3px] bg-[#303233] absolute -right-[17px] top-[142px] rounded-r-lg'></div>
      <div className='rounded-[2rem] overflow-hidden w-full h-full bg-white'>
        <img src={mobileImage} alt='mobile' className='object-cover w-full h-full transition ease-linear hover:scale-125 hover:absolute rounded-2xl'/>
      </div>
    </div>
  )
}

export default Mobile