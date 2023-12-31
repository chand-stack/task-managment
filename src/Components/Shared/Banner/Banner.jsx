import { Link } from "react-router-dom";
import bg from "../../../assets/cover.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Banner = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Master Your Productivity with Seamless Task Management
            </h1>
            <p className="mb-5 text-white">
              Boost your productivity with TaskNinja, the go-to platform for
              efficient task management. Seamlessly organize, prioritize, and
              collaborate on tasks. From project planning to deadline tracking,
              TaskNinja simplifies your workflow. Conquer tasks effortlessly and
              elevate your efficiency. Experience productivity like never before
              with TaskNinja!
            </p>
            <Link
              to={user ? "/dashboard/task" : "/login"}
              className="btn bg-[#1e90ff] md:text-lg text-white border-none hover:text-black"
            >
              Let’s Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
