import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"

const Footer = () => {
  return (
    <section className="bg-[#181823] py-10 px-20">
      <div className="grid grid-cols-2 max-w-[1200px] mx-auto">
        <div className="font-bold text-2xl flex flex-col gap-3">
          <h3>Jesús.G</h3>
          <div className="flex gap-2">
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="https://github.com/fjesus912" target="_blank" rel="noreferrer">
              <IconBrandGithub />
            </a>
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="https://www.linkedin.com/in/fernando-de-jes%C3%BAs-gonz%C3%A1lez-aguilar-0b8b94246/" target="_blank" rel="noreferrer">
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
        <nav className='flex flex-col gap-4 text-white/60 h-full sm:visible invisible'>
          <a className="hover:text-white transition-colors" href="#about">About</a>
          <a className="hover:text-white transition-colors" href="#skillset">Skillset</a>
          <a className="hover:text-white transition-colors" href="#projects">Projects</a>
        </nav>
      </div>
    </section>
  )
}
export default Footer