import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../FooterSection/Footer';

import { CiSquareChevDown } from "react-icons/ci";
import { useContext } from "react";
import { InteractionContext } from '../InteractionContext/InteractionContext';


const Timeline = () => {
    const { interactions } = useContext(InteractionContext);
    return (
        <>
         <Navbar/>
<div className="container mx-auto px-3 md:px-6 space-y-4">
  
  {/* Title */}
  <h1 className="text-lg sm:text-2xl md:text-4xl pl-1 md:pl-2 pt-10">
    Timeline
  </h1>

  {/* Dropdown */}
  <details className="dropdown w-full md:w-fit border rounded-md">
    
    <summary className="btn w-full md:w-auto flex justify-between items-center px-4 md:px-8 rounded-md">
      <span className="text-sm sm:text-base">Filter Timeline</span>
      <CiSquareChevDown className="text-xl md:text-2xl" />
    </summary>

    <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-full md:w-52 p-2 shadow-md">
      
      <p className="text-xs sm:text-sm pl-2 flex items-center gap-1 text-gray-400">
        <CiSquareChevDown className="text-lg" />
        Filter Timeline
      </p>

      <li><a className="text-sm md:text-base">Text</a></li>
      <li><a className="text-sm md:text-base">Call</a></li>
      <li><a className="text-sm md:text-base">Video</a></li>

    </ul>
  </details>
 <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Timeline</h2>

      {interactions.length === 0 ? (
        <p>No interactions yet</p>
      ) : (
        interactions.map((item, index) => (
          <div key={index} className="border border-[#00000019] p-3 mb-3 rounded">
            <p className="font-semibold">{item.name}</p>
            <p>{item.type}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        ))
      )}
    </div>
        </div>
        <br></br>
             <Footer/>
        </>
     
    );
};

export default Timeline;