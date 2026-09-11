import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar, Clock, Users, ChevronDown, ArrowRight,
  BookOpen, Eye, Home, User, Map, Bookmark,
  Star, Zap, QrCode, Utensils, Bell, Search
} from 'lucide-react';
import AppNavbar from '../components/AppNavbar';
import FloorPlan from '../components/FloorPlan';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants, mockReservations } from '../data/mockData';
import './CustomerDashboard.css';

const featureCards = [
  { icon: '📅', label: 'Book a Table', desc: 'Find and reserve your perfect table', color: '#FF6B6B', to: '/book' },
  { icon: '🪑', label: 'Choose Your Table', desc: 'Pick from visual floor plan', color: '#9B5FE3', to: '/tables' },
  { icon: '✨', label: 'Smart Allocation', desc: 'AI-powered table recommendations', color: '#06D6A0', to: '/book' },
  { icon: '🟢', label: 'Live Table Status', desc: 'Real-time availability view', color: '#4ECDC4', to: '/tables' },
  { icon: '📋', label: 'My Reservations', desc: 'See upcoming bookings', color: '#FFD166', to: '/reservations' },
  { icon: '🍜', label: 'Restaurant Menu', desc: 'Explore today\'s menu', color: '#FF8C42', to: '/menu' },
  { icon: '⏱️', label: 'Waiting Time', desc: 'Estimated wait before you arrive', color: '#FF6FB3', to: '/tables' },
  { icon: '💬', label: 'Special Requests', desc: 'Add notes to your reservation', color: '#74C7EC', to: '/reservations' },
];

const quickActions = [
  { icon: '📅', label: 'Book a Table', desc: 'Find and reserve your perfect table', color: '#FF6B6B', bg: 'rgba(255,107,107,0.1)', to: '/book' },
  { icon: '📋', label: 'View Menu', desc: "Explore today's menu", color: '#9B5FE3', bg: 'rgba(155,95,227,0.1)', to: '/menu' },
  { icon: '🎫', label: 'My Reservations', desc: 'See upcoming reservations', color: '#06D6A0', bg: 'rgba(6,214,160,0.1)', to: '/reservations' },
  { icon: '🟢', label: 'Live Tables', desc: 'View current table availability', color: '#FF8C42', bg: 'rgba(255,140,66,0.1)', to: '/tables' },
];

