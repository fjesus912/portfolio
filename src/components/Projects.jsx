import { IconBrandReact } from "@tabler/icons-react"

const Projects = () => {
  return (
    <section className="h-auto px-16 grid mt-32 sm:mt-0 sm:grid-cols-2 gap-6 items-center justify-center max-w-[1200px] mx-auto" id="projects">
      <div className="grid gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-5xl dark:text-white text-[#373A3C]">Projects</h2>
          <p className="dark:text-white text-[#373A3C]">These are my projects that I have done during the year.</p>
        </div>
        <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
          <div>
            <img className="pt-5 pl-5 pr-5" src="/p1.png" alt="" />
          </div>
          <div className="p-5">
            <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Gift Music</h4>
            <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/gift-music" target="_blank" rel="noreferrer">Code</a>
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-gift-music.netlify.app" target="_blank" rel="noreferrer">View</a>
              </div>
              <div>
                <IconBrandReact />
              </div>
            </div>
          </div>
        </div>

        <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
          <div>
            <img className="pt-5 pl-5 pr-5" src="/p2.png" alt="" />
          </div>
          <div className="p-5">
            <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Pokedex</h4>
            <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/pokedex" target="_blank" rel="noreferrer">Code</a>
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-pokedex.netlify.app" target="_blank" rel="noreferrer">View</a>
              </div>
              <div>
                <IconBrandReact />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
          <div>
            <img className="pt-5 pl-5 pr-5" src="/p3.png" alt="" />
          </div>
          <div className="p-5">
            <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Rick and Morty</h4>
            <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/rick-and-morty" target="_blank" rel="noreferrer">Code</a>
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-rick-and-morty.netlify.app" target="_blank" rel="noreferrer">View</a>
              </div>
              <div>
                <IconBrandReact />
              </div>
            </div>
          </div>

        </div>

        <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
          <div>
            <img className="pt-5 pl-5 pr-5" src="/p4.png" alt="" />
          </div>
          <div className="p-5">
            <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Weather App</h4>
            <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/weather-app" target="_blank" rel="noreferrer">Code</a>
                <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-weather-app.netlify.app" target="_blank" rel="noreferrer">View</a>
              </div>
              <div>
                <IconBrandReact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects