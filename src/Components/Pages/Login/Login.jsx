import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser, googleLogin, githublogin } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((res) => {
        Swal.fire({
          title: "Login complete!!",
          text: " Your productivity adventure starts now",
          icon: "success",
        });
        navigate("/dashboard/task");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const googleHandler = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Login complete!!",
          text: " Your productivity adventure starts now",
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
          title: "Login complete!!",
          text: " Your productivity adventure starts now",
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
        <h1 className="text-2xl md:text-5xl font-bold text-center">Sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <label className="label">
            <p className="text-base font-medium">
              Don&lsquo;t have an account please{" "}
              <Link to="/register" className="font-bold text-blue-500">
                Register
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

export default Login;
