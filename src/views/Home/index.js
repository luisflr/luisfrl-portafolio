import PerfilCartoon from '../../assets/images/Perfil-cartoon.png';

function Home() {
  const textClasses = 'text-transparent w-fit bg-clip-text bg-gradient-to-r from-sky to-cyan text-5xl sm:text-7xl font-extrabold leading-none font-sans truncate';
  
  return (
    <section className='w-full h-screen flex items-center justify-center' >
      <div className='w-full px-5 sm:px-20 md:w-full max-w-[1024px] lg:px-0 lg:w-8/12 xl:grid xl:grid-cols-2'>
        <div className='flex justify-center items-center '>
          <div className='flex flex-col w-full ml-2'>
            <div className='flex flex-col truncate'>
              <p className='text-[#a3b3bcc5] w-fit text-md mb-2 ml-1 font-open-sans font-bold tracking-wide'>Hello, my name is</p>
              <h2 className={textClasses}>
                Luis
              </h2>
              <h2 className={textClasses}>Flores</h2>
              <h2 className={`${textClasses} pb-3`}>Rodríguez</h2>
              <p className='text-[#a3b3bcc5] text-lg mb-3 font-sans'>I'm a web developer</p>
            
            </div>
            <p className='text-[#a3b3bcc5] font-open-sans font-bold tracking-wide mb-4'>
              Hello everyone! I'm software developer and have experience creating, developing, and maintaining high-quality web applications.
            </p>
            <a 
              href='https://luisfr.netlify.app/'
              target='_blank' rel='noreferrer'
              className='float-right transition transform w-fit bg-gradient-to-r from-cyan to-sky h-fit rounded-lg p-[1px] hover:shadow-[0_0_15px_cyan]'>
              <p className='
                bg-transparent rounded-lg font-open-sans font-bold text-background px-4 py-2
                transition transform tracking-wide
                hover:bg-background hover:text-default-text'>
                Earlier Version
              </p>
            </a>
            </div>
        </div>
        <div className='hidden xl:flex justify-center items-center'>
          <div className=' absolute rounded-full h-[320px] w-[320px] 2xl:h-[370px] 2xl:w-[370px]'>
          </div>
            <img
              src={PerfilCartoon}
              alt='developer'
              className='
                absolute h-[400px] 2xl:h-[500px]
                drop-shadow-[0_0_3px_cyan]
              '/>
        </div>
      </div>
    </section>
  )
}

export default Home