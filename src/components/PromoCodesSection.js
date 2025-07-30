import React from "react";

const coupons = Array(8).fill({
  brand: "Nike",
  offer: "20% OFF store Wide + Free Shipping Jul 2025",
  expires: "Soon",
});

const PromoCodesSection = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-700 text-center mb-2">
          Top Coupons & Promo Codes
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
          {coupons.map((coupon, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm flex flex-col"
            >
              <div className="p-4 flex flex-col justify-between h-full">
                {/* Brand & Thumbnail */}
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 bg-purple-700 rounded-md mr-3"></div>
                  <span className="text-purple-700 font-semibold text-sm">
                    {coupon.brand}
                  </span>
                </div>

                {/* Offer Details */}
                <p className="text-sm font-semibold mb-2">{coupon.offer}</p>

                <span className="text-xs text-purple-600 font-medium mb-4">
                  Expires: <span className="font-bold">{coupon.expires}</span>
                </span>

                {/* Action Button */}
                <button className="w-full mt-auto bg-gray-200 text-gray-800 font-semibold text-xs rounded-lg py-2 hover:bg-purple-200 transition">
                  Show Coupon Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoCodesSection;
