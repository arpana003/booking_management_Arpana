import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home, BookOpen, Calendar, Map, User, UtensilsCrossed,
  Bell, ChevronDown, LogOut, Settings, Search
} from 'lucide-react';
import './AppNavbar.css';

const AppNavbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('tableo_user');
    navigate('/');
  };

  return (
    <header className="app-navbar">
      <div className="app-navbar__inner">
        {/* Logo */}
        <Link to="/app" className="app-navbar__logo">
          <div className="app-navbar__logo-icon">
            <UtensilsCrossed size={16} color="white" strokeWidth={2.5} />
          </div>
          <span className="app-navbar__logo-text">tableo</span>
        </Link>

        {/* Search */}
        <div className="app-navbar__search hide-mobile">
          <Search size={16} color="#9B9BAD" />
          <input
            type="text"
            placeholder="Search restaurants, cuisine or tables..."
            className="app-navbar__search-input"
          />
        </div>

        {/* Right */}
        <div className="app-navbar__right">
          <button className="app-navbar__icon-btn" aria-label="Notifications">
            <Bell size={20} />
            <span className="app-navbar__badge">3</span>
          </button>

          <div className="app-navbar__profile" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <div className="app-navbar__avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'P'}
            </div>
            <span className="app-navbar__name hide-mobile">{user?.name || 'Prabhu'}</span>
            <ChevronDown size={16} className={`app-navbar__chevron ${dropdownOpen ? 'app-navbar__chevron--open' : ''}`} />

            {dropdownOpen && (
              <div className="app-navbar__dropdown animate-slide-up">
                <div className="app-navbar__dropdown-user">
                  <div className="app-navbar__dropdown-avatar">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'P'}
                  </div>
                  <div>
                    <div className="app-navbar__dropdown-name">{user?.name || 'Prabhu'}</div>
                    <div className="app-navbar__dropdown-email">{user?.email || 'user@tableo.app'}</div>
                  </div>
                </div>
                <div className="app-navbar__dropdown-divider" />
                <Link to="/profile" className="app-navbar__dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <User size={15} /> My Profile
                </Link>
                <Link to="/reservations" className="app-navbar__dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Calendar size={15} /> My Reservations
                </Link>
                <Link to="/profile" className="app-navbar__dropdown-item" onClick={() => setDropdownOpen(false)}>
                  <Settings size={15} /> Settings
                </Link>
                <div className="app-navbar__dropdown-divider" />
                <button className="app-navbar__dropdown-item app-navbar__dropdown-item--logout" onClick={handleLogout}>
                  <LogOut size={15} /> Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppNavbar;
