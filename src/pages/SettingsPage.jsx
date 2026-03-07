import { useState } from "react";
import { FaUser, FaBuilding, FaLock, FaBell } from "react-icons/fa";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    business: "XYZ Store",
    password: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Normally you’d send this to backend API
    alert("Settings updated successfully!");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow space-y-6 max-w-lg"
      >
        {/* Profile Name */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaUser className="mr-2 text-blue-600" /> Profile Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Business Name */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaBuilding className="mr-2 text-green-600" /> Business Name
          </label>
          <input
            type="text"
            name="business"
            value={formData.business}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>

        {/* Password */}
        <div>
          <label className="flex items-center text-gray-700 font-semibold mb-2">
            <FaLock className="mr-2 text-purple-600" /> Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center">
          <FaBell className="mr-2 text-orange-600" />
          <label className="text-gray-700 font-semibold mr-4">Notifications</label>
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="h-5 w-5 text-blue-600"
          />
          <span className="ml-2 text-gray-600">
            {formData.notifications ? "Enabled" : "Disabled"}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}