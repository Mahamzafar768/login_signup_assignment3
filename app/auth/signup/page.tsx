'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password && confirmPassword && password === confirmPassword) {
      alert('Account created successfully');
      router.push('/auth/login');
    } else {
      alert('Password does not match');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-200 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Signup</h1>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              type="email"
              name="uemail"
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
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md outline-none text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition text-lg font-semibold"
          >
            Signup
          </button>
          <p className="text-center mt-4 mb-4 text-gray-600">
            Already have an account?
            <Link href="/auth/login" className="text-blue-500 ml-2">
              Login
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
            Signup with Facebook
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center gap-4 py-3 mt-4 bg-gray-50 text-gray-800 border-2 border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-[#FFC107]" size={24} />
            Signup with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
