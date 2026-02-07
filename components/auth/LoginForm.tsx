"use client";

import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <form className="space-y-6" onSubmit={handleLogin}>
      <div className="space-y-2">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Mail className="w-4 h-4" />
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/50 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          required
        />
      </div>

      <div className="space-y-2 relative">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <Lock className="w-4 h-4" />
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full pl-11 pr-12 py-3.5 rounded-xl border border-slate-200 bg-white/50 text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          required
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3.5 px-6 bg-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign In"}
        <ArrowRight className="w-5 h-5" />
      </button>

      <p className="mt-8 text-center text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/auth/register" className="text-blue-600 font-semibold">
          Create account
        </Link>
      </p>
    </form>
  );
}
