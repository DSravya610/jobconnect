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
              title="AI Engineer"
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
      </main>
    </>
  );
}