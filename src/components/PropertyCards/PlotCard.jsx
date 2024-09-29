import React from "react";

const PlotCard = () => {
  return (
 <div  className="gap-y-2 gap-x-2 bg-white p-2 lg:px-24  sm:px-7 items-start lg:h-[fit]  sm:h-auto">
         <div className="lg:w-[604px]  h-[618px] border  p-4 rounded-lg shadow-lg flex flex-col items-center mt-5">
      {/* Image Section */}
      <img
        src="https://i.ytimg.com/vi/MXb2Gz1grpE/maxresdefault.jpg" // Replace with the actual image URL
        alt="Property Image"
        className="w-full h-[300px] object-cover rounded-md"
      />

      {/* Property Info */}
      <div className="w-full mt-4 px-4 flex flex-col items-start">
        <div className="w-full flex justify-between">
          <div className="w-1/2">
            <h2 className="text-xl font-bold text-gray-800">
              RAk Felicity Phase II
            </h2>
            <p className="text-sm text-gray-500">
              Devanhalli, Bengaluru, 560100
            </p>
          </div>
          {/* Pricing and Booking Info */}
          <div className="flex justify-between items-center w-fit mt-2 flex-col">
            <p className="text-3xl font-bold text-yellow-500">50,000rs</p>
            <p className="text-sm font-semibold text-black">Advance booking</p>
          </div>
        </div>

        {/* Residential Plots Info */}
        <p className="text-md font-semibold text-gray-600 mt-4">
          Residential Plots
        </p>

        <div className="w-full flex justify-between mt-2 text-sm text-gray-500">
          <div className="flex flex-col">
            <p>Unit size:</p>
            <p className="font-semibold">1680 SFT Onwards*</p>
          </div>
          <div className="flex flex-col">
            <p>Price:</p>
            <p className="font-semibold">4.80 Cr Onwards*</p>
          </div>
          <div className="flex flex-col">
            <p>Status:</p>
            <p className="font-semibold">Ready to Buy*</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full mt-4 flex justify-evenly">
        <button className="border-2 border-[#CCAC00] text-[#CCAC00] font-bold py-2 px-4 rounded-md   transition w-[267px]">
          view project
        </button>
        <button
          type="download"
          className="border-2 border-[#CCAC00] text-[#CCAC00] font-bold py-2 px-4 rounded-md  transition w-[267px]"
        >
          Download Brochure
        </button>
      </div>
    </div>
 </div>
  );
};

export default PlotCard;
