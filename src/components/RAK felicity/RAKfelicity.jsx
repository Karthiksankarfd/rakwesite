import React from "react";
import FameComponent from "../FameComponent";
import SmallBadge from "../RAK felicity/SmallBadge";
import Amenties from "./Amenties";
import SiteSelectingsection from "./SiteSelectingsection";
import NearByLocations from "../NearbyLocations/NearByLocations";
import Carousel from "../Carousel";
import Mainfooter from "../Mainfooter";
const RAKfelicity = () => {
  return (
    <section>
      <FameComponent
        heading={"RAK Felicity"}
        h3="Phase I"
        paragraph={
          "RAK Felicity is a beautiful plots community in Devanahalli surrounded by Nature  with delightful amenities. The location is just a short drive from the city & main  highway, but far enough to enjoy the peace and privacy. RAK Felicity is located just 10 mins from Bengaluru International Airport which is a  prime location. This is your chance to live a luxurious life. RAK Felicity by Vencer  offers you RERA approved Villa plots with amenities like Kid’s Play area, Jogging  track, Yoga deck, Senior Citizen heaven, Outdoor Gym, Open lawn area, Swing park,  24/7 CCTV, Underground recharging & Cycling track."
        }
      />

      <SmallBadge />
      <SiteSelectingsection />
      <Amenties />
      <NearByLocations />
      <section className='NearByLocations-flex-container  lg:px-24 py-10 sm:px-8 md:px-8 '>
            <h1 className='lg:text-[34px] sm:text-[34px] font-semibold font-poppins lg:tracking-wider sm:leading-[44px] text-[#5B5643]'>Property Gallery</h1>
            <div className="relative flex items-center mt-4 mb-4 ">
                <svg
                className="absolute"
                width="fit-content"
                height="2"
                mviewBox="0 0 1242 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M1 1L1241 1.00011" stroke="white" stroke-linecap="round" />
                </svg>

                <svg
                className="absolute"
                width="191"
                height="4"
                viewBox="0 0 191 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M2 2L189 1.99998"
                    stroke="#CCAC00"
                    stroke-width="4"
                    stroke-linecap="round"
                />
                </svg>
            </div>
        </section>
      <Carousel />
      <Mainfooter/>
    </section>
  );
};

export default RAKfelicity;
