import { FaChartLine, FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";

export default function ReportsPage() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">

      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-8 text-purple-700 animate-pulse">
        📊 Supplier Reports & Analytics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Monthly Sales Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <div className="flex items-center mb-4">
            <FaChartLine className="text-yellow-300 text-2xl mr-2 animate-bounce" />
            <h3 className="text-lg font-semibold">Monthly Sales</h3>
          </div>
          <div className="h-48 bg-indigo-100 bg-opacity-30 flex items-center justify-center rounded shadow-inner">
            <span className="text-white opacity-70">📈 Chart Placeholder</span>
          </div>
        </div>

        {/* Top Selling Product Card */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <div className="flex items-center mb-4">
            <FaBoxOpen className="text-yellow-200 text-2xl mr-2 animate-pulse" />
            <h3 className="text-lg font-semibold">Top Selling Product</h3>
          </div>
          <p className="text-lg font-bold">📦 Rice Bags</p>
          <p className="mt-1">Orders This Month: <span className="font-semibold">35</span></p>
        </div>

        {/* Revenue Summary Card */}
        <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-6 rounded-xl shadow-lg hover:scale-105 transition transform">
          <div className="flex items-center mb-4">
            <FaMoneyBillWave className="text-yellow-300 text-2xl mr-2 animate-bounce" />
            <h3 className="text-lg font-semibold">Revenue</h3>
          </div>
          <p className="text-3xl font-bold">₹1,20,000</p>
          <p className="mt-2 opacity-90">Monthly Revenue</p>
        </div>

      </div>

      {/* Optional Analytics Section */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Additional Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded shadow text-white">
            <p className="font-bold text-lg">New Customers</p>
            <p className="text-2xl mt-2">24</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-300 to-orange-400 rounded shadow text-white">
            <p className="font-bold text-lg">Pending Orders</p>
            <p className="text-2xl mt-2">8</p>
          </div>
        </div>
      </div>

    </div>
  );
}