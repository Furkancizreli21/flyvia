"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const loginImageUrl = "https://flyvia.s3.eu-north-1.amazonaws.com/auth/login.png";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setIsSuccess(true);

      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* LEFT SIDE: Brand Story */}
      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0 z-20 bg-blue-600/10 mix-blend-multiply" />
        <Image src={loginImageUrl} alt="background" fill className="object-cover" priority />
        <div className="absolute inset-0 z-30 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent" />
        <div className="absolute bottom-20 left-16 z-40 text-white">
          <div className="mb-6 h-1 w-20 bg-blue-500" />
          <h1 className="text-5xl font-extrabold tracking-tight leading-[1.1]">
            Set sail for <br /> new horizons.
          </h1>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-100">
          {isSuccess ? (
            <div className="text-center animate-in zoom-in duration-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">Welcome Aboard!</h2>
              <p className="mt-4 text-slate-500">
                Your account has been created successfully. <br />
                We are redirecting you to the login page...
              </p>
              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                <div className="h-full bg-blue-600 transition-all duration-3000 ease-linear w-full" />
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Create Account</h2>
                <p className="mt-2 text-slate-500">Your journey starts with a single click.</p>
              </div>

              {error && (
                <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600 border border-red-100 italic">⚠️ {error}</div>
              )}

              <form className="space-y-5" onSubmit={handleFormSubmit}>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none border transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none border transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Confirm Password</label>
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none border transition-all"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full rounded-xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Get Started"}
                </button>
              </form>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-50 px-2 text-slate-400">Or continue with</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
                  Google
                </button>
                <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
                  <img src="https://www.svgrepo.com/show/442938/apple-logo.svg" className="h-5 w-5" alt="Apple" />
                  Apple
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-bold text-blue-600 hover:underline ml-1">
                  Sign In
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
