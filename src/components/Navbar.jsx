import { useState } from "react"

const Navbar = () => {
  const [isShownMenu, setIsShownMenu] = useState(false)

  const handleShowMenu = () => {
    setIsShownMenu(!isShownMenu)
  }

  return (
    <header className='w-screen flex px-10 justify-between bg-white/20 backdrop-blur-sm h-14 items-center fixed z-10'>
      <a href="#">Jesus.G</a>

      <button onClick={handleShowMenu} className='inline sm:hidden absolute right-10'>
        <img src="/MenuIcon.svg" alt="" />
      </button>
      <nav className='flex text-white/60 h-full sm:visible invisible'>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all' href="#about">About</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all' href="#skillset">Skillset</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all' href="#projects">Projects</a>
        <a className='hover:bg-[#5221E6] hover:text-white px-3 transition-all' href="#contact">Contact</a>
      </nav>
    </header>
  )
}
export default Navbar