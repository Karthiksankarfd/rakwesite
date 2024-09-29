import React from "react";

const FameComponent = ({ heading, paragraph , h3}) => {
  return (
    <section className="w-full h-[fit] flex my-5">
      <div className="bg-[#CCAC0033] w-full lg:h-[305px] md:h-fit  flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-5">
        <h1 className="lg:text-[34px] sm:text-[24px] font-semibold font-poppins lg:tracking-wider sm:leading-[44px] text-[#5B5643]">
          {heading}
        </h1>
        <h3 className="text-[#5B5643] lg:text-[20px] font-semibold font-poppins lg:tracking-wider">{h3}</h3>
        <div className="mt-4">
          <p className="font-poppins text-[16px] font-normal leading-[25.36px] text-left">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FameComponent;
