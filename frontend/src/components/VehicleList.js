import React, { useEffect, useState } from 'react';

function VehicleList({ onEdit }) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/vehicles')
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error('Error fetching vehicles:', err));
  }, []); // ✅ Add dependency array

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="text-orange-500">Vehicle</span> List
        </h2>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Main Type</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Sub Type</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Vehicle Number</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Purchase Price</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.length > 0 ? (
                vehicles.map((v) => (
                  <tr
                    key={v._id}
                    className="hover:bg-orange-50 dark:hover:bg-gray-900 transition-colors duration-200"
                  >
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">{v.mainType}</td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">{v.subType}</td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">{v.vehicleNumber}</td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700">
                      Rs. {v.purchasePrice}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200 dark:border-gray-700 text-center">
                      <button
                        onClick={() => onEdit(v)}
                        className="bg-orange text-white font-semibold px-4 py-1.5 rounded-full shadow-md hover:bg-orange-600 dark:hover:bg-orange-400 transition-all duration-200"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500 dark:text-gray-400">
                    No vehicles found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
