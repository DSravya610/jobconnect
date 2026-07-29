import JobCard from "./JobCard";

export default function FeaturedJobs() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore some of the latest opportunities from top companies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JobCard
            id={1}
            title="Frontend Developer"
            company="Google"
            location="Hyderabad"
            salary="₹12 LPA"
          />

          <JobCard
            id={2}
            title="Java Developer"
            company="Microsoft"
            location="Bengaluru"
            salary="₹15 LPA"
          />

          <JobCard
            id={3}
            title="Python Developer"
            company="Amazon"
            location="Hyderabad"
            salary="₹10 LPA"
          />

          <JobCard
            id={4}
            title="Data Analyst"
            company="Infosys"
            location="Pune"
            salary="₹8 LPA"
          />

          <JobCard
            id={5}
            title="AI/ML Engineer"
            company="OpenAI"
            location="Remote"
            salary="₹20 LPA"
          />

          <JobCard
            id={6}
            title="Full Stack Developer"
            company="TCS"
            location="Chennai"
            salary="₹9 LPA"
          />
        </div>
      </div>
    </section>
  );
}