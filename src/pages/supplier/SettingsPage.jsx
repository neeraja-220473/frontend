import { useState } from "react";
import { FaBuilding, FaEnvelope, FaLock, FaFileInvoice } from "react-icons/fa";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    business: "ABC Traders",
    email: "supplier@example.com",
    gst: "22AAAAA0000A1Z5",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Supplier Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-6 max-w-lg"
      >
        {/* Business Profile */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaBuilding className="mr-2 text-indigo-600" /> Business Name
          </label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Contact Email */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaEnvelope className="mr-2 text-green-600" /> Contact Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        {/* GST Information */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaFileInvoice className="mr-2 text-purple-600" /> GST Number
          </label>
          <input
            type="text"
            name="gst"
            value={formData.gst}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaLock className="mr-2 text-red-600" /> Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}