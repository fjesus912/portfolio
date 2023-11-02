const About = () => {
  return (
    <section id='about' className='relative h-screen grid grid-cols-3 items-center max-w-[1200px] mx-auto'>
      <img className='max-w-[400px] rounded-full z-10 mx-auto pl-6' src="/Picture.jpeg" alt="" />
      <div className='relative font-bold sm:text-5xl md:text-7xl text-end col-span-2 bg-[#181823] h-screen flex my-auto items-center'>
        <h1 className="ml-28 mr-10 z-20">
          I&apos;m Jesús González.<span className='text-slate-500'> A frontent developer based in Mexico.</span>
        </h1>
      </div >
    </section>
  )
}
export default About