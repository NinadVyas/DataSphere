import React from "react";
import Laptop from "../assets/lap1.jpg";

const Shpere = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-[#4ac6ff] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Data Analytics Centrally
          </h1>
          <p>
            Our data management and analytics service provides comprehensive
            solutions for organizing, integrating, analyzing, and securing your
            valuable data assets. We focus on improving data quality, ensuring
            data integrity, and implementing robust security measures. With our
            tailored solutions, you can extract valuable insights from your
            data, make informed decisions, and gain a competitive advantage in
            today's data-driven landscape.
          </p>
          
          <button className="bg-black text-[#4ac6ff] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />

      </div>
    </div>
  );
};

export default Shpere;
