import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogItem({ title, description, category, image, id }) {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-gray-300 rounded-lg shadow-md transform transition-transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] duration-400 ">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt={title || "Blog post image"}
          width={400}
          height={400}
          className="border rounded-lg p-2"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-[#0891b2] text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p
          className="mb-3 text-sm tracking-tight text-gray-700"
          dangerouslySetInnerHTML={{
            __html:
              description?.slice(0, 120) +
                (description?.length > 120 ? "..." : "") ||
              "No description available",
          }}
        />
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center py-2 font-semibold text-center"
        >
          Read more{" "}
          <Image
            src={assets.arrow}
            width={12}
            alt="Read more arrow"
            className="ml-2"
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogItem;
