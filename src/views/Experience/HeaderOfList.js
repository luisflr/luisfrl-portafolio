import React from 'react'

import DeveloperIcon from "../../assets/icons/CommonIcons/DeveloperIcon";

const HeaderOfList = ({ works, activeWork, setActiveWork }) => {
  return (
    <ol className="items-center w-[750px] justify-between flex space-x-8 space-y-0 mt-3 mb-5">
      {works
        ? works.map((work, i) => {
        return (
          <li
            key={`works-${i}`}
            className="flex items-center space-x-3 cursor-pointer transition active:scale-90"
            onClick={() => setActiveWork(work.number_of_work)}
          >
            <span
              className={`border ${activeWork === work.number_of_work ? 'border-sky' : 'border-[#A3B3BC]' } transition transform flex items-center justify-center w-8 h-8 rounded-full shrink-0`}
            >
              <DeveloperIcon fill={`${activeWork === work.number_of_work ? '#007CF0' : '#A3B3BC'}`}/>
            </span>
            <span >
              <h3
                className={`${activeWork === work.number_of_work ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan' : 'text-[#A3B3BC]'} transition transform font-medium leading-tight text-center w-full`}
              >
                {work.name}
              </h3>
              <p
                className={`${activeWork === work.number_of_work ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue to-cyan' : 'text-[#A3B3BC]'} transition transform w-fit font-medium leading-tight text-sm`}
              >
                {work.period}
              </p>
            </span>
          </li>
      )})
      : <h1>Cargando...</h1>    
    }
    </ol>
  )
}

export default HeaderOfList