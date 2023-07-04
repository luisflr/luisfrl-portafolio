import PerfilCartoon from '../../assets/images/Perfil-cartoon.png';

import './home.css'

function Home() {
  const textClasses = 'text-transparent bg-clip-text bg-gradient-to-r from-cyan to-sky text-[100px] font-extrabold leading-none font-josefin';
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='sm:w-[540px] md:w-[540px] lg:w-9/12 xl:grid xl:grid-cols-2'>
        <div className='flex items-center '>
          <div className='flex flex-col ml-2 justify-end'>
            <p className='text-[#A3B3BC] text-[18px] 2xl:mt-2 ml-1 mb-0 font-comic'>Hello, my name is</p>
            <p className={textClasses}>
              Luis
            </p>
            <p className={textClasses}>Flores</p>
            <h2 className={`${textClasses} pb-3`}>Rodríguez</h2>
            <p className='text-blue text-xl mb-3 font-semibold font-josefin'>I'm a web developer</p>
            <p className='text-[#A3B3BC] text-lg font-comic'>
              Hi there! I am a software programmer with experience in creating, developing, and maintaining high-quality web applications.
            </p>
          </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
          <div className='back-image absolute bg-white rounded-full h-[320px] w-[320px] 2xl:h-[370px] 2xl:w-[370px]'>
          </div>
            <img src={PerfilCartoon} alt='developer' className='absolute h-[400px] 2xl:h-[500px] '/>
        </div>
      </div>
      <hr className='hidden xl:block absolute border-b border-[#00dfba1a] w-10/12 bottom-0'/>
    </div>
  )
}

export default Home