'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });

  const handleSignup = async () => {
    const res = await fetch('/api/auth/signup', {
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
    <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-300 ">
    <div className="max-w-md mx-auto p-6 bg-transparent text-center shadow-sm rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-[#0891b2]">Sign Up</h2>
      <input className="bg-white border border-blue-100 focus:border-none focus:outline-none p-2 w-full mb-2" placeholder="Name" required
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="bg-white border border-blue-100 focus:border-none focus:outline-none p-2 w-full mb-2" placeholder="Email" type="email" required
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="bg-white border border-blue-100 focus:border-none focus:outline-none p-2 w-full mb-2" placeholder="Password" type="password" required
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select className="bg-white border border-blue-100 focus:border-none focus:outline-none p-2 w-full mb-2" required
        onChange={(e) => setForm({ ...form, role: e.target.value })}>
        
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleSignup} className="bg-[#0891b2] text-white p-2 w-full mt-4 text-lg">Signup</button>
       <div className="">
            <p className="text-black text-center text-xs mt-4 ">
            Already have an account? {""}
            <Link href='/login'><span className='text-blue-950 cursor-pointer underline'>Login</span>
            </Link></p>
        </div>
    </div>
    </div>
    </>
  );
}
