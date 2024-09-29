import React from "react";
import FameComponent from "./FameComponent";
import Plots from "./Plots";
import Carousel from "./Carousel";
import Mainfooter from "./Mainfooter";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate()
  const names = [
    {
      name: "Plots",
      image:
        "https://s3-alpha-sig.figma.com/img/c2b8/c6f4/56e86a60c2fdb884c46dcd7fc84cbc2f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgxTTpybC0xdu0FPOAApQMfsJXfF8ITBnthNty4jIkGpkxklikHV8xnWtvYqAGotr5sLOn7XT-ZsZs1Vmgo1BmAyqH9CGhhdiL2dJFfZ9IHV-Wz7SFHXFZSlZIQw8Nk4r8vHHEGbYjSxFsARoVJENO--N0vL82y3TrTrK-STrWkuc2-Mo0a~Axzc5E37C1ShODYKxGJwPV4Sz4HGblcoNdKmN6ESuOdPVz389oxyFUUbd56jeqUnE5N1cpW033R1VAGgCRCGyjNDU1-U4R09xNP-mcRuKNZ2uRB6ehAqgvxjcbqpQFeNTfSKPL9QC1vqQMzyeoc9dbV2jE-0nYikxw__",
    },

    {
      name: "Plots",
      image:
        "https://s3-alpha-sig.figma.com/img/217b/45fa/673a084c98e5752fd8a59eba54d873a0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xtl4dEE7qpMzz37ZN6o1STKD3Fb6aZlfLdCGsX4vIYATT3Mh~EVo6XfbPmNXRbBK4ltlFiOeQj~ahvYpCssau6FF8w7oAeA5zofg6lxCJ5pl87SL0bPOvixDTK5gtWGOL61KsrCXkwBJZLxVN5pt2P9WiYjHoogiPL0PS~Jz-NGgmCFKkC0SDTDvtQvrTNhhlV8mQNOW7DULndqJ45NTF1Soz~KXHzunlOk78Lcw-MbPc6ITSph9RSmDBUNvvsrVYSUTCZFqW6lP0f29k4nTaMQp-3vZ~IULfAcBp7N0hdYiSJvoyGruvrVqPyYL0e9gsPqnHD3gnRsp7IdWJ0axrA__",
    },

    {
      name: "Plots",
      image:
        "https://s3-alpha-sig.figma.com/img/217b/45fa/673a084c98e5752fd8a59eba54d873a0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xtl4dEE7qpMzz37ZN6o1STKD3Fb6aZlfLdCGsX4vIYATT3Mh~EVo6XfbPmNXRbBK4ltlFiOeQj~ahvYpCssau6FF8w7oAeA5zofg6lxCJ5pl87SL0bPOvixDTK5gtWGOL61KsrCXkwBJZLxVN5pt2P9WiYjHoogiPL0PS~Jz-NGgmCFKkC0SDTDvtQvrTNhhlV8mQNOW7DULndqJ45NTF1Soz~KXHzunlOk78Lcw-MbPc6ITSph9RSmDBUNvvsrVYSUTCZFqW6lP0f29k4nTaMQp-3vZ~IULfAcBp7N0hdYiSJvoyGruvrVqPyYL0e9gsPqnHD3gnRsp7IdWJ0axrA__",
    },

    {
      name: "Plots",
      image:
        "https://s3-alpha-sig.figma.com/img/217b/45fa/673a084c98e5752fd8a59eba54d873a0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xtl4dEE7qpMzz37ZN6o1STKD3Fb6aZlfLdCGsX4vIYATT3Mh~EVo6XfbPmNXRbBK4ltlFiOeQj~ahvYpCssau6FF8w7oAeA5zofg6lxCJ5pl87SL0bPOvixDTK5gtWGOL61KsrCXkwBJZLxVN5pt2P9WiYjHoogiPL0PS~Jz-NGgmCFKkC0SDTDvtQvrTNhhlV8mQNOW7DULndqJ45NTF1Soz~KXHzunlOk78Lcw-MbPc6ITSph9RSmDBUNvvsrVYSUTCZFqW6lP0f29k4nTaMQp-3vZ~IULfAcBp7N0hdYiSJvoyGruvrVqPyYL0e9gsPqnHD3gnRsp7IdWJ0axrA__",
    },

    {
      name: "Plots",
      image:
        "https://s3-alpha-sig.figma.com/img/217b/45fa/673a084c98e5752fd8a59eba54d873a0?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xtl4dEE7qpMzz37ZN6o1STKD3Fb6aZlfLdCGsX4vIYATT3Mh~EVo6XfbPmNXRbBK4ltlFiOeQj~ahvYpCssau6FF8w7oAeA5zofg6lxCJ5pl87SL0bPOvixDTK5gtWGOL61KsrCXkwBJZLxVN5pt2P9WiYjHoogiPL0PS~Jz-NGgmCFKkC0SDTDvtQvrTNhhlV8mQNOW7DULndqJ45NTF1Soz~KXHzunlOk78Lcw-MbPc6ITSph9RSmDBUNvvsrVYSUTCZFqW6lP0f29k4nTaMQp-3vZ~IULfAcBp7N0hdYiSJvoyGruvrVqPyYL0e9gsPqnHD3gnRsp7IdWJ0axrA__",
    },
  ];
  return (
    <div>
      <div className="flex">
        <FameComponent
          heading={"Experience our Curated Properties"}
          paragraph={
            "Explore our portfolio of premium real estate projects, each strategically located to offer unmatched convenience and modern luxury. With seamless access to highways, public transport, and essential services, navigating your daily life has never been easier. Whether you're drawn to the vibrant pulse of urban living or the calm of a suburban haven, our developments are tailored to fit diverse lifestyles. Designed with meticulous attention to detail, our communities feature a range of thoughtful amenities— from on-site laundry and fitness facilities to lush green spaces and recreational areas— ensuring a lifestyle of ease, comfort, and connection"
          }
        />
      </div>
      <div className="flex lg:justify-start h-auto w-full flex-wrap bg-white lg:px-24 sm:px-8 gap-y-10 lg:gap-x-10 mt-10">
        {/* {names.map((item) => (
          <Plots name={item.name} image={item.image} />
        ))} */}
              <div className="lg:w-[600px] sm:w-full md:w-full    lg:h-[358px] md:h-[300px] sm:h-[200px] border-2 relative  md:bg-red-600 sm:bg-red-600">
        {/* z-index */}
        <img
          src="https://s3-alpha-sig.figma.com/img/c2b8/c6f4/56e86a60c2fdb884c46dcd7fc84cbc2f?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgxTTpybC0xdu0FPOAApQMfsJXfF8ITBnthNty4jIkGpkxklikHV8xnWtvYqAGotr5sLOn7XT-ZsZs1Vmgo1BmAyqH9CGhhdiL2dJFfZ9IHV-Wz7SFHXFZSlZIQw8Nk4r8vHHEGbYjSxFsARoVJENO--N0vL82y3TrTrK-STrWkuc2-Mo0a~Axzc5E37C1ShODYKxGJwPV4Sz4HGblcoNdKmN6ESuOdPVz389oxyFUUbd56jeqUnE5N1cpW033R1VAGgCRCGyjNDU1-U4R09xNP-mcRuKNZ2uRB6ehAqgvxjcbqpQFeNTfSKPL9QC1vqQMzyeoc9dbV2jE-0nYikxw__"
          alt="site-image"
          className="site-image absolute z-0 w-full lg:h-[365px] md:h-[365px] sm:h-[200px] object-cover "
        />
        <div className="white-overlaycard lg:w-[242px] sm:w-[150px] lg:h-[130px] sm:h-[70px] bg-white relative  z-0 lg:left-[354px]  sm:left-[175px]   lg:top-1/2  sm:top-2/3 flex flex-col lg:gap-y-2 justify-center">
          <h3 className="ml-[10px]">"Plots"</h3>
          <div className="w-[88px] h-[4px]  bg-[#CCAC00] ml-[10px]"></div>
          <button
            className="font-poppins font-semibold text-[20px] flex gap-x-3 items-center ml-[10px]"
            onClick={()=>navigate("/projectdetails")}
          >
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
      
        {/* <div className=" bg-[#5B5643]  lg:w-[600px] sm:w-[200px] h-[358px] border-2 relative flex flex-col  justify-center"> */}
        <div className=" lg:w-[600px] sm:w-full md:w-full  border-2 relative bg-[#5B5643] flex flex-col  justify-center pl-5 lg:h-[358px] md:h-[300px] sm:h-[200px]">
          {/* lg:w-[600px] sm:w-full md:w-full    lg:h-[358px] md:h-[300px] sm:h-[200px] border-2 relative  md:bg-red-600 sm:bg-red-600 */}
          <li className="lg:text-[34px] sm:text-[24px] font-semibold font-poppins tracking-wider lg:leading-[40px] text-[#ffffff] list-none lg:ml-16">
            {" "}
            Want to learn more <br /> about the project?
          </li>

          <p className="lg:text-[24px] font-semibold font-poppins tracking-wider lg:leading-[64px] text-[#ffffff] lg:ml-16">
            Our experts are here to help!
          </p>

          <a
            className="lg:text-[24px] sm:text-[20px] font-thin font-poppins tracking-wider leading-[64px] text-[#ffffff] flex items-center lg:ml-16"
            href="phone"
          >
            <svg
              width="34"
              className="sm:h-[20px]"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4029 12.2006C27.4029 11.2406 26.6511 9.76859 25.5315 8.56859C24.5078 7.46459 23.1482 6.60059 21.8047 6.60059"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                d="M33.001 12.2C33.001 6.008 27.9947 1 21.8047 1"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <path
                d="M32.9996 27.128C32.9996 27.704 32.8714 28.296 32.599 28.872C32.3266 29.448 31.9741 29.992 31.5094 30.504C30.7242 31.368 29.8589 31.992 28.8815 32.392C27.92 32.792 26.8785 33 25.7568 33C24.1224 33 22.3758 32.616 20.533 31.832C18.6903 31.048 16.8476 29.992 15.0208 28.664C13.1781 27.32 11.4315 25.832 9.76503 24.184C8.11458 22.52 6.62436 20.776 5.29438 18.952C3.98043 17.128 2.92286 15.304 2.15372 13.496C1.38457 11.672 1 9.928 1 8.264C1 7.176 1.19229 6.136 1.57686 5.176C1.96143 4.2 2.57033 3.304 3.4196 2.504C4.44512 1.496 5.56679 1 6.75255 1C7.20122 1 7.64989 1.096 8.05048 1.288C8.4671 1.48 8.83565 1.768 9.12408 2.184L12.8416 7.416C13.13 7.816 13.3383 8.184 13.4826 8.536C13.6268 8.872 13.7069 9.208 13.7069 9.512C13.7069 9.896 13.5947 10.28 13.3704 10.648C13.1621 11.016 12.8576 11.4 12.4731 11.784L11.2552 13.048C11.079 13.224 10.9989 13.432 10.9989 13.688C10.9989 13.816 11.0149 13.928 11.0469 14.056C11.095 14.184 11.1431 14.28 11.1751 14.376C11.4636 14.904 11.9603 15.592 12.6653 16.424C13.3864 17.256 14.1556 18.104 14.9888 18.952C15.8541 19.8 16.6873 20.584 17.5366 21.304C18.3698 22.008 19.0589 22.488 19.6037 22.776C19.6838 22.808 19.7799 22.856 19.8921 22.904C20.0203 22.952 20.1485 22.968 20.2927 22.968C20.5651 22.968 20.7734 22.872 20.9497 22.696L22.1675 21.496C22.5681 21.096 22.9526 20.792 23.3212 20.6C23.6897 20.376 24.0583 20.264 24.4589 20.264C24.7633 20.264 25.0838 20.328 25.4363 20.472C25.7889 20.616 26.1574 20.824 26.558 21.096L31.8619 24.856C32.2785 25.144 32.5669 25.48 32.7432 25.88C32.9034 26.28 32.9996 26.68 32.9996 27.128Z"
                stroke="white"
                stroke-miterlimit="10"
              />
            </svg>
            <span>7760995900</span>
          </a>
        </div>
      </div>
      <Carousel />
      <Mainfooter/>
    </div>
  );
};

export default Projects;
