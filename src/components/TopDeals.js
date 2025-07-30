import React from "react";

const deals = Array(8).fill({
  title: "Planet Fitness",
  description: "Free Month with Black Card Membership",
});

const TopDeals = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Title centered */}
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-2">
        Top Deals
      </h2>

      {/* View All aligned right just under heading */}
      <div className="flex justify-end mb-4">
        <a
          href="#"
          className="text-sm text-purple-700 hover:underline"
        >
          VIEW ALL
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm flex flex-col"
          >
            <div className="h-28 bg-gray-300 rounded-t-lg"></div>
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="font-semibold text-sm mb-1">{deal.title}</h3>
                <p className="text-xs text-gray-700">{deal.description}</p>
              </div>
              <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full bg-gray-300 text-gray-700">
                Coupon Code
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
