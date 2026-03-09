import { FaSearch, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function ProductsPage() {
  const products = [
    { name: "Rice Bags", price: 1200, stock: 50 },
    { name: "Cooking Oil", price: 200, stock: 100 },
    { name: "Soap", price: 40, stock: 300 },
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">

      {/* Page Title */}
      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        📦 Product Management
      </h2>

      {/* Search + Add */}
      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center bg-white shadow rounded-lg px-3 py-2 w-72">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search product..."
            className="outline-none w-full"
          />
        </div>

        <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition">
          <FaPlus />
          <span>Add Product</span>
        </button>

      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">

        <table className="w-full">

          <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <tr>
              <th className="p-4 text-left">Product</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map((p, i) => (
              <tr
                key={i}
                className={`border-b hover:bg-indigo-50 transition duration-300 ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >

                <td className="p-4 font-semibold text-gray-700">
                  📦 {p.name}
                </td>

                <td className="p-4 text-blue-600 font-bold">
                  ₹{p.price}
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      p.stock < 60
                        ? "bg-red-200 text-red-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {p.stock} units
                  </span>
                </td>

                <td className="p-4 space-x-3">

                  <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <FaEdit /> Edit
                  </button>

                  <button className="text-red-600 hover:text-red-800 flex items-center gap-1">
                    <FaTrash /> Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}