'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    if (trimmedEmail === 'maham@gmail.com' && trimmedPassword === 'maham') {
      router.push('/dashboard');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md outline-none text-gray-700"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md outline-none text-gray-700"
            />
          </div>
          <p className="text-center mb-4 text-blue-500">
            <Link href="/">Forgot password?</Link>
          </p>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            Login
          </button>
          <p className="text-center mt-4 mb-4 text-gray-600">
            Don&apos;t have an account?
            <Link href="/auth/signup" className="text-blue-500 ml-2">
              Signup
            </Link>
          </p>
          <div className="flex items-center justify-between my-4">
            <div className="h-[1px] w-full bg-gray-300"></div>
            <p className="px-2 text-gray-500">Or</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
          >
            <FaFacebook size={24} />
            Login with Facebook
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 py-3 mt-4 bg-gray-50 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-[#FFC107]" size={24} />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
