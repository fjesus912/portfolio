// import { IconBrandReact } from "@tabler/icons-react"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import '../App.css'

const Projects = () => {
  return (
    // <section className="h-auto px-16 grid mt-12 sm:mt-24 sm:grid-cols-2 gap-6 items-center justify-center max-w-[1200px] mx-auto" id="projects">
    //   <div className="grid gap-6">
    //     <div className="flex flex-col gap-3">
    //       <h2 className="font-bold text-5xl dark:text-white text-[#373A3C]">Projects</h2>
    //       <p className="dark:text-white text-[#373A3C]">These are my projects that I have done during the year.</p>
    //     </div>
    //     <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
    //       <div>
    //         <img className="pt-5 pl-5 pr-5" src="/p1.png" alt="" />
    //       </div>
    //       <div className="p-5">
    //         <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Gift Music</h4>
    //         <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
    //         <div className="flex justify-between items-center">
    //           <div className="flex gap-3">
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/gift-music" target="_blank" rel="noreferrer">Code</a>
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-gift-music.netlify.app" target="_blank" rel="noreferrer">View</a>
    //           </div>
    //           <div>
    //             <IconBrandReact />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
    //       <div>
    //         <img className="pt-5 pl-5 pr-5" src="/p2.png" alt="" />
    //       </div>
    //       <div className="p-5">
    //         <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Pokedex</h4>
    //         <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
    //         <div className="flex justify-between items-center">
    //           <div className="flex gap-3">
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/pokedex" target="_blank" rel="noreferrer">Code</a>
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-pokedex.netlify.app" target="_blank" rel="noreferrer">View</a>
    //           </div>
    //           <div>
    //             <IconBrandReact />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="grid gap-6">
    //     <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
    //       <div>
    //         <img className="pt-5 pl-5 pr-5" src="/p3.png" alt="" />
    //       </div>
    //       <div className="p-5">
    //         <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Rick and Morty</h4>
    //         <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
    //         <div className="flex justify-between items-center">
    //           <div className="flex gap-3">
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/rick-and-morty" target="_blank" rel="noreferrer">Code</a>
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-rick-and-morty.netlify.app" target="_blank" rel="noreferrer">View</a>
    //           </div>
    //           <div>
    //             <IconBrandReact />
    //           </div>
    //         </div>
    //       </div>

    //     </div>

    //     <div className="dark:bg-[#181823] bg-slate-200 shadow-2xl">
    //       <div>
    //         <img className="pt-5 pl-5 pr-5" src="/p4.png" alt="" />
    //       </div>
    //       <div className="p-5">
    //         <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Weather App</h4>
    //         <p className="dark:text-[#8491A0] text-black/70 line-clamp-3 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
    //         <div className="flex justify-between items-center">
    //           <div className="flex gap-3">
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://github.com/fjesus912/weather-app" target="_blank" rel="noreferrer">Code</a>
    //             <a className="bg-[#5221E6] hover:bg-[#5221e6ae] transition-colors px-6 py-2" href="https://fj-weather-app.netlify.app" target="_blank" rel="noreferrer">View</a>
    //           </div>
    //           <div>
    //             <IconBrandReact />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="px-16 mt-12 sm:mt-24 max-w-[1200px] mx-auto" id="projects">
      <div className="mb-5">
        <h2 className="font-bold text-5xl dark:text-white text-[#373A3C] mb-3">Projects</h2>
        <p className="dark:text-[#8491A0] text-[#373A3C]">These are my Front-End and Back-end projects that I have done. Swipe to see more.</p>
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
              <div>
                <img className="pt-5 pl-5 pr-5" src="/p2.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Pokedex</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:github.com/fjesus912/pokedex" target="_blank" rel="noreferrer">Code</a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:fj-pokedex.netlify.app" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div>
                <img className="pt-5 pl-5 pr-5" src="/p5.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Users App</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https://github.com/fjesus912/e3-auth_and_mail_backend" target="_blank" rel="noreferrer">Code</a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https://fj-e4-users-app.netlify.app/#/login" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div>
                <img className="pt-5 pl-5 pr-5" src="/p1.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Gift Music</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae rounded-2xl transition-colors px-6 py-2" href="https:github.com/fjesus912/gift-music" target="_blank" rel="noreferrer">Code</a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:fj-gift-music.netlify.app" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div>
                <img className="pt-5 pl-5 pr-5" src="/p3.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Rick and Morty</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:github.com/fjesus912/rick-and-morty" target="_blank" rel="noreferrer">Code</a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:fj-rick-and-morty.netlify.app" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dark:bg-[#181823] bg-slate-200">
              <div>
                <img className="pt-5 pl-5 pr-5" src="/p4.png" alt="" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-xl dark:text-white text-[#373A3C]">Weather App</h4>
                <p className="dark:text-[#8491A0] text-black/70 overflow-auto h-[70px] mb-3 min-[768px]:text-sm min-[940px]:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto ipsum asperiores nihil odio nobis. Expedita sed facere exercitationem sunt itaque mollitia.</p>
                <div className="flex justify-center items-center">
                  <div className="flex gap-3 justify-center">
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:github.com/fjesus912/weather-app" target="_blank" rel="noreferrer">Code</a>
                    <a className="bg-[#5221E6] hover:bg-[#5221e6ae] rounded-2xl transition-colors px-6 py-2" href="https:fj-weather-app.netlify.app" target="_blank" rel="noreferrer">View</a>
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