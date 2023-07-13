import React from 'react'

function UserIcon({ wrapperClassName }) {
  return (
    <>
      <svg version='1.0' xmlns='http://www.w3.org/2000/svg'
        className={`${wrapperClassName}`}
        viewBox='0 0 512.000000 512.000000'
        preserveAspectRatio='xMidYMid meet'
      >

        <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
          stroke='none'>
          <path d='M2405 5114 c-272 -30 -441 -100 -586 -244 -193 -191 -269 -426 -285
            -880 -12 -313 31 -540 144 -765 246 -494 727 -718 1183 -552 328 119 596 450
            689 852 34 148 43 268 36 463 -16 456 -92 691 -285 882 -123 122 -261 190
            -458 226 -86 15 -359 26 -438 18z'/>
          <path d='M1845 2490 c-482 -104 -733 -215 -914 -405 -124 -130 -200 -289 -247
            -515 -35 -171 -52 -351 -65 -682 -12 -343 -18 -318 89 -420 271 -259 802 -418
            1522 -458 992 -54 1829 121 2182 458 106 101 101 76 89 415 -11 287 -22 436
            -42 567 -98 631 -384 877 -1212 1046 l-120 24 -39 -36 c-129 -116 -306 -175
            -528 -175 -135 0 -219 15 -333 57 -73 28 -167 86 -206 128 -29 31 -14 31 -176
            -4z'
          />
        </g>
      </svg>
    </>
  )
}

export default UserIcon;
