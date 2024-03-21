const PopUpMenu = () => {

  return (
      // <nav className='flex text-white/60 h-full sm:visible invisible font-semibold'>
      <nav className={`fixed z-30 py-2 bottom-4 left-1/2 -translate-x-1/2 bg-slate-800/25 backdrop-blur-lg flex rounded-full justify-start font-semibold border sm:-right-full sm:hidden transition-all`}>
        <a className='hover:text-[#5221E6] hover:font-extrabold px-3 transition-all flex items-center' href="#about">About</a>
        <a className='hover:text-[#5221E6] hover:font-extrabold px-3 transition-all flex items-center' href="#skillset">Skillset</a>
        <a className='hover:text-[#5221E6] hover:font-extrabold px-3 transition-all flex items-center' href="#projects">Projects</a>
        <a className='hover:text-[#5221E6] hover:font-extrabold px-3 transition-all flex items-center' href="#contact">Contact</a>
      </nav>
  )
}
export default PopUpMenu