import { IconBrandNodejs, IconBrandReact } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import '../App.css'
import { useTranslation } from "react-i18next";


const Projects = () => {
  const [t] = useTranslation("global")

  return (
    <section className="px-8 sm:px-16 mt-12 sm:mt-24 max-w-[1200px] mx-auto" id="projects">
      <div className="mb-5">
        <h2 className="font-bold text-3xl md:text-5xl dark:text-white text-[#373A3C] mb-3">
          {t("projects.projects")}
        </h2>
        <p className="dark:text-[#8491A0] text-[#373A3C]">
          {t("projects.description")}
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            620: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div className="flex justify-end pt-2 pr-5 gap-1">
                <IconBrandReact className="text-[#8491A0]" />
              </div>
              <div>
                <img className="pt-2 pl-5 pr-5" src="/p2.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Pokedex</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">
                  {t("projects.pokedex-description")}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:github.com/fjesus912/pokedex" target="_blank" rel="noreferrer">
                      {t("projects.btn-code")}
                    </a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:fj-pokedex.netlify.app" target="_blank" rel="noreferrer">
                      {t("projects.btn-use-it")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div className="flex justify-end pt-2 pr-5" >
                <IconBrandNodejs className="text-[#8491A0]" />
              </div>
              <div>
                <img className="pt-2 pl-5 pr-5" src="/p5.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Users App</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">
                  {t("projects.users-app-description")}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https://github.com/fjesus912/e3-auth_and_mail_backend" target="_blank" rel="noreferrer">
                      {t("projects.btn-code")}
                    </a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https://fj-e4-users-app.netlify.app/#/login" target="_blank" rel="noreferrer">
                      {t("projects.btn-use-it")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div className="flex justify-end pt-2 pr-5 gap-1">
                <IconBrandReact className="text-[#8491A0]" />
              </div>
              <div>
                <img className="pt-2 pl-5 pr-5" src="/p1.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Gift Music</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">
                  {t("projects.gift-music-description")}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:github.com/fjesus912/gift-music" target="_blank" rel="noreferrer">
                      {t("projects.btn-code")}
                    </a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:fj-gift-music.netlify.app" target="_blank" rel="noreferrer">
                      {t("projects.btn-use-it")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div className="flex justify-end pt-2 pr-5 gap-1">
                <IconBrandReact className="text-[#8491A0]" />
              </div>
              <div>
                <img className="pt-2 pl-5 pr-5" src="/p3.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Rick and Morty</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">
                  {t("projects.rick-morty-description")}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:github.com/fjesus912/rick-and-morty" target="_blank" rel="noreferrer">
                      {t("projects.btn-code")}
                    </a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:fj-rick-and-morty.netlify.app" target="_blank" rel="noreferrer">
                      {t("projects.btn-use-it")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div className="flex justify-end pt-2 pr-5 gap-1">
                <IconBrandReact className="text-[#8491A0]" />
              </div>
              <div>
                <img className="pt-2 pl-5 pr-5" src="/p4.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Weather App</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">
                  {t("projects.weather-app-description")}
                </p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:github.com/fjesus912/weather-app" target="_blank" rel="noreferrer">
                      {t("projects.btn-code")}
                    </a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2 max-[768px]:text-base max-[768px]:px-6 max-[860px]:px-4 max-[860px]:text-sm" href="https:fj-weather-app.netlify.app" target="_blank" rel="noreferrer">
                      {t("projects.btn-use-it")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}
export default Projects