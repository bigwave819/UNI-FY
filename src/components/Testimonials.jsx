import React from "react";
import Programer1 from "../assets/programmer1.jpg"
import Programer2 from "../assets/programmer2.jpg"
import Programer3 from "../assets/programmer3.png"

const Testimonials = () => {
  return (
    <div className="text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl font-bold">What Our Clients Say</h2>
        <p className="text-gray-300 mt-4 font-thin">
        Allowing us to onboard new users and seamlessly integrate into already <br/>
        thriving web2 platforms and businesses to provide unrivalled value
        </p>

        {/* Testimonials Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold">Exceptional Service</h3>
            <p className="text-gray-400 mt-2">
              The team was incredibly helpful, ensuring our needs were met. Highly recommended!
            </p>
            <div className="flex space-x-12 mt-10">
                <img src={Programer1}
                 alt={Programer1} 
                 className="h-20 w-20 rounded-full"
                 />
                <div className="">
                <h4 className="text-gray-100 mt-4">John Marks</h4>
                <p className="text-gray-500">USA, Florida</p>
                </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold">Efficient and Reliable</h3>
            <p className="text-gray-400 mt-2">
              The process was smooth and efficient. The results exceeded expectations.
            </p>
            <div className="flex space-x-12 mt-10">
                <img src={Programer2}
                 alt={Programer2} 
                 className="h-20 w-20 rounded-full"
                 />
                <div className="">
                <h4 className="text-gray-100 mt-4">John Marks</h4>
                <p className="text-gray-500">USA, Florida</p>
                </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-800 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="flex">
                {Array(5).fill().map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold">Trusted Advisors</h3>
            <p className="text-gray-400 mt-2">
              Their expertise gave us peace of mind during challenging times.
            </p>
            <div className="flex space-x-12 mt-10">
                <img src={Programer3}
                 alt={Programer3} 
                 className="h-20 w-20 rounded-full"
                 />
                <div className="">
                <h4 className="text-gray-100 mt-4">John Marks</h4>
                <p className="text-gray-500">USA, Florida</p>
                </div>
            </div>
          </div>
        </div>

        {/* Find Out More Button */}
        <button className="mt-6 text-white px-6 py-3 ring-1 ring-white rounded">
          Find Out More
        </button>

        {/* Call-to-Action Section */}
        <div className="bg-blue-800 mt-16 p-8 rounded-lg text-center">
          <h3 className="text-lg font-semibold">FREE To Join For A Limited Time</h3>
          <p className="text-gray-400 mt-2">
            Take advantage of our special offer and join our community to reap the benefits.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
