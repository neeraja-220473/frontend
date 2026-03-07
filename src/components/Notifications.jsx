import { FaTimes } from "react-icons/fa";

export default function Notifications({ isOpen, onClose }) {
  const notifications = [
    { id: 1, message: "New order received from XYZ Store", type: "supplier", time: "2 hours ago" },
    { id: 2, message: "Low stock alert: Rice Bags", type: "supplier", time: "1 day ago" },
    { id: 3, message: "Order #1023 accepted", type: "buyer", time: "3 hours ago" },
    { id: 4, message: "Invoice #1023 generated", type: "buyer", time: "5 hours ago" },
  ];

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 bg-white shadow-lg rounded-lg w-80 max-h-96 overflow-y-auto z-50">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Notifications</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FaTimes />
        </button>
      </div>
      <div className="p-2">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No notifications</p>
        ) : (
          notifications.map((notif) => (
            <div key={notif.id} className="p-3 border-b hover:bg-gray-50 cursor-pointer">
              <p className="text-sm">{notif.message}</p>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}