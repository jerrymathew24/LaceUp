import { useState } from "react";

export const AddressForm = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    street: "",
    city: "",
    zip: "",
    country: "",
    ...initialData,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-4 shadow rounded space-y-4"
    >
        <h2>Add Address</h2>
      {[
        ["fullName", "Full Name"],
        ["street", "Street Address"],
        ["city", "City"],
        ["zip", "ZIP Code"],
        ["country", "Country"],
      ].map(([field, label]) => (
        <input
          key={field}
          name={field}
          placeholder={label}
          value={formData[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Save Address
      </button>
    </form>
  );
};
