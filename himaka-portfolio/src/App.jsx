import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import About from './sections/About'
import TechLogos from './sections/TechLogos'
import Awards from './sections/Awards'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

function App() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Awards', href: '#awards' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="app-shell">
      <div className="page-glow" aria-hidden="true"></div>
      <Header navLinks={navLinks} />
      <main>
        <Hero />
        <Services />
        <About />
        <TechLogos />
        <Awards />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer navLinks={navLinks} />
    </div>
  )
}

export default App
