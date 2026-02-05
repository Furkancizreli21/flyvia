import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you’re looking for doesn’t exist.</p>

      <Link href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Go back home
      </Link>
    </div>
  );
}
