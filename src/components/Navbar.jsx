import { useState } from "react"

const Navbar = () => {
  const [isShownMenu, setIsShownMenu] = useState(false)

  const handleShowMenu = () => {
    setIsShownMenu(!isShownMenu)
  }

  return (
    <header className='w-screen flex px-10 justify-between bg-white/20 backdrop-blur-sm h-14 items-center fixed z-30'>
      <a className="font-bold text-2xl hover:text-[#5221E6] transition-colors" href="#">Jesus.G</a>

      <button onClick={handleShowMenu} className='inline sm:hidden absolute right-10'>
        <img src="/MenuIcon.svg" alt="" />
      </button>
      <nav className='flex text-white/60 h-full sm:visible invisible font-semibold'>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all flex items-center' href="#about">About</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all flex items-center' href="#skillset">Skillset</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all flex items-center' href="#projects">Projects</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all flex items-center' href="#contact">Contact</a>
      </nav>
    </header>
  )
}
export default Navbar