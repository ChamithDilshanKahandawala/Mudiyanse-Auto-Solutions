import React, { useState } from "react";

function AddVehicle() {
  const [form, setForm] = useState({
    mainType: "",
    subType: "",
    vehicleNumber: "",
    photo: "",
    purchasePrice: "",
  });

  const subTypeOptions = {
    "Indian Bike": ["Dio", "CT100", "FZ", "Pleasure"],
    "Japan Bike": ["Hornet", "WRX", "D-Tracker", "Jade"],
    "3-Wheel": ["2-Stroke", "4-Stroke"],
    Car: ["WagonR", "FB15", "Lancer", "Vitz"],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "mainType") {
      setForm((prev) => ({ ...prev, subType: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      purchasePrice: Number(form.purchasePrice),
    };
    try {
      const res = await fetch("http://localhost:5000/api/vehicles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        alert("Vehicle added successfully");
        setForm({
          mainType: "",
          subType: "",
          vehicleNumber: "",
          photo: "",
          purchasePrice: "",
        });
      } else {
        alert("Failed to add vehicle");
      }
    } catch (err) {
      alert("Server Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-100 to-orange-300 dark:from-gray-900 dark:to-black p-6">
      <form
        className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-orange-600 dark:text-orange mb-6">
          Add Vehicle
        </h2>

        {/* Main Type */}
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Main Type
          </span>
          <select
            className="w-full mt-2 p-3 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange focus:outline-none"
            name="mainType"
            value={form.mainType}
            onChange={handleChange}
            required
          >
            <option  value="">Select</option>
            {Object.keys(subTypeOptions).map((type) => (
              <option  key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        {/* Sub Type */}
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Sub Type
          </span>
          <select
            className="w-full mt-2 p-3 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange focus:outline-none"
            name="subType"
            value={form.subType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {subTypeOptions[form.mainType]?.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </label>

        {/* Vehicle Number */}
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Vehicle Number
          </span>
          <input
            className="w-full mt-2 p-3 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange focus:outline-none"
            name="vehicleNumber"
            value={form.vehicleNumber}
            onChange={handleChange}
            required
          />
        </label>

        {/* Photo URL */}
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Photo URL
          </span>
          <input
            className="w-full mt-2 p-3 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange focus:outline-none"
            name="photo"
            value={form.photo}
            onChange={handleChange}
          />
        </label>

        {/* Purchase Price */}
        <label className="block mb-6">
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Purchase Price
          </span>
          <input
            className="w-full mt-2 p-3 border rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange focus:outline-none"
            name="purchasePrice"
            type="number"
            value={form.purchasePrice}
            onChange={handleChange}
            required
          />
        </label>

        {/* Button */}
        <button
          className="w-full bg-orange text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange2 hover:shadow-lg transition-all duration-200"
          type="submit"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default AddVehicle;
