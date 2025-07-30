'use client';

export default function FeaturedStores() {
  const stores = [
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    // Repeat to fill second row or dynamically render with multiple rows if needed
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
    '/logos/p1.png',
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">
        Featured Stores
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 justify-items-center px-4 md:px-16">
        {stores.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full border border-gray-300 shadow-sm overflow-hidden bg-white transition hover:scale-105"
          >
            <img src={logo} alt={`Store ${index + 1}`} className="w-16 md:w-20 object-contain" />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-lg text-sm md:text-base">
          View All Stores
        </button>
      </div>
    </section>
  );
}
