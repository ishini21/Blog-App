"use client";
import Image from "next/image";
import { assets, blog_data } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Link from "next/link";

function page({ params }) {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(params.id) === blog_data[i].id) {
        setData(blog_data[i]);

        console.log(blog_data[i]);
        break;
      }
    }
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  return ( data ? 
    <>
      <div className="bg-blue-50 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href='/'>
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
          </Link>

          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#0a28d1]  bg-blue-100 ">
            Get started
            <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] text-blue-900 mx-auto">
            {data.title}
          </h1>
          <Image
            src={data.author_img}
            width={60}
            height={60}
            alt=""
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
      <Image src={data.image} alt="" width={1280} height={720} className="border-4 border-white"/>
      <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
      <p>{data.description}</p>
      <h3 className="my-5 text-[18px] font-semibold">Step 1: Self-Reflection and Goal Setting</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam unde repellat placeat aperiam reprehenderit impedit laudantium delectus, expedita commodi deleniti labore ab, nemo eum nulla sapiente, ut modi voluptas!</p>
        <h3 className="my-5 text-[18px] font-semibold">Step 2: Self-Reflection and Goal Setting</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam unde repellat placeat aperiam reprehenderit impedit laudantium delectus, expedita commodi deleniti labore ab, nemo eum nulla sapiente, ut modi voluptas!</p>
      <h3 className="my-5 text-[18px] font-semibold">Step 3: Self-Reflection and Goal Setting</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam unde repellat placeat aperiam reprehenderit impedit laudantium delectus, expedita commodi deleniti labore ab, nemo eum nulla sapiente, ut modi voluptas!</p>
      <h3 className="my-5 text-[18px] font-semibold">Conclution:</h3>
      <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aliquam unde repellat placeat aperiam reprehenderit impedit laudantium delectus, expedita commodi deleniti labore ab, nemo eum nulla sapiente, ut modi voluptas!</p>
    
    <div className="my-24">
      <p className="text-black font font-semibold my-4">Share this article on social media</p>
      <div className="flex">
        <Image src={assets.facebook_icon} width={50} alt=""/>
        <Image src={assets.twitter_icon} width={50} alt=""/>
        <Image src={assets.googleplus_icon} width={50} alt=""/>
      </div>
    </div>
    </div>
    <Footer/>
    </>
   : 
    <></>
  )
}

export default page;
