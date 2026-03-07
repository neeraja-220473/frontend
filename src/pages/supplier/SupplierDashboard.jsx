import { Link, Routes, Route } from "react-router-dom";
import { FaBell, FaUserCircle, FaSearch, FaBoxOpen, FaClipboardList, FaFileInvoice, FaChartBar, FaCog, FaHome, FaWarehouse } from "react-icons/fa";
import { useState } from "react";
import Notifications from "../../components/Notifications";

import ProductsPage from "./ProductsPage";
import InventoryPage from "./InventoryPage";
import OrdersPage from "./OrdersPage";
import BillingPage from "./BillingPage";
import ReportsPage from "./ReportsPage";
import SettingsPage from "./SettingsPage";

export default function SupplierDashboard() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-indigo-600">Supplier Panel</div>
        <nav className="flex-1 p-4 space-y-4">
          <Link to="/supplier-dashboard" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaHome /> <span>Dashboard</span>
          </Link>
          <Link to="/supplier-dashboard/products" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaBoxOpen /> <span>Products</span>
          </Link>
          <Link to="/supplier-dashboard/inventory" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaWarehouse /> <span>Inventory</span>
          </Link>
          <Link to="/supplier-dashboard/orders" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaClipboardList /> <span>Orders</span>
          </Link>
          <Link to="/supplier-dashboard/billing" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaFileInvoice /> <span>Billing</span>
          </Link>
          <Link to="/supplier-dashboard/reports" className="flex items-center space-x-2 hover:text-indigo-200">
            <FaChartBar /> <span>Reports</span>
          </Link>
          <Link to="/supplier-dashboard/settings" className="flex items-center space-x-2 hover:text-indigo-200">
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
                className="text-gray-600 cursor-pointer hover:text-indigo-600"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              <Notifications isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
            </div>
            <FaUserCircle className="text-gray-600 cursor-pointer hover:text-indigo-600" size={28} />
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
          <Routes>
            <Route index element={
              <div>
                <h2 className="text-2xl font-bold mb-6">Supplier Dashboard Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Total Products</h3>
                    <p className="text-3xl font-bold text-indigo-600">120</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Total Orders</h3>
                    <p className="text-3xl font-bold text-green-600">35</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Low Stock</h3>
                    <p className="text-3xl font-bold text-red-600">6</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Monthly Sales</h3>
                    <p className="text-2xl font-bold text-blue-600">₹75,000</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-lg font-semibold">Revenue</h3>
                    <p className="text-2xl font-bold text-purple-600">₹1,20,000</p>
                  </div>
                </div>

                {/* Low Stock Alerts */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">⚠ Low Stock Alerts</h3>
                  <ul className="text-red-700">
                    <li>Rice Bags – 5 left</li>
                    <li>Cooking Oil – 7 left</li>
                  </ul>
                </div>
              </div>
            } />
            <Route path="products" element={<ProductsPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="billing" element={<BillingPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}