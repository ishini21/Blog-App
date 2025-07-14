//'use client'
// import BlogItem from "@/components/BlogItem";
// import BlogList from "@/components/BlogList";
// import Footer from "@/components/Footer";
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from "react";
// import Header from "@/components/Header";
// import { ToastContainer} from 'react-toastify';
// //1vsgkmI6ThlG6GTq


// export default function Home() {
//     const router = useRouter();
    
//      useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user) {
//       router.push('/login');
//     } else if (user.role === 'admin') {
//       router.push('/admin');
//     }
//   }, []);

//   return (
//     <>
//     <ToastContainer theme="dark"/>
//     <Header/>
//     <BlogList/>
//     <Footer/>
    
//     </>

    
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import BlogList from '@/components/BlogList';
import Footer from '@/components/Footer';

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-200 to-blue-400 text-3xl text-[#0891b2] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <div className='bg-gradient-to-br from-green-100 to-blue-300'>
      <Header />
      <BlogList />
      <Footer />
      </div>
    </>
  );
}
