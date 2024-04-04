
import LeftInfo from "./LeftInfo";
import RightInfo from "./RightInfo";

function AboutMe() {
  return (
    <section className='w-full pt-32 md:pt-0 h-[800px] md:h-screen mt-10 lg:mt-0 mb-56 xl:my-10 xl:h-screen flex items-center justify-center' id='about-me'>
      <div className='h-full w-full max-w-[1124px] px-5 sm:px-20 md:w-full lg:px-0 lg:w-10/12 flex flex-col xl:flex-row justify-center items-center'>
        {/* Left side */}
        <LeftInfo />

        {/* Right side */}
        <RightInfo />
      </div>
    </section>
  )
}

export default AboutMe;