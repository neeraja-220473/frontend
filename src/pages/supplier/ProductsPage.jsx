export default function ProductsPage() {
  const products = [
    { name: "Rice Bags", price: 1200, stock: 50 },
    { name: "Cooking Oil", price: 200, stock: 100 },
    { name: "Soap", price: 40, stock: 300 },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Product Management</h2>
      <div className="flex space-x-4 mb-4">
        <input type="text" placeholder="Search Product" className="border px-3 py-2 rounded" />
        <button className="bg-indigo-600 text-white px-4 py-2 rounded">Add Product</button>
      </div>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">₹{p.price}</td>
              <td className="p-2 border">{p.stock}</td>
              <td className="p-2 border space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}