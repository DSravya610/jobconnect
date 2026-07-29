import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
            Contact Us
          </h1>

          <p className="text-center text-gray-600 mb-10">
            We'd love to hear from you! Fill out the form below and we'll get
            back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg p-3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

            <p className="mb-2">
              📧 Email: support@jobconnect.com
            </p>

            <p className="mb-2">
              📞 Phone: +91 98765 43210
            </p>

            <p>
              📍 Address: Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </main>
    </>
  );
}