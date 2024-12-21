import React from "react";
import Fanta from "../assets/fanta.jpg"
import Pepsi from "../assets/pepsi.webp"
import Cocacola from "../assets/cocacola.webp"
const ProductSection = () => {
  const products = [
    { 
        image: Fanta 
    },
    { 
        image: Pepsi
    },
    { 
        image: Cocacola
    },
  ];

  return (
    <div className="flex bg-gradient-to-r from-[#081358] via-[#0284c7] to-[#081358] justify-center space-x-6 py-10 bg-[#081358] text-white">
      {products.map((product, index) => (
        <div key={index} className="text-center">
          <img src={product.image} alt={product.name} className="w-96 h-32 object-cover mb-4 rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
