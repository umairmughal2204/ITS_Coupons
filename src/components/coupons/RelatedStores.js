import React from "react";

// Replace these paths with actual logo file locations
const stores = [
  { name: "Starbucks", logo: "/logos/p1.png" },
  { name: "Netflix", logo: "/logos/netflix.png" },
  { name: "Walmart Grocery", logo: "/logos/walmart.png" },
  { name: "Ray-Ban", logo: "/logos/rayban.png" },
  { name: "Emirates", logo: "/logos/Emirates.png" },
  { name: "Origin", logo: "/logos/origin.png" },
];

const RelatedStores = () => (
  <div className="w-full bg-white rounded-xl shadow-md py-10 px-6">
    {/* Section Heading */}
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
      Related Stores
    </h2>

    {/* Stores Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-[1280px] mx-auto">
      {stores.map((store, i) => (
        <div
          className="flex flex-col items-center"
          key={i}
          style={{ minWidth: "150px" }}
        >
          {/* Larger logo box */}
          <div className="bg-white shadow border border-gray-200 rounded-2xl h-28 w-28 flex items-center justify-center mb-3">
            <img
              src={store.logo}
              alt={store.name}
              className="h-20 w-20 object-contain"
            />
          </div>
          {/* Store Name */}
          <div className="text-sm text-purple-800 font-semibold text-center">
            {store.name}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedStores;
