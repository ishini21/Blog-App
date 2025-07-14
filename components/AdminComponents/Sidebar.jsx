"use client";
import React from "react";
import { assets } from "../../assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data
    router.push("/login"); // Redirect to login
  };

  return (
    <div className="flex flex-col bg-gradient-to-br from-green-100 to-blue-300">
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link
            href="/admin/addProduct"
            className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#0891b2]"
          >
            <Image src={assets.add_icon} alt="" width={28} />
            <p>Add blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#0891b2]"
          >
            <Image src={assets.blog_icon} alt="" width={28} />
            <p>Blog list</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#0891b2]"
          >
            <Image src={assets.email_icon} alt="" width={28} />
            <p>Subscriptions</p>
          </Link>

          {/*Only show if logged in */}
          {typeof window !== "undefined" && localStorage.getItem("user") && (
            <button
              onClick={handleLogout}
              className="bg-red-400 hover:bg-red-500 px-4 py-2 rounded mt-60 w-full text-white"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
