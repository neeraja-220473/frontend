import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    business: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.business.trim()) newErrors.business = "Business name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone is required";
    else if (!/^\+?\d{10,}$/.test(formData.phone.replace(/\s/g, ""))) newErrors.phone = "Phone must be at least 10 digits";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!formData.role) newErrors.role = "Please select a role";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors({ form: data.message || "Registration failed. Please try again." });
        setLoading(false);
        return;
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      window.location.href = data.role === "supplier" ? "/supplier-dashboard" : "/buyer-dashboard";
    } catch (err) {
      setErrors({ form: "Unable to connect to server. Make sure the backend is running." });
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Create Business Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Business Name</label>
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.business ? 'border-red-500' : ''}`}
              placeholder="Your Company"
            />
            {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : ''}`}
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
              placeholder="+91 9876543210"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.password ? 'border-red-500' : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Select Role</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => handleRoleSelect("buyer")}
                className={`px-4 py-2 border rounded-md ${formData.role === "buyer" ? "bg-blue-100 border-blue-500" : "hover:bg-blue-100"}`}
              >
                Buyer
              </button>
              <button
                type="button"
                onClick={() => handleRoleSelect("supplier")}
                className={`px-4 py-2 border rounded-md ${formData.role === "supplier" ? "bg-blue-100 border-blue-500" : "hover:bg-blue-100"}`}
              >
                Supplier
              </button>
            </div>
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>
          {errors.form && (
            <p className="text-red-500 text-sm mb-3 text-center">{errors.form}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}