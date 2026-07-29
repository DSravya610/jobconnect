import Navbar from "../../components/Navbar";
import JobCard from "../../components/JobCard";

export default function JobsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-10">
            Available Jobs
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <JobCard
              title="Frontend Developer"
              company="Google"
              location="Hyderabad"
              salary="₹12 LPA"
            />

            <JobCard
              title="Java Developer"
              company="Microsoft"
              location="Bengaluru"
              salary="₹15 LPA"
            />

            <JobCard
              title="Python Developer"
              company="Amazon"
              location="Hyderabad"
              salary="₹10 LPA"
            />

            <JobCard
              title="Data Analyst"
              company="Infosys"
              location="Pune"
              salary="₹8 LPA"
            />

            <JobCard
              title="AI Engineer"
              company="OpenAI"
              location="Remote"
              salary="₹20 LPA"
            />

            <JobCard
              title="Full Stack Developer"
              company="TCS"
              location="Chennai"
              salary="₹9 LPA"
            />
          </div>
        </div>
      </main>
    </>
  );
}