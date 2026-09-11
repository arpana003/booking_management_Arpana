import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UtensilsCrossed, ArrowRight, Check } from 'lucide-react';
import FloorPlan from '../components/FloorPlan';
import './Auth.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const user = { name: form.name || 'Prabhu', email: form.email, role: null };
      localStorage.setItem('tableo_user', JSON.stringify(user));
      setLoading(false);
      navigate('/role');
    }, 1200);
  };

  return (
    <div className="auth-page">
      {/* Left branding side */}
      <div className="auth-left auth-left--signup">
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
            Start your smarter dining journey.
          </h2>
          <p className="auth-left__sub">
            Create your account and discover a new way to experience restaurants.
          </p>

          <div className="auth-left__perks">
            {[
              'Visual table selection from floor plans',
              'Real-time table availability',
              'Instant booking confirmations',
              'Smart recommendations for you',
            ].map((perk, i) => (
              <div key={i} className="auth-perk">
                <div className="auth-perk__check">
                  <Check size={12} color="white" strokeWidth={3} />
                </div>
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <div className="auth-left__floor-wrap animate-scale-in" style={{ marginTop: '24px' }}>
            <div className="auth-left__floor-header">
              <span>Live Table View</span>
              <span className="auth-left__live">● LIVE</span>
            </div>
            <FloorPlan compact />
          </div>
        </div>
      </div>

      {/* Right form side */}
      <div className="auth-right">
        <div className="auth-form-card animate-scale-in">
          <div className="auth-form-card__header">
            <h1 className="auth-form-card__title">Create your TABLEO account ✨</h1>
            <p className="auth-form-card__sub">Join the smarter dining revolution.</p>
          </div>

          <form onSubmit={handleSignup} className="auth-form">
            <div className="auth-form__row">
              <div className="auth-field">
                <label className="auth-field__label">Full Name</label>
                <input
                  type="text"
                  className="auth-field__input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange('name')}
                />
              </div>
              <div className="auth-field">
                <label className="auth-field__label">Phone</label>
                <input
                  type="tel"
                  className="auth-field__input"
                  placeholder="+91 9876543210"
                  value={form.phone}
                  onChange={handleChange('phone')}
                />
              </div>
            </div>

            <div className="auth-field">
              <label className="auth-field__label">Email address</label>
              <input
                type="email"
                className="auth-field__input"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange('email')}
              />
            </div>

            <div className="auth-form__row">
              <div className="auth-field">
                <label className="auth-field__label">Password</label>
                <div className="auth-field__input-wrap">
                  <input
                    type={showPass ? 'text' : 'password'}
                    className="auth-field__input auth-field__input--icon"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange('password')}
                  />
                  <button
                    type="button"
                    className="auth-field__eye"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="auth-field">
                <label className="auth-field__label">Confirm Password</label>
                <input
                  type="password"
                  className="auth-field__input"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={handleChange('confirm')}
                />
              </div>
            </div>

            <button type="submit" className={`auth-submit ${loading ? 'auth-submit--loading' : ''}`} disabled={loading}>
              {loading ? (
                <span className="auth-spinner" />
              ) : (
                <>Create Account <ArrowRight size={16} /></>
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
            Already have an account?{' '}
            <Link to="/login" className="auth-switch__link">Log in</Link>
          </p>

          <p className="auth-terms">
            By creating an account, you agree to our{' '}
            <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
