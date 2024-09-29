import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto  p-8">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-lg  leading-relaxed mb-4">
            Welcome to our website! We are passionate about providing the best
            services and ensuring that our customers are always satisfied. Our
            mission is to deliver high-quality solutions with a focus on
            customer experience.
          </p>
          <p className="text-lg  leading-relaxed mb-4">
            Our team is made up of dedicated professionals who work together to
            create innovative and impactful solutions. We are always striving to
            improve and welcome feedback from our valued clients.
          </p>
          <p className="text-lg  leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            minima maiores error, id quibusdam inventore quis sint animi ullam
            sit possimus illum quo, magnam autem delectus, itaque suscipit atque
            hic dolores perspiciatis ea. Explicabo autem accusamus illum quo
            vitae. Modi optio mollitia fuga, labore placeat debitis at
            aspernatur dignissimos fugiat?
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
