const About = () => {
  return (
    <section id='about' className='relative h-screen grid sm:grid-cols-3 items-center max-w-[1200px] mx-auto'>
      <img className='max-w-[400px] hidden sm:block left-full absolute visible sm:left-0 sm:relative sm:rounded-full z-10 mx-auto sm:pl-6' src="/Picture.jpeg" alt="" />
      <div className='relative font-bold text-5xl sm:text-5xl md:text-7xl text-end sm:col-span-2 bg-[#181823] h-screen flex my-auto items-center'>
        <h1 className="sm:ml-28 mr-6 ml-6 z-20">
          I&apos;m Jesús González.<span className='text-slate-500'> A frontent developer based in Mexico.</span>
        </h1>
      </div >
    </section>
  )
}
export default About