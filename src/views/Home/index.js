import IntroductionHome from "./IntroductionHome";
import ImageHome from "./ImageHome";

function Home() {
  
  return (
    <section className='w-full h-screen flex items-center justify-center mb-2' id='home'>
      <div className='w-full px-5 sm:px-20 md:w-full max-w-[1024px] lg:px-0 lg:w-8/12 xl:grid xl:grid-cols-2'>
        {/* Left side */}
        <IntroductionHome />

        {/* Right side */}
        <ImageHome />
      </div>
    </section>
  )
}

export default Home