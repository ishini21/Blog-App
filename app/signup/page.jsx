// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Signup() {
//   const router = useRouter();
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });

//   const handleSignup = async () => {
//     const res = await fetch('/api/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       localStorage.setItem('user', JSON.stringify(data));
//       router.push(data.role === 'admin' ? '/admin' : '/');
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//   <div className="min-h-screen flex items-center justify-center ">
//     <div className="max-w-md mx-auto p-6 bg-white text-center shadow-sm rounded-lg">
//       <h2 className="text-3xl font-bold mb-4 text-blue-900">Sign Up</h2>
//       <input className="border border-blue-100 p-2 w-full mb-2" placeholder="Name"
//         onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       <input className="border border-blue-100 p-2 w-full mb-2" placeholder="Email" type="email"
//         onChange={(e) => setForm({ ...form, email: e.target.value })} />
//       <input className="border border-blue-100 p-2 w-full mb-2" placeholder="Password" type="password"
//         onChange={(e) => setForm({ ...form, password: e.target.value })} />
//       <select className="border border-blue-100 p-2 w-full mb-2"
//         onChange={(e) => setForm({ ...form, role: e.target.value })}>
        
//         <option value="user">User</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button onClick={handleSignup} className="bg-blue-900 text-white p-2 w-full mt-4 text-lg">Signup</button>
//     </div>
//     </div>
//   );
// }
