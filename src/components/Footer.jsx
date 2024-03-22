import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const [t] = useTranslation("global")


  return (
    <section className="bg-[#181823] py-10 px-10 sm:px-20">
      <div className="grid sm:grid-cols-2 max-w-[1200px] mx-auto gap-6 mb-8">
        <div className="font-bold text-2xl flex flex-col gap-3">
          <h3>Jesús.G</h3>
          <div className="flex gap-2">
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="mailto:fjesus1209@gmail.com" target="_blank" rel="noreferrer">
              <IconMail />
            </a>
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="https://api.whatsapp.com/send/?phone=4181046752&text=Hola+Fernando%2C+vi+tu+portafolio+y+me+gustar%C3%ADa+contactar+contigo.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
              <IconBrandWhatsapp />
            </a>
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="https://github.com/fjesus912" target="_blank" rel="noreferrer">
              <IconBrandGithub />
            </a>
            <a className="bg-[#5221E6] hover:bg-white hover:text-[#5221E6] transition-colors rounded-full p-1" href="https://www.linkedin.com/in/fernando-de-jes%C3%BAs-gonz%C3%A1lez-aguilar-0b8b94246/" target="_blank" rel="noreferrer">
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
        <nav className='flex-col gap-4 text-white/60 h-full hidden sm:flex'>
          <a className="hover:text-indigo-500 transition-colors" href="#about">
            {t("footer.about")}
          </a>
          <a className="hover:text-indigo-500 transition-colors" href="#skillset">
            {t("footer.skillset")}
          </a>
          <a className="hover:text-indigo-500 transition-colors" href="#projects">
            {t("footer.projects")}
          </a>
        </nav>
      </div>
    </section>
  )
}
export default Footer