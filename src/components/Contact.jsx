const Contact = () => {
  return (
    <section className="h-auto flex items-center justify-center max-w-[900px] mx-auto px-6 mb-32 mt-32" id="contact">
      <div className="grid gap-3 grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-5xl">Let’s talk business</h2>
          <p className="text-[#8491A0]">Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <div>

          <form
            // onSubmit={handleSubmit(submit)} 
            className="">
            <div className="grid gap-5">
              <div className="grid gap-3 relative">
                <label htmlFor="first_name" className="text-white font-light">
                  Name
                </label>
                <input
                  id="first_name"
                  type="text"
                  className="bg-[#181823] px-3 py-1 outline-none text-white/50"
                />
              </div>
              <div className="grid gap-3 relative">
                <label htmlFor="email" className="text-white font-light">
                  Email address
                </label>
                <input
                  id="email"
                  type="text"
                  className="bg-[#181823] px-3 py-1 outline-none text-white/50" />
              </div>
              <div className="grid gap-3 relative">
                <label htmlFor="first_name" className="text-white font-light">
                  Message
                </label>
                <input
                  id="first_name"
                  type="text"
                  className="bg-[#181823] px-3 py-1 outline-none text-white/50"
                />
              </div>
              <button type="submit" className=" bg-[#5221E6] text-white py-4 transition-colors mt-7 hover:bg-[#5221e6ae]">
                LET’S GET STARTED
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
export default Contact