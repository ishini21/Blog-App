
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.password.trim()) {
      newErrors.password = 'Password is required';
    } else if(form.password.length < 3) {
      newErrors.password = 'Password must be at least 3 characters';
    } 
    
    if (!form.role) {
      newErrors.role = 'Please select a role';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        router.push(data.role === 'admin' ? '/admin' : '/');
      } else {
        setErrors({ general: data.message || 'Signup failed' });
      }
    } catch (error) {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-300">
      <div className="w-[400px] md:max-w-md mx-auto p-6 bg-transparent text-center shadow-sm rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-[#0891b2]">Sign Up</h2>
        
        <form onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {errors.general}
            </div>
          )}
          
          <div className="mb-4">
            <input 
              className={`bg-white border ${errors.name ? 'border-red-500' : 'border-blue-100'} focus:border-none focus:outline-none p-2 w-full`}
              placeholder="Name" 
              type="text"
              value={form.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 text-left">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <input 
              className={`bg-white border ${errors.email ? 'border-red-500' : 'border-blue-100'} focus:border-none focus:outline-none p-2 w-full`}
              placeholder="Email" 
              type="email"
              value={form.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <input 
              className={`bg-white border ${errors.password ? 'border-red-500' : 'border-blue-100'} focus:border-none focus:outline-none p-2 w-full`}
              placeholder="Password" 
              type="password"
              value={form.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 text-left">{errors.password}</p>
            )}
          </div>

          <div className="mb-4">
            <select 
              className={`bg-white border ${errors.role ? 'border-red-500' : 'border-blue-100'} focus:border-none focus:outline-none p-2 w-full`}
              value={form.role}
              onChange={(e) => handleInputChange('role', e.target.value)}
              disabled={isLoading}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1 text-left">{errors.role}</p>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`${isLoading ? 'bg-blue-500' : 'bg-[#0891b2] hover:bg-[#0891b2]/90'} text-white p-2 w-full mt-4 text-lg transition-colors duration-200`}
          >
            {isLoading ? 'Signing up...' : 'Signup'}
          </button>
        </form>

        <div className="mt-4">
          <p className="text-black text-center text-xs">
            Already have an account?{" "}
            <Link href='/login'>
              <span className='text-blue-950 cursor-pointer underline hover:text-blue-800'>
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;