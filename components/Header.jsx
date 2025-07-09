import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    router.push("/login"); // Redirect to login
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    const response = await axios.post("/api/email", formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    } else {
      toast.error("Error");
    }
  };

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <div className="flex gap-4">
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#0a28d1] bg-blue-100 ">
          Get started
          <Image src={assets.arrow} alt="" />
        </button>
                
        {/* Optional: Only show if logged in */}
        {typeof window !== 'undefined' && localStorage.getItem('user') && (
          <button
            onClick={handleLogout}
            className="bg-red-400 hover:bg-red-500 py-0.5 px-6 rounded text-white"
          >
            Logout
          </button>
        )}
     </div>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium text-blue-900">
          Latest Blogs
        </h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem dolor unde nobis fugit dignissimos blanditiis veritatis
          commodi! Cum voluptatum quod esse error similique aut. Doloribus optio
          debitis quod atque expedita?
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#0a28d1]"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />

          <button
            type="submit"
            className="border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white "
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
