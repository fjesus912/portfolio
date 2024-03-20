const Skillset = () => {
  return (
    <section className=" px-16 flex items-center max-w-[1200px] mx-auto mt-12 sm:mt-24" id="skillset">
      <div className="flex flex-col gap-8 sm:grid sm:grid-cols-3 sm:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-5xl dark:text-white text-[#373A3C]">Skillset</h2>
          <p className="dark:text-[#8491A0] text-[#373A3C]">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
        </div>
        <div className="grid gap-10 justify-center">
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl dark:text-white text-[#373A3C]">Languages</h3>
            <ul className="dark:text-[#8491A0] text-[#373A3C]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl dark:text-white text-[#373A3C]">Technologies</h3>
            <ul className="dark:text-[#8491A0] text-[#373A3C]">
              <li>React</li>
              <li>Node.js</li>
              <li>Tailwind</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-10 justify-center">
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl dark:text-white text-[#373A3C]">Source Control</h3>
            <ul className="dark:text-[#8491A0] text-[#373A3C]">
              <li>Git/Github</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl dark:text-white text-[#373A3C]">UX/UI</h3>
            <ul className="dark:text-[#8491A0] text-[#373A3C]">
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skillset