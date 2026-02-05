import Link from "next/link";

export default function RentacarNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold mb-4">404</h1>
      <p className="text-gray-500 mb-8">The tool or page you are looking for could not be found.</p>

      <Link href="/" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
        Return to Home Page
      </Link>
    </div>
  );
}
