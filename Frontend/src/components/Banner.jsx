import React from "react";
import banner from "../../public/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
          <div className="space-y-10">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              magnam, et perspiciatis quas neque dolorum officiis suscipit,
              ducimus quibusdam alias voluptates excepturi rem.
            </p>
          </div>
          <button className="mt-6 bg-pink-500 text-white rounded-md py-3 px-4 hover:bg-pink-700 duration-200">
            {" "}
            <Link to="/signup" className=" cursor-pointer">
              Get Started
            </Link>
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center mt-16">
          <img src={banner} alt="banner" className="w-4/5 h-auto" />
        </div>
      </div>
    </>
  );
};

export default Banner;
