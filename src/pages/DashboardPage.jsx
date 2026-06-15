import { useAuth } from "../contexts/AuthContext.jsx";
import { useBooking } from "../contexts/BookingContext.jsx";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { bookings, totalBookings } = useBooking();
  const navigate = useNavigate();

  const totalSpent = bookings.reduce((sum, b) => sum + (b.price || 0), 0);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="section-title">My Dashboard</h1>
          <p className="section-subtitle">Welcome back, {user?.name}!</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>Logout</Button>
      </div>

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        <div className="card-premium text-center">
          <p className="text-3xl font-display font-bold text-brand-700">{totalBookings}</p>
          <p className="text-sm text-slate-500 mt-1">Total Bookings</p>
        </div>
        <div className="card-premium text-center">
          <p className="text-3xl font-display font-bold text-brand-700">₹{totalSpent.toLocaleString()}</p>
          <p className="text-sm text-slate-500 mt-1">Total Spent</p>
        </div>
        <div className="card-premium text-center">
          <p className="text-3xl font-display font-bold text-brand-700">{user?.email}</p>
          <p className="text-sm text-slate-500 mt-1">Account Email</p>
        </div>
      </div>

      <h2 className="font-display font-bold text-xl text-slate-900 mb-4">Recent Bookings</h2>
      {bookings.length === 0 ? (
        <div className="card-premium text-center py-12 text-slate-500">
          <p>No bookings yet. Start exploring!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="card-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="accent">{booking.type}</Badge>
                  <span className="font-semibold text-slate-900">
                    {booking.item?.name || booking.item?.title || booking.item?.airline || booking.item?.operator || "Booking"}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Booked on {new Date(booking.createdAt).toLocaleDateString()}
                </p>
              </div>
              <p className="font-display font-bold text-brand-700">₹{booking.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
