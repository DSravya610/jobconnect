import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
            About JobConnect
          </h1>

          <p className="text-lg text-gray-700 leading-8 mb-6">
            JobConnect is a modern job portal that connects talented job seekers
            with leading companies. Our platform makes it easy to search for jobs,
            post new job openings, and discover career opportunities.
          </p>

          <p className="text-lg text-gray-700 leading-8 mb-6">
            Whether you are a student, a fresher, or an experienced professional,
            JobConnect helps you find the right opportunity to grow your career.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-blue-700">500+</h2>
              <p className="text-gray-700 mt-2">Active Jobs</p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-green-700">100+</h2>
              <p className="text-gray-700 mt-2">Partner Companies</p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-yellow-700">10K+</h2>
              <p className="text-gray-700 mt-2">Registered Users</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}