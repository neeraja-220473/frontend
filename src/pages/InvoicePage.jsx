export default function InvoicePage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Invoice</h2>
      <div className="bg-white p-6 rounded shadow">
        <p><strong>Supplier:</strong> ABC Traders</p>
        <p><strong>Buyer:</strong> XYZ Store</p>
        <table className="w-full border my-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Rice</td>
              <td className="p-2 border">2</td>
              <td className="p-2 border">₹2400</td>
            </tr>
            <tr>
              <td className="p-2 border">Oil</td>
              <td className="p-2 border">1</td>
              <td className="p-2 border">₹200</td>
            </tr>
          </tbody>
        </table>
        <p>GST: ₹120</p>
        <p className="font-bold">Total: ₹2720</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-gray-200 px-4 py-2 rounded">Download PDF</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Print</button>
        </div>
      </div>
    </div>
  );
}