import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function getGreeting() {
  const hour = new Date().getHours()

  if (hour < 12) {
    return 'Good morning!'
  }

  if (hour < 18) {
    return 'Good afternoon!'
  }

  return 'Good evening!'
}

function Hero() {
  const greeting = getGreeting()
  const heroStageRef = useRef(null)
  const heroBgRef = useRef(null)
  const [isMetaScrolled, setIsMetaScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window === 'undefined') {
      return 'home'
    }

    const currentHash = window.location.hash.replace('#', '')
    return ['home', 'about', 'projects'].includes(currentHash)
      ? currentHash
      : 'home'
  })

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: '-20% 0px -35% 0px',
      }
    )

    sections.forEach((section) => observer.observe(section))

    const handleHashChange = () => {
      const currentHash = window.location.hash.replace('#', '')
      if (sectionIds.includes(currentHash)) {
        setActiveSection(currentHash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    const syncScrolledState = () => {
      setIsMetaScrolled(window.scrollY > 24)
    }

    syncScrolledState()
    window.addEventListener('scroll', syncScrolledState, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncScrolledState)
    }
  }, [])

  useEffect(() => {
  const heroStage = heroStageRef.current
  const heroBg = heroBgRef.current

  if (!heroStage || !heroBg) return

  const ctx = gsap.context(() => {
    gsap.to(heroBg, {
      scale: 1.28,
      y: -35,
      ease: 'none',
      scrollTrigger: {
        trigger: heroStage,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
  }, heroStage)

  return () => ctx.revert()
}, [])

  const shortNavLinks = [
    { label: 'Index', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
  ]

  return (
<section className="section hero-section" id="home">
  <div ref={heroStageRef} className="hero-stage">
    <div ref={heroBgRef} className="hero-stage__bg" aria-hidden="true"></div>

        <div className={`hero-stage__meta ${isMetaScrolled ? 'is-scrolled' : ''}`}>
          <p className="hero-meta-copy">{greeting}</p>

          <div className="hero-socials">
            <span>Socials</span>
            <a href="https://github.com/Himaka12" target="_blank" rel="noopener noreferrer">
              gitHub
            </a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/himaka-uthpala-2262633a7" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span>/</span>
            <a href="#contact" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </div>

          <div className="hero-short-nav">
            {shortNavLinks.map((link, index) => {
              const isActive = activeSection === link.id

              return (
                <span className="hero-short-nav__item" key={link.id}>
                  <a
                    href={link.href}
                    className={isActive ? 'is-active' : ''}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                  {index < shortNavLinks.length - 1 ? <span>/</span> : null}
                </span>
              )
            })}
          </div>

          <a className="hero-top-cta" href="#contact">
            Let&apos;s talk!
          </a>
        </div>

        <div className="hero-stage__body">
          <div className="hero-content">
            <div className="hero-intro">
              <p>Hi there! this is</p>
              <h1>
                <span className="hero-intro__primary">Himaka</span>
                <span className="hero-intro__secondary">Uthpala</span>
              </h1>
            </div>

            <div className="hero-headline">
              <strong>DESIGN</strong>
              <strong>FOR FINANCE</strong>
              <strong className="hero-headline__accent">FINTECH</strong>
            </div>

            <p className="hero-scroll-note">(Scroll down)</p>
          </div>

          <aside className="hero-aside">
            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <ul className="hero-service-list">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Database Design</li>
                <li>AI / ML Projects</li>
              </ul>
            </div>

            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <div className="hero-help-row">
                <a className="hero-help-link" href="#contact">
                  How can I help?
                </a>
                <span className="hero-help-arrow">&#8599;</span>
              </div>
              <p className="hero-copy">
                I am an undergraduate student pursuing a degree in Information Technology specializing in Artificial Intelligence.
              </p>
            </div>

            <div className="hero-aside__block">
              <span className="hero-aside__line"></span>
              <div className="hero-awards-mini">
                <span className="hero-award-mark">&#9679;</span>
                <span className="hero-award-mark">Projects</span>
                <span className="hero-award-mark">UX Thinking</span>
                <span className="hero-award-mark">ML Builds</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
