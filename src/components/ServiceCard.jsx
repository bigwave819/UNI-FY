import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ServiceCard = ({ title, imageSrc, description }) => {
  return (
    <div className="bg-blue-900 rounded-lg shadow-lg p-6">
      <img src={imageSrc} alt={title} className="rounded-lg mb-4" />
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <button className="flex items-center mt-4 text-white hover:text-blue-400">
        View Details <BsFillArrowRightCircleFill className="ml-2" />
      </button>
    </div>
  );
};

export default ServiceCard;