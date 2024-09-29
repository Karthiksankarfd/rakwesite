import React from "react";
import FameComponent from "./FameComponent";
import Mainfooter from "./Mainfooter";
import PlotCard from "./PropertyCards/PlotCard";
import RAKfelicity from "./RAK felicity/RAKfelicity";

const ProjectDetails = () => {

  return (
    <div>
      <div className="flex ">
        <FameComponent
          heading={"Exclusive Luxury Plots for Sale in Bengaluru"}
          paragraph={
            "Dream Home is a premier gated community perfectly positioned in a prime downtown location. Enjoy the convenience of being just steps away from beautiful parks, as well as the finest shopping, dining, and entertainment venues. With effortless access to freeways, public transit, and trolleys, commuting is a breeze. On-site amenities, including laundry facilities, ensure your comfort and convenience, making Dream Home the ultimate blend of urban living and modern convenience"
          }
        />
      </div>
      <PlotCard/>
      <Mainfooter />
    </div>
  );
};

export default ProjectDetails;
