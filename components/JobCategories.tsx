export default function JobCategories() {
  const categories = [
    "Software Development",
    "Artificial Intelligence",
    "Data Science",
    "Cyber Security",
    "Cloud Computing",
    "UI/UX Design",
    "Digital Marketing",
    "DevOps",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Explore Job Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl text-center cursor-pointer transition"
            >
              <h3 className="font-semibold text-lg">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}