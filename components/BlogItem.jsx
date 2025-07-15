import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className="relative max-w-[330px] sm:max-w-[300px] bg-white border border-gray-300 rounded-lg shadow-md transform transition-transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] duration-300">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title || "Blog post image"}
          width={400}
          height={400}
          className="border rounded-t-lg p-2"
        />
      </Link>

      <p className="ml-5 mt-3 px-2 py-1 inline-block bg-[#0891b2] text-white text-sm rounded-sm w-fit">
        {category}
      </p>

      <div className="p-5 pb-14"> 
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p
          className="text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{
            __html:
              description?.slice(0, 120) +
                (description?.length > 120 ? "..." : "") ||
              "No description available",
          }}
        />
      </div>

      
      <div className="absolute bottom-3 right-4">
          <Link
          href={`/blogs/${id}`}
          className="flex justify-between items-center w-full border border-none bg-[#0891b2] text-white px-2 py-1 rounded-2xl hover:bg-[#93d6e9] hover:text-black transition-colors"
        >
          <span>Read more</span>
          <span className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center ml-2 hover:bg-white hover:text-black">
            <ChevronRight size={16} />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
