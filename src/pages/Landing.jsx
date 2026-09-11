import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Map, Clock, QrCode, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloorPlan from '../components/FloorPlan';
import { features, restaurants } from '../data/mockData';
import './Landing.css';

const Landing = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <div className="landing">
      <Navbar />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero" id="home">
        {/* Background blobs */}
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />

        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__badge animate-bounce-in">
              <span>✨</span> Now in early access
            </div>
            <h1 className="hero__heading animate-slide-up">
              Your perfect table is just a few{' '}
              <span className="gradient-text">taps away.</span>
            </h1>
            <p className="hero__sub animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Discover, choose and reserve your favourite table with a smarter, more personal dining experience.
            </p>
            <div className="hero__actions animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/signup" className="hero__btn-primary">
                Find a Table <ArrowRight size={18} />
              </Link>
              <button
                className="hero__btn-secondary"
                onClick={() => document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore TABLEO
              </button>
            </div>

            <div className="hero__stats animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="hero__stat">
                <span className="hero__stat-num">10K+</span>
                <span className="hero__stat-label">Happy diners</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">500+</span>
                <span className="hero__stat-label">Restaurants</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-num">4.9★</span>
                <span className="hero__stat-label">App rating</span>
              </div>
            </div>
          </div>

          {/* Floor Plan Visual */}
          <div className="hero__visual animate-scale-in" style={{ animationDelay: '0.15s' }}>
            {/* Floating info cards */}
            <div className="hero__card hero__card--1 animate-float">
              <div className="hero__card-dot" style={{ background: '#06D6A0' }} />
              <div>
                <div className="hero__card-title">Table 08 available</div>
                <div className="hero__card-sub">Window view · 4 seats</div>
              </div>
            </div>

            <div className="hero__card hero__card--2 animate-float-reverse">
              <span>🕗</span>
              <div>
                <div className="hero__card-title">Tonight · 8:00 PM</div>
                <div className="hero__card-sub">Prime slot</div>
              </div>
            </div>

            <div className="hero__card hero__card--3 animate-float-slow">
              <span>🎉</span>
              <div>
                <div className="hero__card-title">Reservation confirmed</div>
                <div className="hero__card-sub">4 guests</div>
              </div>
            </div>

            {/* Floor plan */}
            <div className="hero__floor-wrap">
              <div className="hero__floor-header">
                <span className="hero__floor-title">Live Table View</span>
                <span className="hero__floor-live">● LIVE</span>
              </div>
              <FloorPlan compact />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint">
          <ChevronDown size={20} className="animate-float" />
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────── */}
      <section className="features-section" id="features">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Everything you need</div>
            <h2 className="section-title">
              Everything you need for a{' '}
              <span className="gradient-text">better dining experience.</span>
            </h2>
            <p className="section-sub">
              TABLEO brings smart technology to your restaurant reservations — making every meal memorable.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`feature-card ${activeFeature === i ? 'feature-card--active' : ''}`}
                style={{ '--accent': feature.color, '--accent-bg': feature.bg, animationDelay: `${i * 0.08}s` }}
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="feature-card__icon-wrap" style={{ background: feature.bg }}>
                  <span className="feature-card__icon">{feature.icon}</span>
                </div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.description}</p>
                <div className="feature-card__arrow" style={{ color: feature.color }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section className="how-section" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Simple process</div>
            <h2 className="section-title">
              Reserve your table in{' '}
              <span className="gradient-text">3 easy steps.</span>
            </h2>
          </div>

          <div className="how-steps">
            <div className="how-step animate-scale-in">
              <div className="how-step__number">01</div>
              <div className="how-step__visual">📅</div>
              <h3 className="how-step__title">Choose your date & time</h3>
              <p className="how-step__desc">Pick the perfect date, time and number of guests for your reservation.</p>
            </div>

            <div className="how-connector">
              <div className="how-connector__line" />
              <ArrowRight size={20} color="#FF6B6B" />
              <div className="how-connector__line" />
            </div>

            <div className="how-step animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="how-step__number">02</div>
              <div className="how-step__visual">🗺️</div>
              <h3 className="how-step__title">Pick your perfect table</h3>
              <p className="how-step__desc">See the full restaurant floor plan and choose your ideal seat.</p>
            </div>

            <div className="how-connector">
              <div className="how-connector__line" />
              <ArrowRight size={20} color="#9B5FE3" />
              <div className="how-connector__line" />
            </div>

            <div className="how-step animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="how-step__number">03</div>
              <div className="how-step__visual">✅</div>
              <h3 className="how-step__title">Confirm your reservation</h3>
              <p className="how-step__desc">Get instant confirmation with a QR code sent directly to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── POPULAR RESTAURANTS ───────────────────── */}
      <section className="popular-section" id="about">
        <div className="section-container">
          <div className="section-header">
            <div className="section-tag">Discover</div>
            <h2 className="section-title">
              Popular <span className="gradient-text">around you</span>
            </h2>
          </div>
          <div className="popular-scroll">
            {restaurants.map((r) => (
              <div key={r.id} className="popular-card">
                <div className="popular-card__img" style={{ background: r.gradient }}>
                  <span className="popular-card__emoji">{r.image}</span>
                  {r.openNow && <span className="popular-card__open">Open</span>}
                </div>
                <div className="popular-card__body">
                  <div className="popular-card__name">{r.name}</div>
                  <div className="popular-card__cuisine">{r.cuisine}</div>
                  <div className="popular-card__meta">
                    <span className="popular-card__rating">★ {r.rating}</span>
                    <span className="popular-card__price">{r.price}</span>
                    <span className="popular-card__dist">{r.distance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-card">
            <div className="cta-blob cta-blob--1" />
            <div className="cta-blob cta-blob--2" />
            <div className="cta-content">
              <div className="cta-emoji animate-float">🍽️</div>
              <h2 className="cta-title">Ready to find your table?</h2>
              <p className="cta-sub">
                Make your next dining experience simpler, smarter and more personal.
              </p>
              <Link to="/signup" className="cta-btn">
                Get Started <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer__top">
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="footer__logo-icon">🍽️</div>
                <span className="footer__logo-text">tableo</span>
              </div>
              <p className="footer__tagline">Your table. Your time. Your experience.</p>
              <div className="footer__socials">
                {['𝕏', '📸', '💼', '▶️'].map((icon, i) => (
                  <button key={i} className="footer__social-btn">{icon}</button>
                ))}
              </div>
            </div>

            <div className="footer__links">
              {[
                { heading: 'Product', links: ['Home', 'Features', 'How It Works', 'Pricing'] },
                { heading: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
                { heading: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
              ].map((group) => (
                <div key={group.heading} className="footer__link-group">
                  <h4 className="footer__link-heading">{group.heading}</h4>
                  {group.links.map((link) => (
                    <a key={link} href="#" className="footer__link">{link}</a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="footer__bottom">
            <p>© 2024 TABLEO. All rights reserved.</p>
            <p>Made with ❤️ for food lovers</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
