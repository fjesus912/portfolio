import { IconFileDownload, IconLanguageHiragana } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Front-End', 'Back-End', 'Full-Stack'];

const About = () => {
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
      <div className='font-bold text-5xl sm:text-5xl md:text-7xl flex items-center sm:mt-40 mt-20'>
        <h1 className="sm:ml-6 mr-6 ml-6 z-20">
          <p className='mb-6 dark:text-white text-[#373A3C]'>I&apos;m Jesús González; </p>
          <h2 className='text-indigo-500 inline-block'>
            {"a "}
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white inline-block px-5 justify-center'>
              <TextTransition direction='down' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}</TextTransition>
            </div>
            <p className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>web developer based in Mexico.</p>
          </h2>
        </h1>
      </div >
      <p className='p-10 dark:text-white text-[#373A3C] sm:text-xl'>
      I have experience developing Front-end projects with React and Back-end projects with Node.js. I am committed to continuous learning and I am looking for challenges that allow me to grow professionally and personally.
      </p>
      {/* <p className='p-10 dark:text-white text-[#373A3C] sm:text-xl'>
      Cuento con experiencia desarrollando proyectos Front-end con React y Back-end con Node.js. Estoy comprometido con el aprendizaje continuo y busco desafíos que me permitan crecer profesional y personalmente.
      </p> */}
      <div className='px-10 flex justify-center sm:justify-end sm:gap-8 gap-4'>
        <a href="https://drive.google.com/uc?id=1Qr6eGvPIwk16ha8kZtJ45kZgr958DnSJ&export=download" rel="noreferrer" className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-[425px]:px-2 max-[425px]:py-2 px-6 py-3 rounded-3xl hover:scale-110 transition-all text-center items-center flex gap-2'><IconFileDownload/>CV</a>
        <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 max-[425px]:px-2 max-[425px]:py-2 px-6 py-3 rounded-3xl hover:scale-110 transition-all text-center flex gap-2'><IconLanguageHiragana className='inline-block'/>Español</button>
      </div>
    </section>
  )
}
export default About