import React from "react";
import Navbar from "../Navbar/Navbar";
import MyPieChart from "../DonutPie/MyPieChart"; // তোর chart component
import Footer from "../FooterSection/Footer";

const Extra = () => {
  return (

    
    <div className="bg-[#F8FAFC]  ">
      <Navbar />
      
      <div className="bg-[#F8FAFC] min-h-screen  ">
        
        {/* CHART SECTION */}
       <div>
        
         <div className=" w-10/12 justify-center items-center mt-25 mb-20 bg-white container mx-auto  pb-10  shadow-sm rounded-md p-5">
                 <h1 className=" text-2xl md:text-3xl lg:text-4xl text-[#1F2937] pl-10 pt-7 font-bold bg-[#F8FAFC] pb-7 rounded-md">Friendship Analytics</h1>
        <h1 className=" text-[16px] md:text-[16px] lg:text-xl  font-bold text-center flex items-start pl-10  text-[#244D3F] pt-4">
          By Interaction Type
        </h1>
          <MyPieChart/>
        </div>
        <Footer/>

       </div>

      </div>
    </div>
  );
};

export default Extra;