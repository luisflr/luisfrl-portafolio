import React from 'react';
import { motion } from "framer-motion";

import { PlatziCourses, UdemyCourses } from './utils/constants'

function Description() {
  return (
    <div className='bg-background pl-4 pt-3 transition transform duration-300 flex'>
      <motion.div 
        className='max-h-[430px] overflow-y-auto leading-relaxed'
        initial={{ y: 30, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className='text-default-text font-sans tracking-wide mb-3'>
          I am a dedicated, committed person who enjoys working in a team, so it is easy for me to maintain good communication. Likewise, I like 
          to keep my environment tidy, whether it is the physical or virtual work space, this allows me to maintain control of my work and helps to adapt in any situation.
        </p>
        <p className='text-default-text font-sans tracking-wide mb-3'>
          My interest in programming began in my last years of study at the &nbsp;
          <a
            href='https://bk.sjbdelasalle.edu.pe/sjb/index.html'
            target='_blank'
            rel='noreferrer'
            className={`
              text-transparent bg-clip-text bg-gradient-to-r from-sky to-cyan
              font-semibold inline-block
              after:content-[''] after:block after:h-[1px] after:bg-background
              hover:after:bg-gradient-to-tr hover:after:from-sky
              hover:after:animate-[showAfter_0.5s]
              hover:after:to-cyan
              cursor-pointer`}
            >San Juan Bautista de La Salle</a>
            &nbsp; school where my first tool was Sratch. This led me to study Software Engineering at&nbsp;
          <a
            href='https://www.ulasalle.edu.pe/'
            target='_blank'
            rel='noreferrer'
            className={`
              text-transparent bg-clip-text bg-gradient-to-r from-sky to-cyan
              font-semibold inline-block
              after:content-[''] after:block after:h-[1px] after:bg-background
              hover:after:bg-gradient-to-tr hover:after:from-sky
              hover:after:animate-[showAfter_0.5s]
              hover:after:to-cyan
              cursor-pointer
            `}
            >La Salle University</a>, 
          where I successfully completed my studies.
        </p>
        <p className='text-default-text font-sans tracking-wide mb-2'>
          I also like to be constantly learning, which is why I managed to complete some courses on Platzi and Udemy, 
          to deepen my knowledge of the tools I use every day.
        </p>
        <div className='flex w-full mt-2'>
          <div className='text-default-text mr-5 font-sans'>
            <p className='text-xl tracking-wide'>Platzi</p>
            <ul>
              {PlatziCourses.map((course, index) => 
                <li
                  key={`platzi-course${index}`}
                  className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                  <a
                    href={course.link}
                    target='_blank'
                    rel='noreferrer'
                    className='transition transform hover:text-[#97C93E] pl-4 '
                  >
                    {course.title}
                  </a>
                </li>
                )}
              
            </ul>
          </div>
          <div className='text-default-text font-sans'>
            <p className='text-xl tracking-wide'>Udemy</p>
            <ul>
              {UdemyCourses.map((course, index) => 
                <li
                  key={`udemy-course${index}`}
                  className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                  <a 
                    href={course.link}
                    target='_blank'
                    rel='noreferrer'
                    className='pl-4 hover:text-[#A435F0]'
                  >
                    {course.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Description