import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UtensilsCrossed, ArrowRight } from 'lucide-react';
import FloorPlan from '../components/FloorPlan';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = { name: 'Prabhu', email: email || 'user@tableo.app', role: null };
      localStorage.setItem('tableo_user', JSON.stringify(user));
      setLoading(false);
      navigate('/role');
    }, 1200);
  };

  return (
    <div className="auth-page">
      {/* Left branding side */}
      <div className="auth-left">
        <div className="auth-left__blob auth-left__blob--1" />
        <div className="auth-left__blob auth-left__blob--2" />

        <div className="auth-left__content">
          <Link to="/" className="auth-left__logo">
            <div className="auth-left__logo-icon">
              <UtensilsCrossed size={20} color="white" strokeWidth={2.5} />
            </div>
            <span>tableo</span>
          </Link>

          <h2 className="auth-left__headline">
            Good food deserves the perfect table.
          </h2>
          <p className="auth-left__sub">
            Join thousands of diners discovering smarter, more personal restaurant experiences.
          </p>

          {/* Mini floor plan */}
          <div className="auth-left__floor-wrap animate-scale-in">
            <div className="auth-left__floor-header">
              <span>Live Table View</span>
              <span className="auth-left__live">● LIVE</span>
            </div>
            <FloorPlan compact />
          </div>

          {/* Floating cards */}
          <div className="auth-left__card auth-left__card--1 animate-float">
            <span className="auth-left__card-icon">✅</span>
            <div>
              <div className="auth-left__card-title">Booking confirmed!</div>
              <div className="auth-left__card-sub">Table 08 · 8:00 PM</div>
            </div>
          </div>

          <div className="auth-left__card auth-left__card--2 animate-float-reverse">
            <span className="auth-left__card-icon">⭐</span>
            <div>
              <div className="auth-left__card-title">10,000+ happy diners</div>
              <div className="auth-left__card-sub">Join the community</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right form side */}
      <div className="auth-right">
        <div className="auth-form-card animate-scale-in">
          <div className="auth-form-card__header">
            <h1 className="auth-form-card__title">Welcome back 👋</h1>
            <p className="auth-form-card__sub">Let's get you back to your table.</p>
          </div>

          <form onSubmit={handleLogin} className="auth-form">
            <div className="auth-field">
              <label className="auth-field__label">Email address</label>
              <input
                type="email"
                className="auth-field__input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <div className="auth-field__label-row">
                <label className="auth-field__label">Password</label>
                <button type="button" className="auth-field__forgot">Forgot password?</button>
              </div>
              <div className="auth-field__input-wrap">
                <input
                  type={showPass ? 'text' : 'password'}
                  className="auth-field__input auth-field__input--icon"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="auth-field__eye"
                  onClick={() => setShowPass(!showPass)}
                  aria-label="Toggle password"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="auth-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="auth-remember__check"
              />
              <span>Remember me</span>
            </label>

            <button type="submit" className={`auth-submit ${loading ? 'auth-submit--loading' : ''}`} disabled={loading}>
              {loading ? (
                <span className="auth-spinner" />
              ) : (
                <>Log In <ArrowRight size={16} /></>
              )}
            </button>
          </form>

          <div className="auth-divider">
            <div className="auth-divider__line" />
            <span>or continue with</span>
            <div className="auth-divider__line" />
          </div>

          <div className="auth-social">
            <button className="auth-social__btn">
              <span>🇬</span> Google
            </button>
            <button className="auth-social__btn">
              <span>🍎</span> Apple
            </button>
          </div>

          <p className="auth-switch">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-switch__link">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
