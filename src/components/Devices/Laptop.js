import React from 'react'

function Laptop({ laptopImage }) {
  return (
    <div className='h-fit w-[370px] hover:drop-shadow-[0_0_15px_rgba(0,0,0,1)]'> 
      <div className='
        relative mx-auto border-[#515658] bg-[#515658] border-[8px] rounded-t-xl h-[172px] max-w-[301px]
        lg:h-[134px] xl:h-[184px] lg:max-w-[212px] xl:max-w-[312px]'
      >
        <div className='rounded-lg overflow-hidden h-full w-full'>
          <img src={laptopImage} className='object-cover bg-background h-full w-full rounded-lg opacity-80 transition transform hover:scale-125 hover:absolute hover:opacity-100' alt='screen'/>
        </div>
      </div>
      <div className='
        relative mx-auto bg-[#667279] rounded-b-xl rounded-t-sm h-[17px] max-w-[351px]
        
        lg:h-[17px] xl:h-[21px] lg:max-w-[267px] xl:max-w-[367px]'>
        <div className='absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] lg:w-[96px] lg:h-[8px] bg-[#515658]'></div>
      </div>
    </div>
  )
}

export default Laptop