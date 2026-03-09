export default function BillingPage() {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">

      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        🧾 Billing / Invoice
      </h2>

      {/* Invoice Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Invoice Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Invoice</h3>
            <p className="text-sm opacity-90">Invoice #INV1023</p>
          </div>

          <div className="text-right">
            <p className="font-semibold">ABC Traders</p>
            <p className="text-sm">Supplier</p>
          </div>
        </div>

        {/* Invoice Body */}
        <div className="p-6">

          <div className="flex justify-between mb-6">
            <div>
              <p className="text-gray-600">Supplier</p>
              <p className="font-semibold text-lg">ABC Traders</p>
            </div>

            <div>
              <p className="text-gray-600">Buyer</p>
              <p className="font-semibold text-lg">XYZ Store</p>
            </div>
          </div>

          {/* Product Table */}
          <table className="w-full rounded-lg overflow-hidden">

            <thead className="bg-indigo-100 text-indigo-700">
              <tr>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Qty</th>
                <th className="p-3 text-left">Price</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b hover:bg-indigo-50 transition">
                <td className="p-3 font-medium">📦 Rice Bags</td>
                <td className="p-3">2</td>
                <td className="p-3 text-blue-600 font-semibold">₹2400</td>
              </tr>

              <tr className="border-b hover:bg-indigo-50 transition">
                <td className="p-3 font-medium">🛢 Oil Bottle</td>
                <td className="p-3">1</td>
                <td className="p-3 text-blue-600 font-semibold">₹200</td>
              </tr>

            </tbody>

          </table>

          {/* Billing Summary */}
          <div className="mt-6 space-y-2 text-right">

            <p className="text-gray-600">
              GST: <span className="font-semibold text-orange-600">₹120</span>
            </p>

            <p className="text-xl font-bold text-green-600">
              Total: ₹2720
            </p>

          </div>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4 justify-end">

            <button className="bg-gray-200 px-5 py-2 rounded-lg shadow hover:bg-gray-300 hover:scale-105 transition">
              📥 Download PDF
            </button>

            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition">
              🖨 Print Invoice
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}