import { useNavigate } from 'react-router-dom';
import { UtensilsCrossed, ArrowRight, BarChart2, Settings, Users, BookOpen } from 'lucide-react';
import './RoleSelection.css';

const RoleSelection = () => {
  const navigate = useNavigate();

  const selectRole = (role) => {
    const user = JSON.parse(localStorage.getItem('tableo_user') || '{}');
    user.role = role;
    localStorage.setItem('tableo_user', JSON.stringify(user));
    navigate(role === 'admin' ? '/admin' : '/app');
  };

  return (
    <div className="role-page">
      {/* Background blobs */}
      <div className="role-blob role-blob--1" />
      <div className="role-blob role-blob--2" />

      {/* Header */}
      <div className="role-header">
        <div className="role-logo">
          <div className="role-logo__icon">
            <UtensilsCrossed size={20} color="white" strokeWidth={2.5} />
          </div>
          <span className="role-logo__text">tableo</span>
        </div>
        <h1 className="role-title">How will you use TABLEO?</h1>
        <p className="role-sub">Choose your role to get the experience tailored for you.</p>
      </div>

      {/* Cards */}
      <div className="role-cards">
        {/* Customer Card */}
        <div className="role-card role-card--customer" onClick={() => selectRole('customer')}>
          <div className="role-card__bg" />
          <div className="role-card__icon-wrap">
            <span className="role-card__emoji animate-float">🍽️</span>
          </div>
          <h2 className="role-card__title">Customer</h2>
          <p className="role-card__desc">Discover amazing restaurants and book your perfect table.</p>

          <ul className="role-card__perks">
            {[
              '🔍 Find restaurants',
              '📋 Explore menus',
              '🪑 Choose tables',
              '📅 Make reservations',
            ].map((perk) => (
              <li key={perk} className="role-card__perk">{perk}</li>
            ))}
          </ul>

          <button className="role-card__btn role-card__btn--customer">
            Continue as Customer <ArrowRight size={16} />
          </button>
        </div>

        {/* Admin Card */}
        <div className="role-card role-card--admin" onClick={() => selectRole('admin')}>
          <div className="role-card__bg" />
          <div className="role-card__icon-wrap">
            <span className="role-card__emoji animate-float-reverse">👨‍💼</span>
          </div>
          <h2 className="role-card__title">Restaurant Admin</h2>
          <p className="role-card__desc">Manage your restaurant, tables and reservations.</p>

          <ul className="role-card__perks">
            {[
              '🪑 Manage tables',
              '📅 Manage reservations',
              '📋 Manage menu',
              '📊 View analytics',
            ].map((perk) => (
              <li key={perk} className="role-card__perk">{perk}</li>
            ))}
          </ul>

          <button className="role-card__btn role-card__btn--admin">
            Continue as Admin <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
