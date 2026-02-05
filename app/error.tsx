"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-gray-500">{error.message}</p>

      <button onClick={() => reset()} className="rounded bg-blue-600 px-4 py-2 text-white">
        Try Again
      </button>
    </div>
  );
}
