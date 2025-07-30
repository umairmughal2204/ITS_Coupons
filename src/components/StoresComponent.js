import React from "react";

// Define labels in the explicit button-by-button order, matching your screenshot
const RECENTLY_UPDATED_LABELS = [
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co."
];

const POPULAR_LABELS = [
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co.",
  "AllModern", "Joss & Main", "Collar & Co.", "AllModern", "Joss & Main", "Collar & Co."
];

const ButtonGrid = ({ labels }) => (
  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
    {labels.map((label, idx) => (
      <button
        key={idx}
        className="py-2 px-6 rounded-md border border-gray-300 bg-white shadow-sm hover:bg-gray-100 transition"
      >
        {label}
      </button>
    ))}
  </div>
);

const StoresComponent = () => (
  <div className="w-full max-w-6xl mx-auto py-12">
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Store Recently Updated</h2>
      <div className="flex justify-center">
        <ButtonGrid labels={RECENTLY_UPDATED_LABELS} />
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">Popular Stores</h2>
      <div className="flex justify-center">
        <ButtonGrid labels={POPULAR_LABELS} />
      </div>
    </div>
  </div>
);

export default StoresComponent;
