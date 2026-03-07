export default function CartPage() {
  const cart = [
    { product: "Rice", price: 1200, qty: 2 },
    { product: "Oil", price: 200, qty: 1 },
  ];
  const gst = 120;
  const total = 2720;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Cart</h2>
      <table className="w-full border mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Qty</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => (
            <tr key={i}>
              <td className="p-2 border">{item.product}</td>
              <td className="p-2 border">₹{item.price}</td>
              <td className="p-2 border">{item.qty}</td>
              <td className="p-2 border">₹{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>GST: ₹{gst}</p>
      <p className="font-bold">Total: ₹{total}</p>
      <div className="mt-4 flex space-x-4">
        <button className="bg-gray-200 px-4 py-2 rounded">Continue Shopping</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Checkout</button>
      </div>
    </div>
  );
}