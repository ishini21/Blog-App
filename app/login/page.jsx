'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      router.push(data.role === 'admin' ? '/admin' : '/');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
    <div className="max-w-md mx-auto p-6 shadow-sm rounded-lg">
      <h2 className="text-3xl text-blue-900 font-bold mb-4 text-center">Login</h2>
      <input className="border border-blue-100 p-2 w-full mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border border-blue-100 p-2 w-full mb-2" placeholder="Password" type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin} className="bg-blue-900 text-white p-2 w-full mt-4 text-lg">Login</button>
       <div className="">
            <p className="text-black text-center text-xs mt-4">
            Don't have an account? {""}
            <Link href='/signup'><span className='text-blue-900 cursor-pointer underline'>SignUp</span>
            </Link></p>
        </div>
    </div>
    </div>
  );
}
