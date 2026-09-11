import { Link } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar';

const ComingSoon = ({ title, emoji, description, backTo = '/app', isAdmin = false }) => {
  const user = JSON.parse(localStorage.getItem('tableo_user') || '{}');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      {!isAdmin && <AppNavbar user={user} />}
      <div className="coming-soon-page">
        <div className="coming-soon-card">
          <span className="coming-soon-icon">{emoji}</span>
          <h1>{title}</h1>
          <p>{description || 'This feature is currently in development and will be available soon!'}</p>
          <Link
            to={backTo}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #FF6B6B, #9B5FE3)',
              color: 'white',
              fontWeight: '700',
              fontSize: '0.92rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-main)',
              boxShadow: '0 4px 16px rgba(255,107,107,0.35)',
              transition: 'all 0.2s',
            }}
          >
            ← Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export const MenuPage = () => <ComingSoon title="Menu Explorer" emoji="🍜" description="Browse through beautiful restaurant menus, daily specials and chef's recommendations. Coming in Phase 2!" />;
export const BookingPage = () => <ComingSoon title="Book a Table" emoji="📅" description="The complete visual table booking experience is coming soon. Reserve your perfect spot!" />;
export const TablesPage = () => <ComingSoon title="Live Table View" emoji="🗺️" description="Full interactive restaurant floor plan with live table availability. Coming in Phase 2!" />;
export const ReservationsPage = () => <ComingSoon title="My Reservations" emoji="🎫" description="Track all your past and upcoming reservations, manage bookings and view QR codes. Coming soon!" />;
export const ProfilePage = () => <ComingSoon title="Your Profile" emoji="👤" description="Manage your personal details, preferences, dining history and notification settings. Coming soon!" />;

export const AdminTablesPage = () => <ComingSoon title="Manage Tables" emoji="🪑" description="Drag-and-drop table management, floor plan editing and capacity planning. Coming in Phase 2!" backTo="/admin" isAdmin />;
export const AdminReservationsPage = () => <ComingSoon title="Manage Reservations" emoji="📅" description="Full reservation management with filtering, search and status updates. Coming soon!" backTo="/admin" isAdmin />;
export const AdminMenuPage = () => <ComingSoon title="Manage Menu" emoji="📋" description="Add, edit and organize your restaurant menu with categories and pricing. Coming soon!" backTo="/admin" isAdmin />;
export const AdminCustomersPage = () => <ComingSoon title="Customer Management" emoji="👥" description="View customer profiles, booking history and preferences. Coming soon!" backTo="/admin" isAdmin />;
export const AdminReportsPage = () => <ComingSoon title="Analytics & Reports" emoji="📊" description="Deep dive into revenue trends, peak hours, table utilization and customer insights. Coming soon!" backTo="/admin" isAdmin />;

export default ComingSoon;
