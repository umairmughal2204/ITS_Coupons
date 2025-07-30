"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does CouponHunt verify the coupons?",
    answer: "We verify coupons through manual testing and merchant API integration to ensure accuracy.",
  },
  {
    question: "Is CouponHunt free to use?",
    answer: "Yes, 100% free for all users. No sign-up or subscription required.",
  },
  {
    question: "How often are new deals added?",
    answer: "We update deals daily to bring you the latest savings opportunities.",
  },
  {
    question: "Can I suggest a store or brand for inclusion?",
    answer: "Absolutely! Send your suggestions through our Contact page.",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-800 text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About CouponHunt</h1>
        <p className="max-w-2xl mx-auto text-lg mb-10">
          Empowering millions of shoppers to save money every day with verified coupons and exclusive deals across thousands of retailers.
        </p>
        <div className="flex flex-wrap justify-center gap-10 text-center text-white/90">
          <div>
            <div className="text-3xl font-bold">10M+</div>
            <p className="text-sm">Active Visitors</p>
          </div>
          <div>
            <div className="text-3xl font-bold">143K+</div>
            <p className="text-sm">Coupons Verified</p>
          </div>
          <div>
            <div className="text-3xl font-bold">$293M</div>
            <p className="text-sm">Money Saved</p>
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Tab buttons (non-functional static display) */}
        <div className="flex space-x-8 border-b text-sm font-medium mb-8">
          <button className="pb-2 border-b-2 border-purple-700 text-purple-700">Our Story</button>
          <button className="pb-2 hover:text-purple-600">Mission & Vision</button>
          <button className="pb-2 hover:text-purple-600">Our Values</button>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">How It All Started</h2>
            <p className="text-sm text-gray-600 mb-4">
              Founded in 2015, CouponHunt began as a simple idea: make saving money effortless. Since then, we’ve grown into a trusted destination for over 10 million users seeking verified, reliable coupons across thousands of brands.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Our platform is powered by smart technology and a dedicated team that works 24/7 to update, test, and verify coupon codes so users never miss a chance to save.
            </p>
            <p className="text-sm text-gray-600">
              Today, CouponHunt is a recognized leader in the deal discovery space — empowering users to stretch their spending and enjoy more for less.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow">
            <h3 className="font-semibold mb-4 text-purple-700">Key Milestones</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>2015</strong> – CouponHunt founded</li>
              <li><strong>2017</strong> – 1M+ users</li>
              <li><strong>2020</strong> – AI-powered coupon validation</li>
              <li><strong>2023</strong> – $250M+ user savings milestone</li>
              <li><strong>2024</strong> – Mobile app + international expansion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-white text-center">
          <TeamCard name="Sarah Chen" title="Co-founder & CEO" color="bg-blue-600" />
          <TeamCard name="Michael Rodriguez" title="Head of Product" color="bg-green-600" />
          <TeamCard name="Emily Johnson" title="Marketing Director" color="bg-orange-500" />
          <TeamCard name="David Kim" title="Growth Strategist" color="bg-yellow-500 text-black" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border rounded-lg">
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full text-left px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200"
              >
                {faq.question}
              </button>
              {openIndex === i && (
                <div className="px-4 py-3 text-sm text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-100 py-12 px-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Stay Updated with Our Latest Deals</h3>
        <p className="text-sm text-gray-600 mb-4">Join our newsletter for exclusive savings, new coupons, and more.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border rounded-md"
          />
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-md">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}

// Reusable team card
function TeamCard({ name, title, color }) {
  return (
    <div className={`p-6 rounded-lg ${color}`}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm mt-2">{title}</p>
    </div>
  );
}
