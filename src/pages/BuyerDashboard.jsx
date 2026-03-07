import { Link, Outlet } from "react-router-dom";
import { FaBell, FaUserCircle, FaSearch, FaShoppingCart, FaFileInvoice, FaChartBar, FaCog, FaStore, FaClipboardList, FaHome } from "react-icons/fa";
import { useState } from "react";
import Notifications from "../components/Notifications";

export default function BuyerDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-600">Inventa</div>
        <nav className="flex-1 p-4 space-y-4">
          <Link to="/buyer-dashboard" className="flex items-center space-x-2 hover:text-blue-200">
            <FaHome /> <span>Dashboard</span>
          </Link>
          <Link to="/buyer-dashboard/marketplace" className="flex items-center space-x-2 hover:text-blue-200">
            <FaStore /> <span>Marketplace</span>
          </Link>
          <Link to="/buyer-dashboard/orders" className="flex items-center space-x-2 hover:text-blue-200">
            <FaClipboardList /> <span>Orders</span>
          </Link>
          <Link to="/buyer-dashboard/cart" className="flex items-center space-x-2 hover:text-blue-200">
            <FaShoppingCart /> <span>Cart</span>
          </Link>
          <Link to="/buyer-dashboard/invoices" className="flex items-center space-x-2 hover:text-blue-200">
            <FaFileInvoice /> <span>Invoices</span>
          </Link>
          <Link to="/buyer-dashboard/reports" className="flex items-center space-x-2 hover:text-blue-200">
            <FaChartBar /> <span>Reports</span>
          </Link>
          <Link to="/buyer-dashboard/settings" className="flex items-center space-x-2 hover:text-blue-200">
            <FaCog /> <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 relative">
          <div className="flex items-center space-x-4">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1 focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <FaBell
                className="text-gray-600 cursor-pointer hover:text-blue-600"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <Notifications isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
            </div>
            <FaUserCircle className="text-gray-600 cursor-pointer hover:text-blue-600" size={28} />
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Nested Routes */}
        <main className="p-6 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}