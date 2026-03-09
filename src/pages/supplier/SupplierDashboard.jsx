import { Link, Routes, Route } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
  FaBoxOpen,
  FaClipboardList,
  FaFileInvoice,
  FaChartBar,
  FaCog,
  FaHome,
  FaWarehouse,
} from "react-icons/fa";
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
      <aside className="w-64 bg-blue-100 text-gray-800 flex flex-col shadow-md border-r border-gray-200">

        {/* Animated Supplier Panel */}
        <div className="p-6 text-2xl font-bold border-b border-blue-200 flex items-center gap-2
                        transition-all duration-500 hover:scale-110 hover:text-blue-600 animate-pulse">
          <span className="animate-bounce">🚚</span>
          <span className="tracking-wide">Supplier Panel</span>
        </div>

        <nav className="flex-1 p-4 space-y-3">

          {[
            { path: "", icon: <FaHome />, label: "Dashboard" },
            { path: "products", icon: <FaBoxOpen />, label: "Products" },
            { path: "inventory", icon: <FaWarehouse />, label: "Inventory" },
            { path: "orders", icon: <FaClipboardList />, label: "Orders" },
            { path: "billing", icon: <FaFileInvoice />, label: "Billing" },
            { path: "reports", icon: <FaChartBar />, label: "Reports" },
            { path: "settings", icon: <FaCog />, label: "Settings" },
          ].map((link) => (
            <Link
              key={link.label}
              to={`/supplier-dashboard/${link.path}`}
              className="flex items-center space-x-2 p-2 rounded-md border border-transparent
                         hover:border-blue-300 hover:bg-blue-200 hover:scale-105
                         transition duration-300"
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}

        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4 border-b border-gray-200">

          <div className="flex items-center space-x-3">
            <FaSearch className="text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            />
          </div>

          <div className="flex items-center space-x-6">

            <div className="relative">
              <FaBell
                className="text-gray-600 cursor-pointer hover:text-blue-500 transition duration-300"
                onClick={() => setShowNotifications(!showNotifications)}
              />

              <Notifications
                isOpen={showNotifications}
                onClose={() => setShowNotifications(false)}
              />
            </div>

            <FaUserCircle
              className="text-gray-600 cursor-pointer hover:text-blue-500 transition duration-300"
              size={26}
            />

            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/login";
              }}
              className="bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500 transition duration-300"
            >
              Logout
            </button>

          </div>
        </header>

        {/* Main */}
        <main className="p-6 flex-1">

          <Routes>

            <Route
              index
              element={
                <div>

                  <h2 className="text-3xl font-bold mb-6 text-gray-700">
                    📊 Supplier Dashboard Overview
                  </h2>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition transform hover:scale-105 duration-300">
                      <h3 className="text-gray-600 font-semibold">
                        Total Products
                      </h3>
                      <p className="text-3xl font-bold text-blue-600">
                        120
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition transform hover:scale-105 duration-300">
                      <h3 className="text-gray-600 font-semibold">
                        Total Orders
                      </h3>
                      <p className="text-3xl font-bold text-green-600">
                        35
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition transform hover:scale-105 duration-300">
                      <h3 className="text-gray-600 font-semibold">
                        Low Stock
                      </h3>
                      <p className="text-3xl font-bold text-red-500">
                        6
                      </p>
                    </div>

                  </div>

                  {/* Revenue Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition transform hover:scale-105 duration-300">
                      <h3 className="text-gray-600 font-semibold">
                        Monthly Sales
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹75,000
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow border border-gray-200 transition transform hover:scale-105 duration-300">
                      <h3 className="text-gray-600 font-semibold">
                        Revenue
                      </h3>
                      <p className="text-2xl font-bold text-green-600">
                        ₹1,20,000
                      </p>
                    </div>

                  </div>

                  {/* Low Stock Alerts */}
                  <div className="bg-red-50 border border-red-300 rounded p-4 mt-8 transition hover:shadow-lg duration-300">

                    <h3 className="text-lg font-bold text-red-600 mb-2">
                      ⚠ Low Stock Alerts
                    </h3>

                    <ul className="text-red-500">
                      <li>Rice Bags – 5 left</li>
                      <li>Cooking Oil – 7 left</li>
                    </ul>

                  </div>

                </div>
              }
            />

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
