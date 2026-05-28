import { useEffect, useRef, useState } from 'react'
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

  const heroSectionRef = useRef(null)
  const heroStageRef = useRef(null)
  const heroBgRef = useRef(null)
  const heroMainRef = useRef(null)
  const heroAsideRef = useRef(null)
  const overlayRef = useRef(null)
  const overlayLeftRef = useRef(null)
  const overlayTextRef = useRef(null)

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
  const heroSection = heroSectionRef.current
  const heroBg = heroBgRef.current
  const heroMain = heroMainRef.current
  const heroAside = heroAsideRef.current
  const overlay = overlayRef.current
  const overlayLeft = overlayLeftRef.current
  const overlayText = overlayTextRef.current

  if (
    !heroSection ||
    !heroBg ||
    !heroMain ||
    !heroAside ||
    !overlay ||
    !overlayLeft ||
    !overlayText
  ) {
    return
  }

  const ctx = gsap.context(() => {
    gsap.set(heroBg, {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transformOrigin: '58% 42%',
      force3D: true,
    })

    gsap.set(heroMain, {
      opacity: 1,
      y: 0,
    })

    gsap.set(heroAside, {
      opacity: 1,
      x: 0,
    })

    gsap.set(overlay, {
      opacity: 0,
      y: 160,
    })

    gsap.set([overlayLeft, overlayText], {
      opacity: 0,
      y: 120,
    })

    const timeline = gsap.timeline({
      defaults: {
        ease: 'none',
      },
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2.2,
        invalidateOnRefresh: true,
      },
    })

    timeline
      // 1. First scroll: only slow zoom. No upward movement.
      .to(
        heroBg,
        {
          scale: 1.06,
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2,
        },
        0
      )

      // 2. Keep landing text visible longer
      .to(
        heroMain,
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
        },
        0
      )

      .to(
        heroAside,
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
        },
        0
      )

      // 3. Landing text fades slowly
      .to(
        heroMain,
        {
          opacity: 0,
          y: -45,
          duration: 1.8,
        },
        1.8
      )

      .to(
        heroAside,
        {
          opacity: 0,
          x: 35,
          duration: 1.8,
        },
        1.9
      )

      // 4. Image keeps zooming in place
      .to(
        heroBg,
        {
          scale: 1.13,
          x: 0,
          y: 0,
          opacity: 1,
          duration: 2.8,
        },
        1.8
      )

      // 5. Overlay text comes from bottom
      .to(
        overlay,
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
        },
        3.3
      )

      .to(
        overlayLeft,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        3.55
      )

      .to(
        overlayText,
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        },
        3.75
      )

      // 6. Image still stays behind overlay text
      .to(
        heroBg,
        {
          scale: 1.2,
          x: 0,
          y: 0,
          opacity: 1,
          duration: 3,
        },
        3.7
      )

      // 7. Overlay moves slightly upward near the end
      .to(
        overlay,
        {
          y: -70,
          duration: 2,
        },
        5.7
      )

      // 8. Final fade only at the very end
      .to(
        overlay,
        {
          opacity: 0,
          duration: 1,
        },
        7.1
      )

      .to(
        heroBg,
        {
          opacity: 0,
          scale: 1.23,
          x: 0,
          y: 0,
          duration: 1,
        },
        7.3
      )
  }, heroSection)

  return () => ctx.revert()
}, [])


  const shortNavLinks = [
    { label: 'Index', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
  ]

  return (
    <section ref={heroSectionRef} className="section hero-section" id="home">
      <div ref={heroStageRef} className="hero-stage">
        <div ref={heroBgRef} className="hero-stage__bg" aria-hidden="true"></div>
        <div className="hero-stage__shade" aria-hidden="true"></div>
        <div className="hero-stage__texture" aria-hidden="true"></div>

        <div className={`hero-stage__meta ${isMetaScrolled ? 'is-scrolled' : ''}`}>
          <p className="hero-meta-copy">{greeting}</p>

          <div className="hero-socials">
            <span>Socials</span>

            <a href="https://github.com/Himaka12" target="_blank" rel="noopener noreferrer">
              gitHub
            </a>

            <span>/</span>

            <a
              href="https://www.linkedin.com/in/himaka-uthpala-2262633a7"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <span>/</span>

            <a href="#contact">
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
          <div ref={heroMainRef} className="hero-content">
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

          <aside ref={heroAsideRef} className="hero-aside">
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
                I am an undergraduate student pursuing a degree in Information Technology
                specializing in Artificial Intelligence.
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

        <div ref={overlayRef} className="hero-scroll-overlay">
          <div ref={overlayLeftRef} className="hero-overlay-clients">
            <span className="hero-overlay-line"></span>
            <h2>
              Industry projects
              <br />
              I worked on
            </h2>

            <div className="hero-client-grid">
              <span>Toy Gallery</span>
              <span>AI Survey</span>
              <span>KDD99 ML</span>
              <span>Appointment System</span>
            </div>
          </div>

          <div ref={overlayTextRef} className="hero-overlay-story">
            <span className="hero-overlay-label">(Intro)</span>

            <p>
              I design and build digital products that are simple, useful, and
              easy to understand. My work connects frontend development, backend
              systems, database design, and AI/ML experiments.
            </p>

            <p>
              My goal is to create portfolio projects that feel practical, modern,
              and human-centered instead of just looking like normal university
              assignments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero