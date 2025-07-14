// "use client";
// import Image from "next/image";
// import { assets, blog_data } from "@/assets/assets";
// import React, { useEffect, useState } from "react";
// import Footer from "@/components/Footer";
// import axios from "axios";
// import Link from "next/link";

// function Page({ params }) {
//   const [data, setData] = useState(null);

//   const fetchBlogData = async () => {
//     try {
//       const response = await axios.get('/api/blog', {
//         params: {
//           id: params.id
//         }
//       });
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching blog data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogData();
//   }, [params.id]); // Add params.id as dependency

//   if (!data) return <div className="min-h-screen">Loading...</div>;

//   return (
//     <>
//       <div className="bg-blue-50 py-5 px-5 md:px-12 lg:px-28">
//         <div className="flex justify-between items-center">
//           <Link href='/'>
//             <Image
//               src={assets.logo}
//               width={180}
//               height={40}
//               alt="Website logo"
//               className="w-[130px] sm:w-auto"
//               priority // Added priority for LCP image
//             />
//           </Link>

//           <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#0a28d1] bg-blue-100">
//             Get started
//             <Image src={assets.arrow} alt="Arrow icon" width={20} height={20} />
//           </button>
//         </div>
//         <div className="text-center my-24">
//           <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] text-blue-900 mx-auto">
//             {data.title}
//           </h1>
//           <Image
//             src={data.authorImg}
//             width={60}
//             height={60}
//             alt="Author profile"
//             className="mx-auto mt-6 border border-white rounded-full"
//           />
//           <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
//             {data.author}
//           </p>
//         </div>
//       </div>
//       <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
//         <Image 
//           src={data.image} 
//           alt="Blog post image" 
//           width={1280} 
//           height={720} 
//           className="border-4 border-white"
//           priority // Added priority for LCP image
//         />
       
//        <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
      
//         <div className="my-24">
//           <p className="text-black font font-semibold my-4">Share this article on social media</p>
//           <div className="flex gap-4">
//             <Image src={assets.facebook_icon} width={50} height={50} alt="Facebook"/>
//             <Image src={assets.twitter_icon} width={50} height={50} alt="Twitter"/>
//             <Image src={assets.googleplus_icon} width={50} height={50} alt="Google Plus"/>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// }

// export default Page;

"use client";
import Image from "next/image";
import { assets, blog_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import axios from "axios";
import Link from "next/link";

function Page({ params }) {
  const [data, setData] = useState(null);
  
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get('/api/blog', {
        params: {
          id: unwrappedParams.id // Use unwrapped params
        }
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [unwrappedParams.id]); // Use unwrapped params in dependency array

  if (!data) return <div className="min-h-screen">Loading...</div>;

  return (
    <>
      <div className="bg-blue-50 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href='/'>
            <Image
              src={assets.logo}
              width={180}
              height={40}
              alt="Website logo"
              className="w-[130px] sm:w-auto"
              priority // Added priority for LCP image
            />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#0891b2] bg-white">
            Get started
            <Image src={assets.arrow} alt="Arrow icon" width={20} height={20} />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] text-[#0891b2] mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.authorImg}
            width={60}
            height={60}
            alt="Author profile"
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image 
          src={data.image} 
          alt="Blog post image" 
          width={1280} 
          height={720} 
          className="border-4 border-white"
          priority // Added priority for LCP image
        />
       
       <div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
      
        <div className="my-24">
          <p className="text-black font font-semibold my-4">Share this article on social media</p>
          <div className="flex gap-4">
            <Image src={assets.facebook_icon} width={50} height={50} alt="Facebook"/>
            <Image src={assets.twitter_icon} width={50} height={50} alt="Twitter"/>
            <Image src={assets.googleplus_icon} width={50} height={50} alt="Google Plus"/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Page;