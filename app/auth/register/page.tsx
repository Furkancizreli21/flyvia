import Image from "next/image";
import RegisterForm from "@/components/auth/RegisterForm";

const loginImageUrl = "https://flyvia.s3.eu-north-1.amazonaws.com/auth/login.png";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
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
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
