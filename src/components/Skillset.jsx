const Skillset = () => {
  return (
    <section className="h-screen px-16 flex items-center max-w-[1200px] mx-auto" id="skillset">
      <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-5xl">Skillset</h2>
          <p className="text-[#8491A0]">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl">Languages</h3>
            <ul className="text-[#8491A0]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl">Frameworks</h3>
            <ul className="text-[#8491A0]">
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-10">
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl">Source Control</h3>
            <ul className="text-[#8491A0]">
              <li>Git/Github</li>
            </ul>
          </div>
          <div className="grid gap-4">
            <img src="/puzzle-piece.svg" alt="" />
            <h3 className="font-bold text-2xl">UX/UI</h3>
            <ul className="text-[#8491A0]">
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skillset