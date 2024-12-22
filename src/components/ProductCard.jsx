import React from 'react';

const ProductCard = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-[#152064CC] rounded-lg shadow-lg p-6">
      <img src={imageSrc} alt={title} className="rounded-lg mb-4 h-52 w-[400px]" />
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-300 font-extralight">{description}</p>
      <button className="flex items-center text-sm mt-4 text-[#50CADE] px-4 py-2 ring-1 ring-[#50CADE] rounded-full">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;