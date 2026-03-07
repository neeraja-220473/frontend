export default function InventoryPage() {
  const inventory = [
    { product: "Rice Bags", stock: 50, status: "Normal" },
    { product: "Oil Bottles", stock: 8, status: "Low Stock" },
    { product: "Soap", stock: 200, status: "Normal" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Inventory</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Product</th>
            <th className="p-2 border">Available Stock</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, i) => (
            <tr key={i}>
              <td className="p-2 border">{item.product}</td>
              <td className="p-2 border">{item.stock}</td>
              <td className={`p-2 border ${item.status === "Low Stock" ? "text-red-600" : "text-green-600"}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}