import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BarChart2, TrendingUp, Users, ChevronRight,
  Settings, BookOpen, UtensilsCrossed, Home,
  LogOut, Menu, X, ArrowRight, Bell
} from 'lucide-react';
import FloorPlan from '../components/FloorPlan';
import { adminStats, adminReservations } from '../data/mockData';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('tableo_user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('tableo_user');
    navigate('/');
  };

  const navItems = [
    { icon: '🏠', label: 'Dashboard', to: '/admin', active: true },
    { icon: '🪑', label: 'Manage Tables', to: '/admin/tables' },
    { icon: '📅', label: 'Reservations', to: '/admin/reservations' },
    { icon: '📋', label: 'Menu', to: '/admin/menu' },
    { icon: '👥', label: 'Customers', to: '/admin/customers' },
    { icon: '📊', label: 'Reports', to: '/admin/reports' },
  ];

  // Fake chart data
  const chartData = [
    { label: 'Mon', bookings: 14, revenue: 28400 },
    { label: 'Tue', bookings: 18, revenue: 36200 },
    { label: 'Wed', bookings: 12, revenue: 24800 },
    { label: 'Thu', bookings: 21, revenue: 42100 },
    { label: 'Fri', bookings: 26, revenue: 52000 },
    { label: 'Sat', bookings: 32, revenue: 64000 },
    { label: 'Sun', bookings: 24, revenue: 48200 },
  ];
  const maxBookings = Math.max(...chartData.map(d => d.bookings));

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-sidebar--open' : ''}`}>
        {/* Logo */}
        <div className="admin-sidebar__logo">
          <div className="admin-sidebar__logo-icon">
            <UtensilsCrossed size={18} color="white" strokeWidth={2.5} />
          </div>
          <span className="admin-sidebar__logo-text">tableo</span>
          <button
            className="admin-sidebar__close show-mobile-only"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="admin-sidebar__nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`admin-sidebar__item ${item.active ? 'admin-sidebar__item--active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="admin-sidebar__item-icon">{item.icon}</span>
              <span>{item.label}</span>
              {item.active && <div className="admin-sidebar__active-dot" />}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar__bottom">
          <div className="admin-sidebar__user">
            <div className="admin-sidebar__avatar">
              {user.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
            <div>
              <div className="admin-sidebar__user-name">{user.name || 'Admin'}</div>
              <div className="admin-sidebar__user-role">Restaurant Admin</div>
            </div>
          </div>
          <button className="admin-sidebar__logout" onClick={handleLogout}>
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="admin-main">
        {/* Top bar */}
        <header className="admin-topbar">
          <button
            className="admin-topbar__menu show-mobile-only"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
          <div className="admin-topbar__title">
            <h1>Dashboard</h1>
            <p>Welcome back, {user.name || 'Admin'} 👋</p>
          </div>
          <div className="admin-topbar__right">
            <button className="admin-topbar__icon-btn">
              <Bell size={20} />
              <span className="admin-topbar__badge">5</span>
            </button>
            <div className="admin-topbar__avatar">
              {user.name?.charAt(0)?.toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        <div className="admin-content">

          {/* ── STAT CARDS ──────────────────── */}
          <div className="admin-stats-grid">
            {adminStats.map((stat, i) => (
              <div
                key={stat.label}
                className="admin-stat-card"
                style={{ '--stat-color': stat.color, animationDelay: `${i * 0.08}s` }}
              >
                <div className="admin-stat-card__icon-wrap" style={{ background: `${stat.color}15` }}>
                  <span className="admin-stat-card__icon">{stat.icon}</span>
                </div>
                <div className="admin-stat-card__body">
                  <div className="admin-stat-card__value">{stat.value}</div>
                  <div className="admin-stat-card__label">{stat.label}</div>
                  <div className="admin-stat-card__change">{stat.change}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CHART + TABLE STATUS ──────────── */}
          <div className="admin-two-col">
            {/* Reservation Chart */}
            <div className="admin-card">
              <div className="admin-card__header">
                <h2 className="admin-card__title">Reservation Overview</h2>
                <span className="admin-card__subtitle">This week</span>
              </div>
              <div className="admin-chart">
                {chartData.map((d) => (
                  <div key={d.label} className="admin-chart__bar-wrap">
                    <div className="admin-chart__bar-container">
                      <div
                        className="admin-chart__bar"
                        style={{ height: `${(d.bookings / maxBookings) * 100}%` }}
                        title={`${d.bookings} bookings · ₹${d.revenue.toLocaleString()}`}
                      />
                    </div>
                    <span className="admin-chart__label">{d.label}</span>
                    <span className="admin-chart__value">{d.bookings}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Table Status */}
            <div className="admin-card">
              <div className="admin-card__header">
                <h2 className="admin-card__title">Table Status</h2>
                <Link to="/admin/tables" className="admin-link">Manage →</Link>
              </div>
              <FloorPlan compact />
            </div>
          </div>

          {/* ── RECENT RESERVATIONS ───────────── */}
          <div className="admin-card">
            <div className="admin-card__header">
              <h2 className="admin-card__title">Recent Reservations</h2>
              <Link to="/admin/reservations" className="admin-link">View all →</Link>
            </div>

            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Guest</th>
                    <th>Table</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adminReservations.map((r) => (
                    <tr key={r.id}>
                      <td className="admin-table__id">{r.id}</td>
                      <td className="admin-table__guest">
                        <div className="admin-table__avatar">
                          {r.guest.charAt(0)}
                        </div>
                        {r.guest}
                      </td>
                      <td>{r.table}</td>
                      <td>{r.time}</td>
                      <td>{r.guests}</td>
                      <td>
                        <span className={`admin-badge admin-badge--${r.status}`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── QUICK ACTIONS ──────────────────── */}
          <div className="admin-quick-actions">
            <h2 className="admin-section-title">Quick Actions</h2>
            <div className="admin-quick-grid">
              {[
                { icon: '🪑', label: 'Manage Tables', color: '#9B5FE3', to: '/admin/tables' },
                { icon: '📅', label: 'Manage Reservations', color: '#FF6B6B', to: '/admin/reservations' },
                { icon: '📋', label: 'Manage Menu', color: '#06D6A0', to: '/admin/menu' },
                { icon: '📊', label: 'View Reports', color: '#FFD166', to: '/admin/reports' },
              ].map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className="admin-quick-card"
                  style={{ '--accent': action.color }}
                >
                  <span className="admin-quick-card__icon">{action.icon}</span>
                  <span className="admin-quick-card__label">{action.label}</span>
                  <ArrowRight size={16} style={{ color: action.color }} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
