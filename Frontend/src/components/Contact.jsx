import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.fullname,
      email: data.email,
      message: data.message,
    };

    await axios
      .post("http://localhost:4001/contact", contactInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Your response submitted successfully");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          // alert("Error: " + err.response.data.message);
          toast.error("Error: " + err.response.data.message);
        }
      });

    reset();
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md shadow-md border rounded-lg p-6 ">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark-mode-style"
                {...register("fullname", { required: true })}
              />{" "}
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark-mode-style"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark-mode-style"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                type="submit"
                className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
