import Navbar from './components/navbar.jsx'
import Hero from './components/hero/hero.jsx'
import About from './components/about/about.jsx'
import Services from './components/services/services.jsx'
import Portfolio from './components/Portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'

const App = () => {
  return (
    <div className='app-container'>

   


      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App