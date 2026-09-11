import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <UtensilsCrossed size={18} color="white" strokeWidth={2.5} />
          </div>
          <span className="navbar__logo-text">tableo</span>
        </Link>

        {/* Center Links */}
        <div className="navbar__links hide-mobile">
          {navLinks.map((link) => (
            <button key={link.label} className="navbar__link" onClick={() => scrollTo(link.href)}>
              {link.label}
            </button>
          ))}
        </div>

        {/* Right CTA */}
        <div className="navbar__cta hide-mobile">
          <Link to="/login" className="navbar__login">Log in</Link>
          <Link to="/signup" className="navbar__started">Get Started</Link>
        </div>

        {/* Hamburger */}
        <button className="navbar__hamburger show-mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu animate-slide-up">
          {navLinks.map((link) => (
            <button key={link.label} className="navbar__mobile-link" onClick={() => scrollTo(link.href)}>
              {link.label}
            </button>
          ))}
          <div className="navbar__mobile-cta">
            <Link to="/login" className="navbar__login" onClick={() => setMenuOpen(false)}>Log in</Link>
            <Link to="/signup" className="navbar__started" onClick={() => setMenuOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
