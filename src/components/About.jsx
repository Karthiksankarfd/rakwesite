import React from "react";
import AboutCards from "./PropertyCards/AboutCards";
import Mainfooter from "./Mainfooter";

const About = () => {
  return (
    <div className="w-full  py-5 lg:px-24">
      <section className=" flex flex-wrap">
        {/* Why RAK Groups */}
        <div className="p-6 rounded-lg   lg:w-1/3">
          <h2 className="text-3xl font-semibold">Why RAK Groups?</h2>
          <p className="mt-4 text-gray-700 font-poppins text-[16px] font-normal leading-[25.36px] text-left">
            As one of India’s premier developers of plotted and gated
            communities, we provide an idyllic sanctuary away from the frenetic
            pace of city life. Awaken to the gentle melodies of nature and
            immerse yourself in a harmonious, healthy lifestyle within our
            meticulously crafted living spaces.
          </p>
        </div>

        {/* About Us */}
        <div className="bg-[#CCAC0066] p-6 rounded-lg lg:w-[800px]">
          <h3 className="text-3xl font-semibold">About Us</h3>
          <p className="font-poppins text-[16px] font-normal leading-[25.36px] text-left">
            RAK Felicity is a stunning villa plot community in Devanahalli,
            surrounded by nature and offering delightful amenities. Just a short
            drive from the city and 10 minutes from Bengaluru International
            Airport, this prime location balances accessibility with
            tranquility. Developed by Vencer, RAK Felicity features
            RERA-approved villa plots and a range of amenities, including a
            children’s play area, jogging track, yoga deck, outdoor gym, and
            24/7 CCTV security. Experience luxurious living in a serene setting
            at RAK Felicity
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="flex  flex-wrap  sm:justify-center mb-5 ">
        <AboutCards
          num="500+"
          cardname="Projects"
          cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />

        <AboutCards
          num="40+"
          cardname="Locations"
          cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />

        <AboutCards
          num="24/7"
          cardname="Help"
          cardtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
        />
      </div>

      <section className=" flex flex-wrap  py-5">
        <div className=" p-6 rounded-lg  bg-[#5B5643] lg:w-[800px] ">
          <h3 className="text-2xl text-white font-semibold">Our Vision</h3>
          <p className="mt-4 text-white">
            To ensure the longevity of our company through repeat and referral
            business achieved by customer satisfaction in all areas including
            timeliness, service-minded attention attitudes to detail dedicated
            and to provide quality construction. Will treat all employees fairly
            and involve them in the quality improvement process to ensure
            responsiveness and cost-effective work execution.
          </p>
        </div>

        <div className=" p-6 rounded-lg lg:w-1/3">
          <h3 className="text-2xl font-semibold text-[#5B5643}">Our Mission</h3>
          <p className="mt-4 text-[#9F9F9F]">
            To be the most excellent construction and real estate development
            company committed to total customer satisfaction on our strengths -
            by building innovative designs, superlative quality of material,
            cutting-edge technology demonstrating workmanship timely the
            completion highest standards & of workmanship
          </p>
        </div>
      </section>

      <Mainfooter />
    </div>
  );
};

export default About;
