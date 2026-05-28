function Footer({ navLinks }) {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="section-label">Himaka Portfolio</p>
          <h3>Building smart web applications with modern web tools.</h3>
        </div>

        <div className="site-footer__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <p className="site-footer__copy">
          © {year} Himaka. Crafted with React, Vite, and a love for clean web
          experiences.
        </p>
      </div>
    </footer>
  )
}

export default Footer
