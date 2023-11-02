import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skillset from './components/Skillset'

function App() {

  return (
    <main className='bg-black text-white font-Sen'>
    <Navbar />
    <About />
    <Skillset />
    <Projects />
    <Contact />
    <Footer />
    </main>
  )
}

export default App