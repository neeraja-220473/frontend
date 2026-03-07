import { useParams } from "react-router-dom";
import { FaCheckCircle, FaTruck, FaBoxOpen, FaMapMarkerAlt } from "react-icons/fa";

export default function OrderTrackingPage() {
  const { orderId } = useParams();

  // Mock order tracking data
  const trackingSteps = [
    { step: "Order Placed", date: "2026-03-01", completed: true, icon: <FaBoxOpen /> },
    { step: "Supplier Accepted", date: "2026-03-02", completed: true, icon: <FaCheckCircle /> },
    { step: "Shipped", date: "2026-03-03", completed: true, icon: <FaTruck /> },
    { step: "Delivered", date: "2026-03-05", completed: false, icon: <FaMapMarkerAlt /> },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Tracking - #{orderId}</h2>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Order Progress</h3>
        <div className="space-y-4">
          {trackingSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${step.completed ? 'text-green-600' : 'text-gray-600'}`}>
                  {step.completed ? '[✔]' : '[ ]'} {step.step}
                </p>
                {step.date && <p className="text-sm text-gray-500">{step.date}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
        <p><strong>Order ID:</strong> #{orderId}</p>
        <p><strong>Supplier:</strong> ABC Traders</p>
        <p><strong>Products:</strong> Rice Bags, Cooking Oil</p>
        <p><strong>Total:</strong> ₹2720</p>
        <p><strong>Status:</strong> Shipped</p>
      </div>
    </div>
  );
}