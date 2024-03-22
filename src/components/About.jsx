import { IconFileDownload, IconLanguageHiragana } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { useTranslation } from 'react-i18next'

const TEXTS = ['Front-End', 'Back-End', 'Full-Stack'];

const About = () => {
  const [t, i18n] = useTranslation("global")

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    localStorage.setItem("LANGUAGE", i18n.language);
  }, [i18n.language]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3500, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id='about' className='grid items-center max-w-[1200px] mx-auto'>
      {/* <img className='max-w-[400px] hidden sm:block left-full absolute visible sm:left-0 sm:relative sm:rounded-full z-10 mx-auto sm:pl-6' src="/Picture.jpeg" alt="" /> */}
      <div className='font-bold text-5xl max-[355px]:text-3xl sm:text-5xlxl md:text-7xl flex items-center sm:mt-40 mt-20'>
        <h1 className="sm:ml-6 mr-6 ml-6 z-20">
          <p className='mb-6 dark:text-white text-[#373A3C]'>{t("about.name")}</p>
          {i18n.language === 'en'
            ?
            <div className='text-indigo-500 inline-block'>
              {"a "}
              <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white inline-block px-5 justify-center'>
                <TextTransition direction='down' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </div>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>web developer based in Mexico.</p>
            </div>
            :
            <div className='text-indigo-500 inline-block'>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>un desarrollador web</p>
              <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white inline-block px-5 justify-center'>
                <TextTransition direction='down' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </div>
              <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text inline-block'>Mexicano.</p>
            </div>
          }
        </h1>
      </div >
      <p className='p-10 dark:text-white text-[#373A3C] sm:text-xl'>
        {t("about.description")}
      </p>
      <div className='px-10 flex justify-center sm:justify-end sm:gap-8 gap-4'>
        {i18n.language === 'en'
          ?
          <a href="https://drive.google.com/uc?id=1Qr6eGvPIwk16ha8kZtJ45kZgr958DnSJ&export=download" rel="noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-[425px]:px-2 max-[425px]:py-2 px-6 py-3 rounded-3xl hover:scale-110 transition-all text-center items-center flex gap-2'><IconFileDownload />CV</a>
          :
          <a href="https://drive.google.com/uc?id=13U3UPBIAr4k0HNJEA4RxL4qGojnuRnr0&export=download" rel="noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-[425px]:px-2 max-[425px]:py-2 px-6 py-3 rounded-3xl hover:scale-110 transition-all text-center items-center flex gap-2'><IconFileDownload />CV</a>
        }
        <button onClick={handleLanguageSwitch} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-[425px]:px-2 max-[425px]:py-2 px-6 py-3 rounded-3xl hover:scale-110 transition-all text-center flex gap-2'><IconLanguageHiragana className='inline-block' />
          {i18n.language === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    </section>
  )
}
export default About