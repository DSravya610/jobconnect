import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedJobs from "../components/FeaturedJobs";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import JobCategories from "../components/JobCategories"
import TopCompanies from "../components/TopCompanies";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedJobs />
      <Footer />
      <SearchBar />
      <JobCategories />
      <TopCompanies />
      <main className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            JobConnect Portal
          </h1>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Find Your Dream Job Today
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Discover thousands of job opportunities from top companies.
          </p>

          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Browse Jobs
            </button>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
              Post a Job
            </button>
          </div>
        </div>
      </main>
    </>
  );
}