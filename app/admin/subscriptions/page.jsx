"use client";
import SubTableItem from "@/components/AdminComponents/SubTableItem";
import React from "react";

function page() {
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <SubTableItem/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
