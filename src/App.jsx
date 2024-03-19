import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PopUpMenu from './components/PopUpMenu'
import Projects from './components/Projects'
import Skillset from './components/Skillset'

function App() {

  return (
    <main className='dark:bg-[#00001a] bg-[#FFFFFF] text-white font-Sen'>
    <Navbar />
    <PopUpMenu />
    <About />
    <Skillset />
    <Projects />
    <Contact />
    <Footer />
    </main>
  )
}

export default App