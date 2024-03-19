import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
    .sendForm('service_5uvbm8e', 'template_a1n3ysa', form.current, {
      publicKey: 'LWQkeCfBOE24P-nFn',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        form.current.reset()
        toast.success('Correo enviado!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="h-auto flex items-center justify-center max-w-[900px] mx-auto px-10 sm:px-6 mb-32 mt-32" id="contact">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-5xl">Let’s talk business</h2>
          <p className="text-[#8491A0]">Now that you know a lot about me, let me know if you are interested to work with me.</p>
        </div>
        <div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-5">
              <div className="grid gap-3 relative">
                <label htmlFor="user_name" className="text-white font-light">Name</label>
                <input id="user_name" type="text" name="user_name" className="bg-[#181823] px-3 py-1 outline-none text-white/50" />
              </div>

              <div className="grid gap-3 relative">
                <label htmlFor="user_email" className="text-white font-light">Email address</label>
                <input id="user_email" type="email" name="user_email" className="bg-[#181823] px-3 py-1 outline-none text-white/50" />
              </div>

              <div className="grid gap-3 relative">
                <label htmlFor="message" className="text-white font-light">Message</label>
                <textarea id="message" name="message" className="bg-[#181823] px-3 py-1 outline-none text-white/50" />
              </div>

              <input type="submit" value="Send" className="cursor-pointer bg-[#5221E6] text-white py-4 transition-colors mt-7 hover:bg-[#5221e6ae]" />
            </div>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact