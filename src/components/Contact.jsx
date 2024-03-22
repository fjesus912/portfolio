import toast, { Toaster } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const [t] = useTranslation("global")
  
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
    <section className="h-auto flex items-center justify-center max-w-[900px] mx-auto px-10 sm:px-6 mb-10 md:mb-20 mt-32" id="contact">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-3xl md:text-5xl dark:text-white text-[#373A3C]">
            {t("contact.contact")}
          </h2>
          <p className="dark:text-[#8491A0] text-[#373A3C]">
            {t("contact.description")}
          </p>
        </div>
        <div>

          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-5">
              <div className="grid gap-3 relative">
                <label htmlFor="user_name" className="dark:text-white text-[#373A3C] font-light">
                  {t("contact.form-name")}
                </label>
                <input id="user_name" type="text" name="user_name" className="dark:bg-[#181823] bg-slate-200 px-3 py-1 outline-none text-black/70 dark:text-white/50" />
              </div>

              <div className="grid gap-3 relative">
                <label htmlFor="user_email" className="dark:text-white text-[#373A3C] font-light">
                  {t("contact.form-email")}
                </label>
                <input id="user_email" type="email" name="user_email" className="dark:bg-[#181823] bg-slate-200 px-3 py-1 outline-none text-black/70 dark:text-white/50" />
              </div>

              <div className="grid gap-3 relative">
                <label htmlFor="message" className="dark:text-white text-[#373A3C] font-light">
                  {t("contact.form-message")}
                </label>
                <textarea id="message" name="message" className="dark:bg-[#181823] bg-slate-200 px-3 py-1 outline-none text-black/70 dark:text-white/50" />
              </div>

              <input type="submit" value={t("contact.btn-send")} className="text-xl cursor-pointer text-white py-3 transition-colors mt-7 bg-[#5221E6] hover:bg-[#5221e6ae]" />
            </div>
            <Toaster />
          </form>
        </div>
      </div>
    </section>
  )
}
export default Contact