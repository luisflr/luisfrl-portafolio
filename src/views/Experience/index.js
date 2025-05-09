import React from "react";
import { motion } from "framer-motion";

import useExperience from "./hooks/useExperience";
import HeaderOfList from "./HeaderOfList";
import ContentOfList from "./ContentOfList";
import Title from "../../components/Title/Title";

export default function Experience() {
  const { activeWork, setActiveWork, currentWorkData, works } = useExperience();

  return (
    <section className='xl:flex w-full h-[700px] pt-32 lg:pt-0 sm:h-[700px] lg:h-screen flex-col items-center justify-center' id='experience' >
      <div className='w-full px-5 sm:px-20 lg:px-0 flex text-center justify-center items-center sm:-mb-12 md:-mb-12 xl:mb-12 2xl:mb-12'>
        <div className='flex flex-col w-full lg:w-[750px] items-center'>  
        | <Title textTitle='Experience'/>
        {works && setActiveWork && currentWorkData && 
          <>
            <motion.div 
              className='w-full overflow-x-auto overflow-hidden'
              initial= {{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <HeaderOfList works={works} activeWork={activeWork} setActiveWork={setActiveWork}/>
            </motion.div>
            <motion.div
              className='flex flex-col pl-0 pt-3 mt-5 h-[320px] overflow-y-auto border-l border-[#A3B3BC]'
              initial= {{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{ once: true }}
            >
              {works &&
                <ContentOfList currentWorkData={currentWorkData}/>
              }
              
            </motion.div>
          </>
        }
        </div>
      </div>
    </section>
  );
}
