import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
  href="/"
  className="text-3xl font-extrabold tracking-wide"
>
  Job<span className="text-yellow-300">Connect</span>
</Link>
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide hover:text-yellow-300 transition"
        >
          🚀 JobConnect
        </Link>

        {/* Navigation */}
        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/jobs" className="hover:text-yellow-300 transition">
              Jobs
            </Link>
          </li>

          <li>
            <Link href="/post-job" className="hover:text-yellow-300 transition">
              Post Job
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-yellow-300 transition">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}