"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const loginImageUrl = "https://flyvia.s3.eu-north-1.amazonaws.com/auth/login.png";

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
        <div className="md:w-2/5 bg-linear-to-br from-white to-slate-50 p-8 md:p-12 flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TravelWise
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Welcome back</h1>
              <p className="text-slate-500">Sign in to access personalized travel experiences</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    required
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <Lock className="w-5 h-5 text-slate-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500" />
                  Remember me
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 px-6 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent" />
              <span className="px-4 text-sm text-slate-500">or continue with</span>
              <div className="flex-1 h-px bg-linear-to-l from-transparent via-slate-300 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="p-3.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3">
                <img src="/google.svg" alt="Google" className="w-5 h-5" />
                <span className="text-sm font-medium text-slate-700">Google</span>
              </button>
              <button className="p-3.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3">
                <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
                <span className="text-sm font-medium text-slate-700">Apple</span>
              </button>
            </div>

            <p className="mt-8 text-center text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        <div className="md:w-3/5 relative hidden md:block">
          <div className="absolute inset-0">
            <Image
              src={loginImageUrl}
              alt="Travel destination"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-blue-900/30 via-transparent to-purple-900/20" />
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end p-12 text-white">
            <div className="space-y-6 max-w-lg">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Member Access</span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Your next adventure
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-200 to-purple-200">awaits</span>
              </h2>
              <p className="text-lg opacity-90">
                Access exclusive deals, personalized recommendations, and premium travel planning tools.
              </p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">Join 50,000+ travelers</p>
                  <p className="text-sm opacity-80">Exploring the world with TravelWise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
