import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Find Your Dream Job Today
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Connect with top companies, discover exciting opportunities,
          and take the next step in your career with JobConnect.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/jobs"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            Browse Jobs
          </Link>

          <Link
            href="/post-job"
            className="bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Post a Job
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-200">Available Jobs</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="text-gray-200">Top Companies</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p className="text-gray-200">Registered Users</p>
          </div>
        </div>
      </div>
    </section>
  );
}