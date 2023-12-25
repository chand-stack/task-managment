import bg from "../../../assets/logo-taskio-tasklogo.png";
import { FaBell } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="container mx-auto md:px-10 mt-10">
      <div
        className="h-52 md:h-64 "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full bg-[#1e90ff] bg-opacity-95 lg:flex text-center pt-10 lg:pt-0 justify-evenly items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Subscribe to Our <br /> News Letter
          </h1>
          <div className="join w-[400px]">
            <input
              className="input w-full h-14 input-bordered join-item"
              placeholder="Enter Email Address"
            />
            <button className="btn join-item h-14 rounded-r-full bg-orange-400 border-none text-white">
              Subscribe
              <FaBell className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
