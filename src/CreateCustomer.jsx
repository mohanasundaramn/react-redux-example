import { useState } from "react";

function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  function handleClick() {
    // Add logic to handle creating a new customer
  }

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-lg mb-4">Create new customer</h2>
      <div className="flex flex-col">
        <div>
          <label className="block mb-2">Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 w-72"
          />
        </div>
        <div>
          <label className="block mb-2">National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1 w-72"
          />
        </div>
        <button
          onClick={handleClick}
          className="mt-6 px-4 py-2 w-72 bg-blue-500 text-white rounded-md"
        >
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default CreateCustomer;
