import React from "react";

import incabeneficios from '../../assets/images/incabeneficios.png';
import vozy from '../../assets/images/vozy-logo.png';
import captiq from '../../assets/images/captiq-logo.png';
import kuna from '../../assets/images/kuna-logo.png';
import routex from '../../assets/images/routex.png';

export default function Experience() {
  return (
    <div className="xl:flex w-full h-screen flex-col items-center justify-center">
      <div className="w-[1000px] flex flex-col text-center justify-center sm:-mb-12 md:-mb-12 xl:mb-12 2xl:mb-12">
        <p className="text-white text-4xl font-bold mb-10">
          Experience
        </p>
        <div className='grid grid-cols-3 gap-4 bg-background1 w-full h-[515px]'>
          <div className='flex h-[240px] rounded-lg justify-center bg-background1 opacity-50 transition transform hover:scale-110 hover:translate-y-4 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <img className='object-contain' src={vozy} alt='vozy'/>
          </div>
          <div className='flex h-[240px] rounded-lg bg-background1 px-3 opacity-50 transition transform hover:scale-110 hover:translate-y-4 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <p className='flex items-center text-5xl text-white font-bold'>Wintell</p><p className='flex items-center text-5xl text-[#47A6BE] font-bold'>Invest</p>
          </div>
          <div className='flex justify-center px-3 bg-background1 h-[240px] opacity-50 transition transform hover:scale-110 hover:translate-y-4 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <img className='object-contain' src={kuna} alt='kuna'/>
          </div>
          <div className='flex h-[240px] rounded-lg justify-center bg-background1 opacity-50 transition transform hover:scale-110 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <img className='w-full rounded-lg' src={incabeneficios} alt='incabeneficios'/>
          </div>
          <div className='flex h-[240px] rounded-lg bg-[#c0ebf7] px-3 justify-center opacity-50 transition transform hover:scale-110 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <img className='object-contain' src={captiq} alt='captiq'/>
          </div>
          <div className='flex h-[240px] rounded-lg bg-white justify-center opacity-50 transition transform hover:scale-110 hover:z-10 hover:cursor-pointer hover:opacity-100 hover:shadow-default'>
            <img className='object-contain w-full' src={routex} alt='routex'/>
          </div>
        </div>
      </div>
    </div>
  );
}
