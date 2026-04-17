import React, { useState, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../FooterSection/Footer';
import { CiSquareChevDown } from "react-icons/ci";
import { InteractionContext } from '../InteractionContext/InteractionContext';

const Timeline = () => {
    const { interactions } = useContext(InteractionContext);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const filteredInteractions = interactions
        .filter(item => filter === "all" ? true : item.type === filter)
        .filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-3 md:px-6 space-y-4">

                {/* Title */}
                <h1 className="text-4xl pl-2 md:pl-5 pt-15">
                    Timeline
                </h1>

                {/* Filter + Search Row */}
                <div className="flex flex-col md:flex-row gap-3 ml-2 lg:ml-5">

                    {/* Dropdown */}
                    <details className="dropdown w-full md:w-fit border border-[#00000020] rounded-md">
                        <summary className="btn w-full md:w-auto flex justify-between items-center px-4 md:px-8 rounded-md">
                            <span className="text-lg sm:text-base">
                                {filter === "all" ? "Filter Timeline" : filter}
                            </span>
                            <CiSquareChevDown className="text-xl md:text-2xl" />
                        </summary>

                        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-full md:w-52 p-2 shadow-md">
                            <p className="text-xs sm:text-sm pl-3 flex items-center gap-1 text-gray-400">
                                <CiSquareChevDown className="text-lg" />
                                Filter Timeline
                            </p>
                            <li><a className="text-sm md:text-base" onClick={() => setFilter("text")}>Text</a></li>
                            <li><a className="text-sm md:text-base" onClick={() => setFilter("call")}>Call</a></li>
                            <li><a className="text-sm md:text-base" onClick={() => setFilter("video")}>Video</a></li>
                            <li><a className="text-sm md:text-base" onClick={() => setFilter("all")}>All</a></li>
                        </ul>
                    </details>

                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-[#00000020] rounded-md px-4 py-2 w-full md:w-72 text-sm focus:outline-none focus:border-gray-400"
                    />

                </div>

                {/* Timeline List */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Timeline</h2>
                    {filteredInteractions.length === 0 ? (
                        <p>No interactions yet</p>
                    ) : (
                        filteredInteractions.map((item, index) => (
                            <div key={index} className="border border-[#00000019] p-3 mb-3 rounded">
                                <p className="font-semibold">{item.name}</p>
                                <p>{item.type}</p>
                                <p className="text-sm text-gray-500">{item.time}</p>
                            </div>
                        ))
                    )}
                </div>

            </div>
            <br />
            <Footer />
        </>
    );
};

export default Timeline;