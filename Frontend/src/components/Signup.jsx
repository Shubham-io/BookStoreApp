import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          navigate(from, { replace: true });
          setTimeout(() => {
            toast.success("Signup Successfully!");
            window.location.reload();
          }, 2000);
        }
        // saving info in localStorage to provide user authorization
        localStorage.setItem("User", JSON.stringify(res.data.user));

      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center border">
        <Navbar />
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                X
              </Link>

              <h3 className="font-bold text-lg">Singup</h3>

              {/* name  */}
              <div className="space-y-2 mt-6">
                <label>Name</label>
                <br />
                <input
                  type="name"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark-mode-style"
                  {...register("fullname", { required: true })}
                />{" "}
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* email */}
              <div className="space-y-2 mt-6">
                <label>Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark-mode-style"
                  {...register("email", { required: true })}
                />{" "}
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* password */}
              <div className="space-y-2 mt-4">
                <label>Password</label>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark-mode-style"
                  {...register("password", { required: true })}
                />{" "}
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* button  */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md py-2 px-4 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <button
                    to="/login"
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("openLogin").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
                <Login />
              </div>
            </form>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
