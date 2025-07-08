import React from "react";

function SubTableItem({ email }) {
  return (
    <div className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No Email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">{"11 Jan 2025"}</td>
      <td className="px-6 py-4 cursor-pointer">x</td>
    </div>
  );
}

export default SubTableItem;
