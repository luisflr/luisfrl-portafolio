import React from 'react';
import { Link as LinkScroll } from 'react-scroll/modules';

import { 
  BUTTONS as buttons ,
  TIMELINE_ICONS as icons
} from '../utils/constants';

function PagesTimeline({ activePage }) {
  const styleIcon = 'flex items-center transition transform justify-center w-9 h-9 bg-background ring-background rounded-full border ring-8';

  return (
    <div className='fixed h-screen items-center right-3 z-10 hidden xl:flex rounded-full'> 
      <div className='bg-gradient-to-t from-sky to-cyan p-[1px] rounded-full'>
        <ol className='relative bg-background p-4 rounded-full space-y-8'>
          {buttons.map((button, i) => 
            <li key={i}>
              <LinkScroll
                to={button.id}
                spy={true}
                smooth={true}
                offset={0}
                duration={500} 
                className={`
                  ${styleIcon} ${activePage === button.id ? 'fill-blue scale-125': 'fill-default-text'}
                  cursor-pointer transition ease-linear hover:scale-125 active:scale-95
                `}
              >
                {icons[i]}
              </LinkScroll>
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default PagesTimeline;