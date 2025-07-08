import React from "react";

function SubTableItem({ email,mongoId,date,deleteEmail }) {
   const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email || "No Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">
       {BlogDate.toDateString()}
      </td>
      <td className="px-6 py-4">
        <button onClick={()=>deleteEmail(mongoId)} className="text-red-500 hover:text-red-700 cursor-pointer">
          x
        </button>
      </td>
    </tr>
  );
}

export default SubTableItem;