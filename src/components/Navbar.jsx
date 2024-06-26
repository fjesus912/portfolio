import {IconMoon, IconSun} from "@tabler/icons-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t] = useTranslation("global")

  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [theme, setTheme] = useState(storedDarkMode)
  
  useEffect(() => {
    localStorage.setItem("DARK_MODE", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <header className='w-screen flex px-10 justify-between dark:bg-white/10 bg-black/10  backdrop-blur-lg h-14 items-center fixed z-30'>
      <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">

        <a className="font-bold text-2xl hover:text-indigo-500 transition-colors flex items-center gap-4 dark:text-white text-[#373A3C]" href="#">
        <img className="w-11 rounded-full border-2 border-indigo-500" src="/Picture.jpeg" alt="" />
          Jesús.G
        </a>

      <nav className='sm:flex dark:text-white text-[#373A3C] h-full sm:visible hidden max-[670px]:text-xs max-[700px]:text-sm font-semibold transition-all'>
        <a className='hover:bg-indigo-500 hover:text-white py-4 px-3 flex items-center' href="#about">{t("navbar.about")}</a>
        <a className='hover:bg-indigo-500 hover:text-white py-4 px-3 flex items-center' href="#skillset">{t("navbar.skillset")}</a>
        <a className='hover:bg-indigo-500 hover:text-white py-4 px-3 flex items-center' href="#projects">{t("navbar.projects")}</a>
        <a className='hover:bg-indigo-500 hover:text-white py-4 px-3 flex items-center' href="#contact">{t("navbar.contact")}</a>
        <button className="px-3 hover:bg-indigo-500 hover:text-white" onClick={handleThemeSwitch}>
        <div>
          {theme === 'dark'
          ?  <IconSun/>
          : <IconMoon/>
          }
        </div>
          
        </button>
      </nav>
      <nav className=' dark:text-white text-[#373A3C] h-full sm:hidden visible font-semibold transition-all'>
        <button className="py-4 px-4 hover:bg-indigo-500 hover:text-white" onClick={handleThemeSwitch}>
          <div>
            {theme === 'dark'
            ?  <IconSun/>
            : <IconMoon/>
            }
          </div>
        </button>
      </nav>
      </div>
    </header>
  )
}
export default Navbar