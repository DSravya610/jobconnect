import Link from "next/link";
type JobCardProps = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
};

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
}: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">
        {title}
      </h2>

      <p className="text-gray-700 mb-2">
        <strong>Company:</strong> {company}
      </p>

      <p className="text-gray-700 mb-2">
        <strong>Location:</strong> {location}
      </p>

      <p className="text-green-600 font-semibold mb-4">
        Salary: {salary}
      </p>

      <Link href={`/jobs/${id}`}>
  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
    View Details
  </button>
</Link>
    </div>
  );
}