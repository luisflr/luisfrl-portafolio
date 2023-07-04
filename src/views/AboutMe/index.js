import Perfil from '../../assets/images/perfil-foto.png';

function AboutMe() {
  return (
    <div className='w-full h-screen my-36 xl:my-0 xl:h-screen flex items-center justify-center relative'>
      <div className='h-full sm:w-[540px] md:w-[540px] lg:w-9/12 xl:8/12 flex flex-col xl:flex-row justify-center items-center '>
        <div className='flex justify-center items-center w-full xl:w-5/12 mb-10 lg:mb-0'>
          <img
            src={Perfil}
            alt='developer'
            className='object-cover transition transform h-[200px] w-[200px] lg:w-[240px] lg:h-[240px] lg:rounded-full xl:h-[260px] xl:w-[330px] 2xl:w-auto 2xl:h-[300px] pr-2 bg-gradient-to-r from-cyan to-sky rounded-full xl:rounded-3xl opacity-50 hover:opacity-90  hover:-translate-y-3 xl:hover:translate-y-0 xl:active:-translate-y-3 cursor-pointer'
          />
        </div>
        <div className='flex flex-col w-full xl:w-7/12 h-full justify-center pr-0 2xl:pr-10'>
          <p className='text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-pink font-bold font-josefin mb-4'>About Me</p>        
          <p className='text-[#A3B3BC] text-lg  font-belanosima'>
            I am a dedicated, committed person who enjoys working in a team, so it is easy for me to maintain good communication. Likewise, I like 
            to keep my environment tidy, whether it is the physical or virtual work space, this allows me to maintain control of my work and helps to adapt in any situation.
          </p>
          <p className='text-[#A3B3BC] text-lg font-belanosima'>
            My interest in programming began in my last years of study at the &nbsp;
            <a
              href='https://bk.sjbdelasalle.edu.pe/sjb/index.html'
              target='_blank'
              rel='noreferrer'
              className='text-purple hover:underline cursor-pointer'
              >San Juan Bautista de La Salle</a>
              &nbsp; school where my first tool was Sratch. This led me to study Software Engineering at&nbsp;
            <a
              href='https://www.ulasalle.edu.pe/'
              target='_blank'
              rel='noreferrer'
              className='text-purple hover:underline cursor-pointer'
              >La Salle University</a>, 
            where I successfully completed my studies.
            <br />
            I also like to be constantly learning, which is why I managed to complete some courses on Platzi and Udemy, 
            to deepen my knowledge of the tools I use every day.
          </p>
          <div className='flex w-full mt-2'>
            <div className='text-[#A3B3BC] mr-5 font-belanosima'>
              <p className='text-xl text-[#97C93E] font-prompt'>Platzi</p>
              <ul>
                <li className='flex items-center before:content-["▹"] before:absolute before:text-purple before:-ml-1'>
                  <a
                    href='https://platzi.com/p/lflores8455/curso/2597-react-estado/diploma/detalle/'
                    target='_blank'
                    rel='noreferrer'
                    className='transition transform hover:text-[#97C93E] pl-4 relative'
                  >
                    Curso Manejo profesional del estado / React
                  </a>
                </li>
                <li className='flex items-center before:content-["▹"] before:absolute before:text-purple before:-ml-1'>
                  <a
                    href='https://platzi.com/p/lflores8455/curso/6241-react-ssr/diploma/detalle/'
                    target='_blank'
                    rel='noreferrer'
                    className='transition transform hover:text-[#97C93E] pl-4 relative'
                  >
                    Curso server side render SSR / React
                  </a>
                </li>
                <li className='flex items-center before:content-["▹"] before:absolute before:text-purple before:-ml-1'>
                  <a
                    href='https://platzi.com/p/lflores8455/curso/2478-angular/diploma/detalle/'
                    target='_blank'
                    rel='noreferrer'
                    className='transition transform hover:text-[#97C93E] pl-4 relative'
                  >
                      Curso de Fundamentos de Angular
                  </a>
                </li>
                <li className='flex items-center before:content-["▹"] before:absolute before:text-purple before:-ml-1'>
                  <a
                    href='https://platzi.com/p/lflores8455/curso/4459-angular-tailwind/diploma/detalle/'
                    target='_blank'
                    rel='noreferrer'
                    className='transition transform hover:text-[#97C93E] pl-4 relative'
                  >
                    Curso de Maquetación con Angular CDK y Tailwind
                  </a>
                </li>
              </ul>
            </div>
            <div className='text-[#A3B3BC] font-belanosima'>
              <p className='text-xl text-[#A435F0] font-prompt'>Udemy</p>
              <ul>
                <li className='flex items-center before:content-["▹"] before:absolute before:text-purple before:-ml-1'>
                <a 
                  href='https://www.linkedin.com/in/luis-flores-rodriguez/overlay/1635528741751/single-media-viewer/?profileId=ACoAADcq26IBBXfjsMQumIEg3ctLuLbuP9XpUoE'
                  target='_blank'
                  rel='noreferrer'
                  className='pl-4 relative hover:text-[#A435F0]'
                >
                  Curso Seguridad Informática
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className='hidden xl:block absolute border-b border-[#00dfba1a] w-10/12 bottom-0'/>
    </div>
  )
}

export default AboutMe;