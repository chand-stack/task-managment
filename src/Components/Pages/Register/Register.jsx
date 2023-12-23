import { Link } from "react-router-dom";
import loginimg from "../../../assets/login.jpg";
const Register = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto mt-5 md:mt-20">
      <div className="lg:w-3/4 lg:mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center">Sign up</h1>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
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
        </form>
      </div>
      <div>
        <img className="h-96 mx-auto" src={loginimg} alt="" />
      </div>
    </div>
  );
};

export default Register;
