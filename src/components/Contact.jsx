const Contact = () => {
  return (
    <section className="h-screen flex items-center justify-center px-32" id="contact">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="font-bold text-5xl">Let’s talk business</h2>
          <p className="text-[#8491A0]">Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <div>

          <form
            // onSubmit={handleSubmit(submit)} 
            className="flex justify-center items-center">
            <div className="w-3/4 grid gap-5">
              <div className="grid gap-3 relative">
                <label htmlFor="first_name" className="text-white font-light">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="first_name"
                  type="text"
                  placeholder='Enter name'
                  className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50"
                />
              </div>
              <div className="grid gap-3 relative">
                <label htmlFor="email" className="text-white font-light">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder='Enter email'
                  className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50" />
              </div>
              <div className="grid gap-3 relative">
                <label htmlFor="first_name" className="text-white font-light">
                  Message <span className="text-red-500">*</span>
                </label>
                <input
                  id="first_name"
                  type="text"
                  placeholder='Enter name'
                  className="border border-[#E5E5E5] bg-transparent rounded-md px-3 py-1 outline-none text-white/50"
                />
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
export default Contact