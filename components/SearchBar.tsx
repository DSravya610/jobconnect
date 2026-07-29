export default function SearchBar() {
  return (
    <section className="bg-white py-10 shadow-md">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Search Your Dream Job
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Location"
            className="flex-1 border rounded-lg p-3"
          />

          <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}