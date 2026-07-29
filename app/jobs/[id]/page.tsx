import Navbar from "../../../components/Navbar";

export default function JobDetailsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Frontend Developer
          </h1>

          <p className="text-gray-700 mb-2">
            <strong>Company:</strong> Google
          </p>

          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> Hyderabad
          </p>

          <p className="text-green-600 font-semibold mb-4">
            Salary: ₹12 LPA
          </p>

          <hr className="my-6" />

          <h2 className="text-2xl font-bold mb-3">
            Job Description
          </h2>

          <p className="text-gray-700 leading-8">
            We are looking for a passionate Frontend Developer with experience
            in React, Next.js, TypeScript, and Tailwind CSS. You will work with
            a collaborative team to build modern, responsive web applications.
          </p>

          <button className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800">
            Apply Now
          </button>

        </div>
      </main>
    </>
  );
}