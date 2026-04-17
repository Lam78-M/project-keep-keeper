import React, { useState, useContext } from "react";
import { useParams, useLoaderData } from "react-router";
import { LuBellDot } from "react-icons/lu";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { BsChatText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";
import call from "../assets/call.png";
import video from "../assets/video.png";
import text from "../assets/text.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { InteractionContext } from "../InteractionContext/InteractionContext";

const FriendsCall = () => {
    const { interactions, setInteractions } = useContext(InteractionContext);
    const friends = useLoaderData();
    const { id } = useParams();
    const friend = friends.find(f => String(f.id) === id);

    const handleClick = (type) => {
        const newItem = {
            type,
            time: new Date().toLocaleDateString(),
            name: friend.name
        };

        setInteractions([...interactions, newItem]);

        // ✅ type অনুযায়ী আলাদা message
        const messages = {
            call: `Added call with ${friend.name} Successfully!`,
            text: `Added text with ${friend.name} Successfully!`,
            video: `Added video call with ${friend.name} Successfully!`,
        };

        toast.success(messages[type]);
    };

    return (
        <>
            <ToastContainer />
            <div className="bg-[#F1F5F9] p-4 md:p-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* LEFT PROFILE */}
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <div className="flex flex-col items-center text-center space-y-3">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={friend.picture}
                                alt=""
                            />
                            <h2 className="mt-3 text-3xl font-semibold">
                                {friend.name}
                            </h2>
                            <span className="bg-red-500 text-white text-lg px-3 font-semibold rounded-full mt-2">
                                Overdue
                            </span>
                            <span className="bg-green-100 text-green-600 text-lg px-3 font-semibold rounded-full mt-2">
                                FAMILY
                            </span>
                            <p className="text-lg text-gray-500 mt-3 font-semibold">
                                "{friend.descrip}"
                            </p>
                            <p className="text-md text-[#808080da] mt-3 font-semibold">
                                {friend.email}
                            </p>
                        </div>

                        {/* BUTTONS */}
                        <div className="mt-6 space-y-3">
                            <button className="w-full flex items-center gap-2 px-4 py-2 shadow-md btn rounded-md hover:bg-gray-100 transition">
                                <LuBellDot /> Snooze 2 Weeks
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 shadow-md btn rounded-md hover:bg-gray-100 transition">
                                <BsArchive /> Archive
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-2 shadow-md btn rounded-md text-red-500 hover:bg-red-50 transition">
                                <RiDeleteBin6Line /> Delete
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-2 space-y-5">

                        {/* STATS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                                <h2 className="text-2xl font-semibold text-[#244D3F]">{friend.days_since_contact}</h2>
                                <p className="text-[16px] text-gray-500">Day Since Contact</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                                <h2 className="text-2xl font-semibold text-[#244D3F]">{friend.goal}</h2>
                                <p className="text-[16px] text-gray-500">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-5 rounded-lg text-center shadow-sm">
                                <h2 className="text-lg font-semibold text-[#244D3F]">{friend.next_due_date}</h2>
                                <p className="text-[16px] text-gray-500">Next Due</p>
                            </div>
                        </div>

                        {/* RELATIONSHIP GOAL */}
                        <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                            <div>
                                <h3 className="font-semibold text-[#244D3F] text-lg">
                                    Relationship Goal
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Connect every <span className="font-semibold text-lg">{friend.connect} days</span>
                                </p>
                            </div>
                            <button className="px-3 py-1 btn rounded-md text-sm w-full sm:w-auto">
                                Edit
                            </button>
                        </div>

                        {/* QUICK CHECK-IN */}
                        <div className="bg-white p-5 rounded-lg shadow-sm">
                            <h3 className="font-semibold text-gray-700 mb-4">
                                Quick Check-In
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button onClick={() => handleClick("call")} className="flex border border-[#00000023] flex-col items-center justify-center p-4 rounded-md hover:bg-gray-100 transition">
                                    <IoCallOutline style={{ fontSize: "25px" }} />
                                    <span className="text-lg mt-2">Call</span>
                                </button>
                                <button onClick={() => handleClick("text")} className="flex border border-[#00000023] flex-col items-center justify-center p-4 rounded-md hover:bg-gray-100 transition">
                                    <BsChatText style={{ fontSize: "25px" }} />
                                    <span className="text-lg mt-2">Text</span>
                                </button>
                                <button onClick={() => handleClick("video")} className="flex border border-[#00000023] flex-col items-center justify-center p-4 rounded-md hover:bg-gray-100 transition">
                                    <IoVideocamOutline style={{ fontSize: "25px" }} />
                                    <span className="text-lg mt-2">Video</span>
                                </button>
                            </div>
                        </div>

                        {/* RECENT INTERACTIONS */}
                        {interactions.length > 0 && (
                            <div className="bg-white p-5 rounded-lg shadow-sm mt-5">
                                <div className="flex justify-between items-center pb-4">
                                    <h2 className="text-lg font-semibold mb-4">
                                        Recent Interactions
                                    </h2>
                                    <button className="btn flex items-center">Full History</button>
                                </div>

                                {interactions.map((item, index) => (
                                    <div key={index} className="flex justify-between border-t pt-4 mb-3">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <p className="font-medium capitalize">{friend.name}</p>

                                                {item.type === "call" && (
                                                    <div className="flex gap-2">
                                                        <img src={call} alt="call" className="w-6 h-6" />
                                                        <p className="text-sm text-gray-500">Call record</p>
                                                    </div>
                                                )}
                                                {item.type === "text" && (
                                                    <div className="flex gap-2">
                                                        <img src={text} alt="text" className="w-6 h-6" />
                                                        <p className="text-sm text-gray-500">Text message record</p>
                                                    </div>
                                                )}
                                                {item.type === "video" && (
                                                    <div className="flex gap-2">
                                                        <img src={video} alt="video" className="w-6 h-6" />
                                                        <p className="text-sm text-gray-500">Video call record</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-400">{friend.next_due_date}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FriendsCall;