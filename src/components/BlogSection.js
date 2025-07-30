const dummyBlogs = [
  {
    id: 1,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "", // Placeholder for now
  },
  {
    id: 2,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "",
  },
  {
    id: 3,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "",
  },
  {
    id: 4,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "",
  },
  {
    id: 5,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "",
  },
  {
    id: 6,
    date: "26/07/2025",
    title: "Who has the best back to school sales?",
    image: "",
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-8">
        The Latest from our blogs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dummyBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-gray-100 rounded-md overflow-hidden shadow-md flex flex-col"
          >
            <div className="h-32 bg-gray-300"></div> {/* Placeholder image */}
            <div className="p-4 text-left">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h3 className="text-base font-semibold mb-2">{blog.title}</h3>
              <a
                href="#"
                className="text-purple-700 font-semibold hover:underline flex items-center"
              >
                Read More...{" "}
                <span className="ml-1 text-purple-700">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
