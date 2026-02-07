import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

const loginImageUrl = "https://flyvia.s3.eu-north-1.amazonaws.com/auth/login.png";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
        <div className="md:w-2/5 bg-linear-to-br from-white to-slate-50 p-8 md:p-12 flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
              TravelWise
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">Welcome back</h1>
            <p className="text-slate-500 mb-10">Sign in to access personalized travel experiences</p>

            <LoginForm />
          </div>
        </div>

        <div className="md:w-3/5 relative hidden md:block">
          <Image src={loginImageUrl} alt="Travel destination" fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-tr from-blue-900/30 via-transparent to-purple-900/20" />
        </div>
      </div>
    </div>
  );
}
