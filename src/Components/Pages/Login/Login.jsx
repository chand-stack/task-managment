import { Link, useNavigate } from "react-router-dom";
import loginimg from "../../../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((res) => {
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
            <button className="btn btn-primary">Login</button>
          </div>
          <label className="label">
            <p className="text-base font-medium">
              Don&lsquo;t have an account please{" "}
              <Link to="/register" className="font-bold text-blue-500">
                Register
              </Link>
            </p>
          </label>
        </form>
      </div>
      <div>
        <img className="h-96 mx-auto" src={loginimg} alt="" />
      </div>
    </div>
  );
};

export default Login;
