import Navbar from "../../components/Navbar";

export default function PostJobPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8">
            Post a New Job
          </h1>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Enter Job Title"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Salary
              </label>
              <input
                type="text"
                placeholder="Enter Salary"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">
                Job Description
              </label>

              <textarea
                rows={5}
                placeholder="Describe the job..."
                className="w-full border rounded-lg p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
            >
              Post Job
            </button>
          </form>
        </div>
      </main>
    </>
  );
}