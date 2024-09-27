import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center border">
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
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />{" "}
              <br />
              {errors.name && (
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
                className="w-80 px-3 py-1 border rounded-md outline-none"
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
                className="w-80 px-3 py-1 border rounded-md outline-none"
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
  );
};

export default Signup;
