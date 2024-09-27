import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen container mx-auto md:px-20 px-4">
        <div className="mt-28 px-4 py-2 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here!</span>
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            fugit est. Odit, odio! Explicabo magnam, iste doloribus optio
            officiis ipsa blanditiis fugiat animi Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusamus voluptatibus ducimus dolor
            cupiditate in totam, praesentium consequuntur expedita eius
            similique tempora reprehenderit quam.
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 mt-3 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Courses;
