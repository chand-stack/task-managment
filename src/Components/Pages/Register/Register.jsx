import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../../assets/login.jpg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Register = () => {
  const { createUser, updateUser, googleLogin, githublogin } =
    useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        updateUser(data.name, data.photo)
          .then((res) => {
            Swal.fire({
              title: "Congratulations!!",
              text: "You're now a proud member of the TaskNinja community!",
              icon: "success",
            });
            navigate("/dashboard/task");
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleHandler = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Congratulations!!",
          text: "You're now a proud member of the TaskNinja community!",
          icon: "success",
        });
        navigate("/dashboard/task");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubHandler = () => {
    githublogin()
      .then(() => {
        Swal.fire({
          title: "Congratulations!!",
          text: "You're now a proud member of the TaskNinja community!",
          icon: "success",
        });
        navigate("/dashboard/task");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto mt-5 md:mt-20">
      <div className="lg:w-3/4 lg:mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo url</span>
            </label>
            <input
              {...register("photo")}
              type="url"
              placeholder="your photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <label className="label">
            <p className="text-base font-medium">
              Already have an account please{" "}
              <Link to="/login" className="font-bold text-blue-500">
                Sign in
              </Link>
            </p>
          </label>
          <div className="text-center pb-3 space-y-2">
            <p className="text-center text-black">---OR---</p>
            <div className="md:flex items-center gap-2">
              <button
                type="button"
                onClick={googleHandler}
                className=" btn btn-outline text-black"
              >
                Continue With Google <FcGoogle className="text-2xl" />
              </button>
              <button
                type="button"
                onClick={githubHandler}
                className=" btn btn-outline text-black mt-2 md:mt-0"
              >
                Continue With GitHub <FaGithub className="text-2xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <img className="h-96 mx-auto" src={loginimg} alt="" />
      </div>
    </div>
  );
};

export default Register;
