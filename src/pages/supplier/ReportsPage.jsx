import { FaChartLine, FaBoxOpen, FaMoneyBillWave } from "react-icons/fa";

export default function ReportsPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Supplier Reports & Analytics</h2>

      {/* Monthly Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-indigo-600 text-2xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-700">Monthly Sales</h3>
        </div>
        <div className="h-48 bg-gray-200 flex items-center justify-center rounded">
          [Chart Placeholder]
        </div>
      </div>

      {/* Top Selling Product */}
      <div className="bg-white p-6 rounded-lg shadow mb-6 hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <FaBoxOpen className="text-green-600 text-2xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-700">Top Selling Product</h3>
        </div>
        <p className="text-gray-600">Rice Bags</p>
        <p className="text-gray-600">Orders This Month: 35</p>
      </div>

      {/* Revenue Summary */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="flex items-center mb-4">
          <FaMoneyBillWave className="text-purple-600 text-2xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
        </div>
        <p className="text-3xl font-bold text-green-600">₹1,20,000</p>
        <p className="text-gray-500 mt-2">Monthly Revenue</p>
      </div>
    </div>
  );
}