import React from 'react'

import { LINK_ICONS as linksIcons} from './utils/contants';

function Links({ linksProject, reverse }) {
  
  return (
    <>
      <ul className={`${reverse ? 'order-1 mr-3' : 'ml-5'} mt-1 flex space-x-5`}>
        {Object.entries(linksProject).map(([key, value], idx) => (
          <li key={`icon-${idx}`}>
            <a
                href={value}
                target='_blank' rel='noreferrer'
            >
                {linksIcons[key]}
            </a>
          </li>
        ))}   
      </ul>
    </>
  )
}

export default Links