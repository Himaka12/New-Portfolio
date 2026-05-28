import { X } from 'lucide-react'

function Menu({ isOpen, navLinks, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}>
      <div className="mobile-menu__panel">
        <div className="mobile-menu__header">
          <span className="section-label">Navigation</span>
          <button
            type="button"
            className="menu-toggle"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-menu__links" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={onClose}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Menu
