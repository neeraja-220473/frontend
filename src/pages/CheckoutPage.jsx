export default function CheckoutPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Delivery Address" className="w-full border px-3 py-2 rounded" />
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">Order Summary</h3>
          <p>Rice x2 = ₹2400</p>
          <p>Oil x1 = ₹200</p>
          <p>GST = ₹120</p>
          <p className="font-bold">Total = ₹2720</p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Confirm Purchase</button>
      </form>
    </div>
  );
}