const CustomerDashboard = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');
  const [pref, setPref] = useState('any');
  const [activeNav, setActiveNav] = useState('home');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('tableo_user') || '{}');
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const reservation = mockReservations[0];

  return (
    <div className="customer-dashboard">
      <AppNavbar user={user} />

      <main className="dashboard-main">
        <div className="dashboard-container">

          {/* ── HERO / SEARCH ─────────────────────────── */}
          <section className="dash-hero">
            <div className="dash-hero__text">
              <h1 className="dash-hero__greeting">{greeting}, {user.name || 'Prabhu'} 👋</h1>
              <p className="dash-hero__sub">Where are we dining today?</p>
            </div>

            {/* Search Card */}
            <div className="dash-search-card">
              <div className="dash-search-fields">
                <div className="dash-search-field">
                  <div className="dash-search-field__label">
                    <Calendar size={14} color="#9B5FE3" />
                    Date
                  </div>
                  <input
                    type="date"
                    className="dash-search-field__input"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="dash-search-divider" />

                <div className="dash-search-field">
                  <div className="dash-search-field__label">
                    <Clock size={14} color="#FF6B6B" />
                    Time
                  </div>
                  <select
                    className="dash-search-field__input"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    <option value="">Choose time</option>
                    {['6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="dash-search-divider" />

                <div className="dash-search-field">
                  <div className="dash-search-field__label">
                    <Users size={14} color="#06D6A0" />
                    Guests
                  </div>
                  <select
                    className="dash-search-field__input"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                <div className="dash-search-divider" />

                <div className="dash-search-field">
                  <div className="dash-search-field__label">
                    🪑 Table preference
                  </div>
                  <select
                    className="dash-search-field__input"
                    value={pref}
                    onChange={(e) => setPref(e.target.value)}
                  >
                    <option value="any">Any table</option>
                    <option value="window">Window seat</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="private">Private booth</option>
                    <option value="bar">Bar seating</option>
                  </select>
                </div>
              </div>

              <Link to="/book" className="dash-search-btn">
                <Search size={18} />
                Find a Table
              </Link>
            </div>
          </section>

          {/* ── QUICK ACTIONS ─────────────────────────── */}
          <section className="dash-quick">
            <div className="dash-quick__grid">
              {quickActions.map((action) => (
                <Link to={action.to} key={action.label} className="dash-quick-card" style={{ '--accent': action.color, '--accent-bg': action.bg }}>
                  <div className="dash-quick-card__icon-wrap" style={{ background: action.bg }}>
                    <span className="dash-quick-card__icon">{action.icon}</span>
                  </div>
                  <div>
                    <div className="dash-quick-card__label">{action.label}</div>
                    <div className="dash-quick-card__desc">{action.desc}</div>
                  </div>
                  <ArrowRight size={16} className="dash-quick-card__arrow" style={{ color: action.color }} />
                </Link>
              ))}
            </div>
          </section>

          {/* ── TWO COLUMN: Reservation + Floor Plan ── */}
          <section className="dash-two-col">
            {/* Upcoming Reservation */}
            <div className="dash-reservation-card">
              <div className="dash-reservation-card__header">
                <h2 className="dash-section-title">Your next reservation</h2>
                <Link to="/reservations" className="dash-link">View all →</Link>
              </div>

              {reservation ? (
                <div className="dash-reservation-body">
                  <div className="dash-reservation-accent" />
                  <div className="dash-reservation-table">
                    <div className="dash-reservation-table__num">{reservation.table}</div>
                    <div className="dash-reservation-table__type">{reservation.tableType}</div>
                  </div>
                  <div className="dash-reservation-details">
                    <div className="dash-reservation-detail">
                      <Calendar size={14} color="#FF6B6B" />
                      {reservation.date}
                    </div>
                    <div className="dash-reservation-detail">
                      <Clock size={14} color="#9B5FE3" />
                      {reservation.time}
                    </div>
                    <div className="dash-reservation-detail">
                      <Users size={14} color="#06D6A0" />
                      {reservation.guests} Guests
                    </div>
                  </div>
                  <div className="dash-reservation-status-row">
                    <span className="dash-status-badge dash-status-badge--confirmed">✓ Confirmed</span>
                    <Link to="/reservations" className="dash-reservation-btn">
                      View Reservation
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="dash-empty-reservation">
                  <span className="dash-empty-reservation__emoji animate-float">🍽️</span>
                  <p>Your next great meal starts here.</p>
                  <Link to="/book" className="dash-reservation-btn">Book a Table</Link>
                </div>
              )}
            </div>

            {/* Live Floor Plan */}
            <div className="dash-floor-card">
              <div className="dash-floor-card__header">
                <h2 className="dash-section-title">Live Table Status</h2>
                <Link to="/tables" className="dash-link">View Full Floor Plan →</Link>
              </div>
              <FloorPlan interactive compact />
            </div>
          </section>

          {/* ── FEATURE GRID ──────────────────────────── */}
          <section className="dash-features">
            <h2 className="dash-section-title">Explore TABLEO</h2>
            <div className="dash-features-grid">
              {featureCards.map((card) => (
                <Link to={card.to} key={card.label} className="dash-feature-card">
                  <div className="dash-feature-card__icon" style={{ color: card.color, background: `${card.color}15` }}>
                    <span>{card.icon}</span>
                  </div>
                  <div className="dash-feature-card__body">
                    <div className="dash-feature-card__label">{card.label}</div>
                    <div className="dash-feature-card__desc">{card.desc}</div>
                  </div>
                  <ArrowRight size={16} style={{ color: card.color }} className="dash-feature-card__arrow" />
                </Link>
              ))}
            </div>
          </section>

          {/* ── POPULAR RESTAURANTS ───────────────────── */}
          <section className="dash-popular">
            <div className="dash-popular__header">
              <h2 className="dash-section-title">Popular around you</h2>
              <Link to="/book" className="dash-link">See all →</Link>
            </div>
            <div className="dash-popular__scroll">
              {restaurants.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="bottom-nav">
        {[
          { icon: <Home size={22} />, label: 'Home', key: 'home', to: '/app' },
          { icon: <Calendar size={22} />, label: 'Book', key: 'book', to: '/book' },
          { icon: <Map size={22} />, label: 'Tables', key: 'tables', to: '/tables' },
          { icon: <Bookmark size={22} />, label: 'Reservations', key: 'reservations', to: '/reservations' },
          { icon: <User size={22} />, label: 'Profile', key: 'profile', to: '/profile' },
        ].map((item) => (
          <button
            key={item.key}
            className={`bottom-nav__item ${activeNav === item.key ? 'bottom-nav__item--active' : ''}`}
            onClick={() => { setActiveNav(item.key); navigate(item.to); }}
          >
            {item.icon}
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CustomerDashboard;
