import { motion } from "framer-motion";

import Perfil from '../../assets/images/perfil-foto.png';

function AboutMe() {

  return (
    <section className='w-full pt-32 md:pt-0 h-[800px] md:h-screen mt-10 lg:mt-0 mb-56 xl:my-10 xl:h-screen flex items-center justify-center' id='about-me'>
      <div className='h-full w-full max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col xl:flex-row justify-center items-center'>
        <div className='flex justify-center items-center w-full xl:w-5/12 mb-4 sm:mb-12 lg:mb-10 xl:mb-0'>
          <div className='
            w-fit h-fit 
            rounded-full p-[2px]
            xl:rounded-2xl '>
            <motion.img
              src={Perfil}
              alt='developer'
              className={`
                object-cover  
                h-[200px] w-[200px] duration-300
                rounded-full
                hover:drop-shadow-[0_0_5px_cyan]
                lg:w-[240px] lg:h-[240px]
                xl:w-[300px] xl:h-[260px]
                2xl:h-[300px]
              `}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        <div className='flex flex-col w-full xl:w-8/12 h-full justify-start sm:justify-center'>
          <motion.p
            className='text-3xl overflow-hidden text-default-text font-bold font-sans mb-6 pr-2 whitespace-nowrap'
            initial={{ width: '0' }}
            whileInView={{ 
              width: 'fit-content',
              transition: {
                delay: 0.1,
                duration: 0.8
              }
            }}
            viewport={{ once: true }}
          >
          · About me
          </motion.p>
          <div className='w-fit h-fit bg-gradient-to-r from-sky to-cyan pl-[1px] pt-[1px]'>
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
                      transition transform duration-300 font-semibold
                      hover:underline hover:decoration-blue hover:decoration-1 hover:underline-offset-2
                      cursor-pointer`}
                    >San Juan Bautista de La Salle</a>
                    &nbsp; school where my first tool was Sratch. This led me to study Software Engineering at&nbsp;
                  <a
                    href='https://www.ulasalle.edu.pe/'
                    target='_blank'
                    rel='noreferrer'
                    className={`
                      text-transparent bg-clip-text bg-gradient-to-r from-sky to-cyan
                      transition transform duration-300 font-semibold
                      hover:underline hover:decoration-blue hover:decoration-1 hover:underline-offset-2
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
                      <li className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                        <a
                          href='https://platzi.com/p/lflores8455/curso/2597-react-estado/diploma/detalle/'
                          target='_blank'
                          rel='noreferrer'
                          className='transition transform hover:text-[#97C93E] pl-4 '
                        >
                          Curso Manejo profesional del estado / React
                        </a>
                      </li>
                      <li className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                        <a
                          href='https://platzi.com/p/lflores8455/curso/6241-react-ssr/diploma/detalle/'
                          target='_blank'
                          rel='noreferrer'
                          className='transition transform hover:text-[#97C93E] pl-4'
                        >
                          Curso server side render SSR / React
                        </a>
                      </li>
                      <li className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                        <a
                          href='https://platzi.com/p/lflores8455/curso/2478-angular/diploma/detalle/'
                          target='_blank'
                          rel='noreferrer'
                          className='transition transform hover:text-[#97C93E] pl-4'
                        >
                            Curso de Fundamentos de Angular
                        </a>
                      </li>
                      <li className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                        <a
                          href='https://platzi.com/p/lflores8455/curso/4459-angular-tailwind/diploma/detalle/'
                          target='_blank'
                          rel='noreferrer'
                          className='transition transform hover:text-[#97C93E] pl-4'
                        >
                          Curso de Maquetación con Angular CDK y Tailwind
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='text-default-text font-sans'>
                    <p className='text-xl tracking-wide'>Udemy</p>
                    <ul>
                      <li className='flex items-center before:content-["▹"]  before:text-blue before:-ml-1 before:-mr-2'>
                      <a 
                        href='https://www.linkedin.com/in/luis-flores-rodriguez/overlay/1635528741751/single-media-viewer/?profileId=ACoAADcq26IBBXfjsMQumIEg3ctLuLbuP9XpUoE'
                        target='_blank'
                        rel='noreferrer'
                        className='pl-4 hover:text-[#A435F0]'
                      >
                        Curso Seguridad Informática
                      </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;