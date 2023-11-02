const About = () => {
  return (
    <section id='about' className='relative h-screen grid grid-cols-3 items-center'>
      <img className='max-w-[650px]' src="/Picture.png" alt="" />
      <div className='relative font-bold text-7xl text-end col-span-2 bg-[#181823] h-screen flex flex-col my-auto'>
        <h1 >
          I&apos;m Jesús González.
        </h1>
        <h2 className='text-[#ffffff80]'>
          A frontent developer based in Mexico.
        </h2>

      </div >
    </section>
  )
}
export default About