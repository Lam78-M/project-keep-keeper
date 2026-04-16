import React from "react";
import { useParams, useLoaderData } from "react-router";
import { LuBellDot } from "react-icons/lu";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";



const FriendsCall = () => {
    const friends = useLoaderData();
    const { id } = useParams();
  const friend = friends.find(f => String(f.id) === id);
  return (
    <>
<div className="bg-[#F1F5F9] p-4 md:p-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

    {/* LEFT PROFILE */}
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex flex-col items-center text-center">
        <img
          className="w-20 h-20 rounded-full"
          src={friend.picture}
          alt=""
        />

        <h2 className="mt-3 text-lg font-semibold">
          {friend.name}
        </h2>

        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full mt-2">
          Overdue
        </span>

        <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full mt-2">
          FAMILY
        </span>

        <p className="text-sm text-gray-500  mt-3">
          "{friend.talk}"
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Preferred: email
        </p>
      </div>

      {/* BUTTONS */}
      <div className="mt-6 space-y-3">
        <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          <LuBellDot /> Snooze 2 Weeks
        </button>

        <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 transition">
          <BsArchive /> Archive
        </button>

        <button className="w-full flex items-center gap-2 px-4 py-2 border rounded-md text-red-500 hover:bg-red-50 transition">
          <RiDeleteBin6Line /> Delete
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="lg:col-span-2 space-y-5">

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-lg text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#244D3F]">62</h2>
          <p className="text-sm text-gray-500">Days Since Contact</p>
        </div>

        <div className="bg-white p-5 rounded-lg text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-[#244D3F]">30</h2>
          <p className="text-sm text-gray-500">Goal (Days)</p>
        </div>

        <div className="bg-white p-5 rounded-lg text-center shadow-sm">
          <h2 className="text-lg font-semibold text-[#244D3F]">
            Feb 27, 2026
          </h2>
          <p className="text-sm text-gray-500">Next Due</p>
        </div>
      </div>

      {/* RELATIONSHIP GOAL */}
      <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h3 className="font-semibold text-gray-700">
            Relationship Goal
          </h3>
          <p className="text-sm text-gray-500">
            Connect every <span className="font-semibold">30 days</span>
          </p>
        </div>

        <button className="px-3 py-1 border rounded-md text-sm w-full sm:w-auto">
          Edit
        </button>
      </div>

      {/* QUICK CHECK-IN */}
      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">
          Quick Check-In
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-100 transition">
           <IoCallOutline />
            <span className="text-sm mt-2">Call</span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-100 transition">
            💬
            <span className="text-sm mt-2">Text</span>
          </button>

          <button className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-100 transition">
            🎥
            <span className="text-sm mt-2">Video</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

    </>
  
  );
};

export default FriendsCall;