import React from "react";
import "slick-carousel/slick/slick.css"; // Ensure you have these styles installed
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import Bitcoin from "../assets/bitcoin.jpg";
import Ethbit from "../assets/Bitcoin-Ethereum.png";
import Trade from "../assets/trade.jpg";
import { RiGeminiFill } from "react-icons/ri";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ProductOne = () => {

  const products = [
    {
      title: "Product 1",
      imageSrc: Bitcoin,
      description:
        "After more than seven years of preparation, accompanied by using the site and creating an exchange, you agree to the",
    },
    {
      title: "Product 2",
      imageSrc: Ethbit,
      description:
        "After more than seven years of preparation, accompanied by using the site and creating an exchange, you agree to the",
    },
    {
      title: "Product 3",
      imageSrc: Trade,
      description:
        "After more than seven years of preparation, accompanied by using the site and creating an exchange, you agree to the",
    },
  ];

  return (
    <div className="container mx-auto p-6 md:p-24">
      <div className="text-[#1C8EE0] inline-flex">
        <RiGeminiFill size={26} />
        <RiGeminiFill size={20} className="ml-3 mt-[6px]" />
        <RiGeminiFill className="ml-3 mt-[8px]" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white mb-8">Popular</h1>
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <p className="text-white font-thin mb-6 md:mb-0">
            Our vision is to empower businesses and individuals in the web3
            space by providing a comprehensive
            <br /> solution for web3 navigation, consistent lead generation, and
            community engagement.
          </p>
          <button className="px-4 py-2 rounded-xl ring-1 font-extralight text-white">
            View All Products
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
      {products?.map((product) => (
          <div key={product.title} className="px-2">
            <ProductCard
              title={product.title}
              imageSrc={product.imageSrc}
              description={product.description}
            />
          </div>
        ))}
      </div>
      <hr className="mt-8 mb-8"/>
      <div className="flex justify-between">
        <p className="text-white">
          <b>01</b>
          <span className="text-gray-400"> of 60</span>
        </p>
        <div className="inline-flex">
          <FaArrowLeft size={30} className="text-white px-2 py-2 ring-1 text-sm rounded-full mr-5"/>
          <FaArrowRight size={30} className="text-white px-2 py-2 ring-1 text-sm bg-orange-500 rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;
