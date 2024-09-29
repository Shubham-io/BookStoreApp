import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          // alert("Login successfully");
          toast.success("Loggedin Successfully!");
          document.getElementById("openLogin").close();
          setTimeout(() => {
            window.location.reload();
            // saving info in localStorage to provide user authorization
            localStorage.setItem("User", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
        // alert("Error " + err.response.data.message);
      });
  };
  return (
    <div>
      <dialog id="openLogin" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("openLogin").close()}
            >
              X
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* email */}
            <div className="space-y-2 mt-6 ">
              <label>Email</label>
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none dark-mode-style"
                {...register("email", { required: true })}
              />
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
                className="w-80 px-3 py-1 border rounded-md outline-none  dark-mode-style"
                {...register("password", { required: true })}
              />
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
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
