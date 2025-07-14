import { assets } from '@/assets/assets'
import React from 'react'
import Image from "next/image";

function BlogTableItem({authorImg,title,author,deleteBlog,mongoId,date}) {
    const BlogDate = new Date(date);
  return (
   <tr className='bg-white border-b'>
    <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font font-medium text-gray-900 whitespace-nowrap'>
           <Image width={40} height={40} src={authorImg?authorImg:assets.profile_icon} alt=''/>
           <p>{author?author:"No author"}</p>
    </th>
      <td className='px-6 py-4'>
        {title?title:"No title"}
    </td>
    <td className='px-6 py-4 '>
        {BlogDate.toDateString()}
    </td>
      <td onClick={()=>deleteBlog(mongoId)} className='px-6 py-4 text-red-500 hover:text-red-700 cursor-pointer'>
       x
    </td>

   </tr>
  )
}

export default BlogTableItem
