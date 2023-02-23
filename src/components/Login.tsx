"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import logo from "../../public/chatgpt-icon.webp";

const Login = () => {
  return (
    <div className="bg-slate-800 h-screen flex flex-col justify-center items-center text-center">
      <Image src={logo} width={300} height={300} alt="logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse p-5"
        onClick={() => signIn("google")}
      >
        Sign In to use ChatGPT
      </button>
    </div>
  );
};

export default Login;
