import { Link } from "react-router-dom";

export default function OrdersPage() {
  const orders = [
    { id: "1023", supplier: "ABC Traders", products: "Rice, Oil", total: 2720, status: "Shipped" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      {orders.map((o, i) => (
        <div key={i} className="bg-white p-4 rounded shadow mb-4">
          <p><strong>Order ID:</strong> #{o.id}</p>
          <p><strong>Supplier:</strong> {o.supplier}</p>
          <p><strong>Products:</strong> {o.products}</p>
          <p><strong>Total:</strong> ₹{o.total}</p>
          <p><strong>Status:</strong> {o.status}</p>
          <Link to={`/order-tracking/${o.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Track Order
          </Link>
        </div>
      ))}
    </div>
  );
}