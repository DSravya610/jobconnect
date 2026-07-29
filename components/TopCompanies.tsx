export default function TopCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Hiring Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {companies.map((company) => (
            <div
              key={company}
              className="border rounded-xl p-8 text-center shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {company}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}