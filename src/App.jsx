import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RoleSelection from './pages/RoleSelection';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import {
  MenuPage,
  BookingPage,
  TablesPage,
  ReservationsPage,
  ProfilePage,
  AdminTablesPage,
  AdminReservationsPage,
  AdminMenuPage,
  AdminCustomersPage,
  AdminReportsPage,
} from './pages/ComingSoon';

// Auth guard
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('tableo_user') || 'null');
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/app'} replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/role" element={<RoleSelection />} />

        {/* Customer routes */}
        <Route path="/app" element={<ProtectedRoute role="customer"><CustomerDashboard /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute role="customer"><MenuPage /></ProtectedRoute>} />
        <Route path="/book" element={<ProtectedRoute role="customer"><BookingPage /></ProtectedRoute>} />
        <Route path="/tables" element={<ProtectedRoute role="customer"><TablesPage /></ProtectedRoute>} />
        <Route path="/reservations" element={<ProtectedRoute role="customer"><ReservationsPage /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute role="customer"><ProfilePage /></ProtectedRoute>} />

        {/* Admin routes */}
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/tables" element={<ProtectedRoute role="admin"><AdminTablesPage /></ProtectedRoute>} />
        <Route path="/admin/reservations" element={<ProtectedRoute role="admin"><AdminReservationsPage /></ProtectedRoute>} />
        <Route path="/admin/menu" element={<ProtectedRoute role="admin"><AdminMenuPage /></ProtectedRoute>} />
        <Route path="/admin/customers" element={<ProtectedRoute role="admin"><AdminCustomersPage /></ProtectedRoute>} />
        <Route path="/admin/reports" element={<ProtectedRoute role="admin"><AdminReportsPage /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
