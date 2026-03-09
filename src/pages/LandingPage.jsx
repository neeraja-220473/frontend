import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaFacebook, FaBoxOpen, FaClipboardList, FaChartBar, FaFileInvoice, FaWarehouse } from "react-icons/fa";

import FeaturesPage from "./FeaturesPage";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import bg from "../backgroundimage.jpg";


export default function LandingPage() {
  // Features data
  const features = [
    {
      icon: <FaBoxOpen size={36} />,
      title: "Product Management",
      desc: "Manage products, categories, images, and stock info with ease.",
      gradient: "from-pink-400 via-red-400 to-yellow-400",
    },
    {
      icon: <FaClipboardList size={36} />,
      title: "Order Management",
      desc: "Track, approve, and manage all incoming and outgoing orders.",
      gradient: "from-green-400 via-teal-400 to-blue-400",
    },
    {
      icon: <FaFileInvoice size={36} />,
      title: "Billing & Invoices",
      desc: "Generate GST-compliant invoices and manage payments seamlessly.",
      gradient: "from-purple-400 via-pink-500 to-red-400",
    },
    {
      icon: <FaChartBar size={36} />,
      title: "Reports & Analytics",
      desc: "Get insights with colorful dashboards and actionable reports.",
      gradient: "from-indigo-400 via-purple-500 to-pink-400",
    },
    {
      icon: <FaWarehouse size={36} />,
      title: "Inventory Tracking",
      desc: "Monitor stock levels, receive low stock alerts, and manage warehouses.",
      gradient: "from-yellow-400 via-orange-400 to-red-400",
    },
  ];

  return (

     
  <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 via-purple-50 to-yellow-50 animate-gradient-xy">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-xl">
        <h1 className="text-2xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 animate-text">
          Inventa
        </h1>
        <nav className="space-x-4">
          <Link className="px-4 py-2 text-gray-700 hover:text-pink-500 transition-all duration-300" to="/login">Login</Link>
          <Link className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300" to="/register">Register</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-1 px-12 py-16 gap-8">
        <div className="max-w-lg space-y-6 animate-fadeInLeft">
          <h2 className="text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            Smart B2B Inventory & Billing Platform
          </h2>
          <p className="text-gray-700 text-lg">
            Manage Products, Orders, Billing, and Inventory in One Enterprise Workspace.
            Designed for supplier and buyer workflows, Inventa helps your team handle
            marketplace operations with fast billing, GST invoices, barcode checkout,
            and actionable reports.
          </p>
          <div className="flex space-x-4">
            <Link className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:scale-110 transition transform duration-300 animate-bounce" to="/register">
              Get Started
            </Link>
            <Link className="px-6 py-3 bg-gradient-to-r from-yellow-200 via-green-200 to-teal-300 text-gray-800 rounded-full shadow-lg hover:scale-110 transition transform duration-300" to="/buyer-dashboard/marketplace">
              Explore Products
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-10 md:mt-0 md:ml-12 animate-fadeInRight">
          <div className="w-96 h-64 bg-gradient-to-tr from-purple-300 via-pink-200 to-yellow-300 rounded-xl shadow-2xl flex items-center justify-center animate-pulse">
            <span className="text-gray-800 text-lg font-semibold"><span className="text-gray-800 text-lg font-semibold">
  <img
    src="/back.jpg"
    alt="Illustration"
    className="w-70 h-auto"
  />
</span></span>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text">
            Trusted by Businesses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Products Listed", from: "pink-400", to: "pink-600" },
              { value: "100+", label: "Active Suppliers", from: "purple-400", to: "purple-600" },
              { value: "2000+", label: "Orders Processed", from: "indigo-400", to: "indigo-600" },
            ].map((stat, i) => (
              <div key={i} className={`bg-gradient-to-r from-${stat.from} to-${stat.to} text-white rounded-xl p-6 shadow-2xl transform hover:scale-110 transition duration-300 animate-fadeInUp`}>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 animate-fadeIn">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Register & Setup", desc: "Create your business account as a buyer or supplier and set up your profile.", color: "from-pink-200 to-pink-400" },
              { step: 2, title: "Connect & Trade", desc: "Browse products, place orders, manage inventory, and handle billing seamlessly.", color: "from-purple-200 to-purple-400" },
              { step: 3, title: "Track & Grow", desc: "Monitor orders, view reports, and scale your business with actionable insights.", color: "from-yellow-200 to-yellow-400" },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4 animate-fadeInUp">
                <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-gradient-to-r ${item.color} shadow-xl animate-pulse`}>
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-yellow-50 animate-gradient-xy">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 animate-text">
            Platform Features
          </h2>
          <p className="text-gray-700 mt-4">
            Powerful tools for suppliers and buyers, all in one colorful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-rotate-3 bg-gradient-to-r ${feature.gradient} text-white animate-fadeInUp`}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4 mx-auto animate-pulse hover:animate-bounce hover:shadow-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold animate-text">Inventa</h2>
            <p className="text-sm text-white/70">Smart B2B Inventory & Billing Platform</p>
          </div>

          <div className="flex space-x-6 text-sm">
            <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
            <Link to="/login" className="hover:text-yellow-200 transition">Login</Link>
            <Link to="/register" className="hover:text-yellow-200 transition">Register</Link>
            <a href="#features" className="hover:text-yellow-200 transition">Features</a>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-300">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-white/70 mt-6">
          © {new Date().getFullYear()} Inventa. All rights reserved.
        </div>
      </footer>
    </div>
  );
}