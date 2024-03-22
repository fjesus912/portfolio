import { IconPuzzle } from "@tabler/icons-react"
import { useTranslation } from "react-i18next"

const Skillset = () => {
  const [t] = useTranslation("global")

  return (
    <section className="px-8 sm:px-16 flex items-center max-w-[1200px] mx-auto mt-12 sm:mt-24" id="skillset">
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-3xl md:text-5xl dark:text-white text-[#373A3C]">
            {t("skillset.skillset")}
          </h2>
          <p className="dark:text-[#8491A0] text-[#373A3C]">
            {t("skillset.description")}
          </p>
        </div>
        <div className="flex items-start gap-6 justify-center">
          <div className="grid gap-10 justify-center">
            <div className="grid gap-4">
              <IconPuzzle size={50} className="text-indigo-500" />
              <h3 className="font-bold text-xl md:text-2xl dark:text-white text-[#373A3C]">
                {t("skillset.languages")}
              </h3>
              <ul className="dark:text-[#8491A0] text-[#373A3C]">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="grid gap-4">
              <IconPuzzle size={50} className="text-indigo-500" />
              <h3 className="font-bold text-xl md:text-2xl dark:text-white text-[#373A3C]">
                {t("skillset.version-control")}
              </h3>
              <ul className="dark:text-[#8491A0] text-[#373A3C]">
                <li>Git/Github</li>
              </ul>
            </div>
          </div>
          <div className="grid gap-10 justify-center"><div className="grid gap-4">
              <IconPuzzle size={50} className="text-indigo-500" />
              <h3 className="font-bold text-xl md:text-2xl dark:text-white text-[#373A3C]">
                {t("skillset.technologies")}
              </h3>
              <ul className="dark:text-[#8491A0] text-[#373A3C]">
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className="grid gap-4">
              <IconPuzzle size={50} className="text-indigo-500" />
              <h3 className="font-bold text-xl md:text-2xl dark:text-white text-[#373A3C]">
                UX/UI
              </h3>
              <ul className="dark:text-[#8491A0] text-[#373A3C]">
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skillset