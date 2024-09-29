import React from "react";


const Plots = ({ name, image , navigate}) => {
  return (
    <div className="lg:w-[600px] sm:w-full md:w-full    lg:h-[358px] md:h-[300px] sm:h-[200px] border-2 relative  md:bg-red-600 sm:bg-red-600">
      {/* z-index */}
      <img src={image} alt="site-image" className ="site-image absolute z-0 w-full lg:h-[365px] md:h-[365px] sm:h-[200px] object-cover "/>
      <div className="white-overlaycard lg:w-[242px] sm:w-[150px] lg:h-[130px] sm:h-[70px] bg-white relative  z-0 lg:left-[354px]  sm:left-[175px]  md:left-3/4 lg:top-1/2  sm:top-2/3 flex flex-col lg:gap-y-2 justify-center">
        <h3 className="ml-[10px]">{name}</h3>
        <div className="w-[88px] h-[4px]  bg-[#CCAC00] ml-[10px]"></div>
        <button className="font-poppins font-semibold text-[20px] flex gap-x-3 items-center ml-[10px]" onClick={navigate}>
          view details
            <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M12.2526 0.328518L19.1561 7.23826C19.5924 7.67585 19.5924 8.38311 19.1561 8.82072L12.3041 15.6727C11.8677 16.1091 11.1592 16.1091 10.7228 15.6727C10.2852 15.2351 10.2852 14.5279 10.7228 14.0903L15.6186 9.19445L1.11789 9.19568C0.500094 9.19568 0 8.69433 0 8.07656C0 7.46002 0.500125 6.95867 1.11789 6.95867H15.719L10.6663 1.91098C10.23 1.4734 10.23 0.767361 10.6663 0.329744C10.8759 0.118912 11.1615 9.38336e-06 11.4594 9.38336e-06C11.7572 -0.0012163 12.043 0.11768 12.2526 0.328518Z"
                fill="#CCAC00"
                />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default Plots;
