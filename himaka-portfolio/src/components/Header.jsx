import { useState } from 'react'
import { Menu as MenuIcon } from 'lucide-react'
import Menu from './Menu'

function Header({ navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#home">
            <span className="brand__mark">H</span>
            <span>
              Himaka
              <small>Full Stack Developer</small>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="button button--ghost header-cta" href="#contact">
              Let&apos;s talk
            </a>
            <button
              type="button"
              className="menu-toggle"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon size={20} />
            </button>
          </div>
        </div>
      </header>

      <Menu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  )
}

export default Header
