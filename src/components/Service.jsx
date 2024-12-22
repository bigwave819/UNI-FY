import React from "react";
import { RiGeminiFill } from "react-icons/ri";
import Shoot1 from "../assets/shoot1.jpg";
import Shoot2 from "../assets/shoot2.webp";
import Shoot3 from "../assets/shoot3.jpg";
import Shoot4 from "../assets/shoot4.webp";
import Shoot5 from "../assets/shoot5.jpg";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-[#1C8EE0] inline-flex">
        <RiGeminiFill size={26} />
        <RiGeminiFill size={20} className="ml-3 mt-[6px]" />
        <RiGeminiFill className="ml-3 mt-[8px]" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-8">Popular Services</h1>
      <div className="flex justify-between mb-10">
        <p className="text-white font-thin">
          Uni-Fy, built on solana, is a revolutionary platform that aims to
          aggregate product and
          <br />
          service providers from multiple chains into one user-friendly
          ecosystem.
        </p>
        <button className="px-4 py-2 rounded-xl ring-1 font-extralight text-white">
          View All Services
        </button>
      </div>
      {/* 1 cards component */}
      <div className="w-full md:flex lg:flex flex-wrap justify-center">
        <div className="flex h-[350px] p-10">
          <div className="relative group h-64">
            <img
              src={Shoot1}
              alt="hey"
              className="h-64 w-[700px] overflow-hidden rounded-3xl"
            />
            <div className="absolute inset-0 flex items-end bg-black/60 rounded-3xl">
              <div className="p-4 text-white">
                <h1 className="text-3xl">Service1</h1>
                <div className="flex justify-between">
                <p className="font-thin">After more than seven years of preparation, accompanied<br/> by using the site and creating an exchange, you agree to the</p>
                  <FaArrowRight size={30} className="text-orange-500 px-2 py-2 rounded-full ring-1 ring-orange-500"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 cards component */}
        <div className="flex h-[350px] p-10">
          <div className="relative group h-64">
            <img
              src={Shoot1}
              alt="hey"
              className="h-64 md:w-[350px] w-full overflow-hidden rounded-3xl"
            />
            <div className="absolute inset-0 flex items-end bg-black/60 rounded-3xl">
              <div className="p-4 text-white">
                <h1 className="text-3xl">Service2</h1>
                <div className="flex justify-between">
                <p className="font-thin">After more than seven years of preparation, accompanied<br/> by using the site and creating an exchange, you agree to the</p>
                  <FaArrowRight size={30} className="text-orange-500 px-2 py-2 rounded-full ring-1 ring-orange-500"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      { /* the second law of the cards */}
      <div className="w-full flex flex-wrap justify-center gap-6">
  {/* Card 1 */}
  <div className="p-4 flex-none">
    <div className="relative group h-64">
      <img
        src={Shoot1}
        alt="hey"
        className="h-64 md:w-[350px] w-full overflow-hidden rounded-3xl"
      />
      <div className="absolute inset-0 flex items-end bg-black/60 rounded-3xl">
        <div className="p-4 text-white">
          <h1 className="text-3xl">Service 3</h1>
          <div className="flex justify-between">
            <p className="font-thin">
              After more than seven years of preparation, accompanied
            </p>
            <FaArrowRight
              size={30}
              className="text-orange-500 px-2 py-2 rounded-full ring-1 ring-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="p-4 flex-none">
    <div className="relative group h-64">
      <img
        src={Shoot1}
        alt="hey"
        className="h-64 md:w-[350px] w-full overflow-hidden rounded-3xl"
      />
      <div className="absolute inset-0 flex items-end bg-black/60 rounded-3xl">
        <div className="p-4 text-white">
          <h1 className="text-3xl">Service 4</h1>
          <div className="flex justify-between">
            <p className="font-thin">
              After more than seven years of preparation, accompanied<br />
              by using the site and creating an exchange, you agree to the
            </p>
            <FaArrowRight
              size={30}
              className="text-orange-500 px-2 py-2 rounded-full ring-1 ring-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="p-4 flex-none">
    <div className="relative group h-64">
      <img
        src={Shoot1}
        alt="hey"
        className="h-64 md:w-[400px] w-full overflow-hidden rounded-3xl"
      />
      <div className="absolute inset-0 flex items-end bg-black/60 rounded-3xl">
        <div className="p-4 text-white">
          <h1 className="text-3xl">Service 5</h1>
          <div className="flex justify-between">
            <p className="font-thin">
              After more than seven years of preparation, accompanied
            </p>
            <FaArrowRight
              size={30}
              className="text-orange-500 px-2 py-2 rounded-full ring-1 ring-orange-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default App;
