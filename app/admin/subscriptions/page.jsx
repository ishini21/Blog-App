"use client";
import SubTableItem from "@/components/AdminComponents/SubTableItem";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function page() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    })
    if(response){
    toast.success(response.data.msg);
     fetchEmails();
    }else {
      toast.error("Error");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-xl text-[#0891b2] font-bold">All Subscriptions</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-[#0891b2]">
                Email Subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3 text-[#0891b2]">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-[#0891b2]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item, index) => {
              return (
                <SubTableItem
                  key={index}
                  mongoId={item._id}
                  email={item.email}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
