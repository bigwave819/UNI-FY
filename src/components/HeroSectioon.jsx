import React from "react";
import { RiSparklingFill } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
       <div className="text-orange-400 mt-12 font-extralight flex justify-center items-center space-x-2">
      <RiSparklingFill size={24} />
      <h1 className="text-sm font-bold tracking-widest">WELCOME TO UNI-FY</h1>
    </div>
    <div className="text-white text-center py-20 px-4">
      <h2 className="text-[60px] font-bold mb-4">
        Aggregation,<br/> Engagement, Growth
      </h2>
      <p className="text-sm font-extralight">
      A Powerful on-chain affilaite market place.
       Easily luanch affilaite products to<br/> engage 
       and reward your community
      </p>
    </div>
    </div>
  );
};

export default Hero;
