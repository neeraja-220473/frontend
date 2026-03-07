export default function OrdersPage() {
  const orders = [
    { id: "#1021", buyer: "XYZ Shop", products: "Rice Bags", total: 2400, status: "Pending" },
    { id: "#1022", buyer: "ABC Mart", products: "Oil Bottles", total: 800, status: "Shipped" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Order ID</th>
            <th className="p-2 border">Buyer</th>
            <th className="p-2 border">Products</th>
            <th className="p-2 border">Total</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o, i) => (
            <tr key={i}>
              <td className="p-2 border">{o.id}</td>
              <td className="p-2 border">{o.buyer}</td>
              <td className="p-2 border">{o.products}</td>
              <td className="p-2 border">₹{o.total}</td>
              <td className="p-2 border">{o.status}</td>
              <td className="p-2 border space-x-2">
                <button className="text-green-600">Accept</button>
                <button className="text-red-600">Reject</button>
                <button className="text-blue-600">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}