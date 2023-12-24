import { NavLink, Outlet } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../assets/logo-taskio-tasklogo.png";
import { BsMenuButtonWideFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  return (
    <div className="flex font-poppin mx-auto">
      <div className="lg:w-1/4 min-h-screen bg-slate-50">
        <div className="hidden lg:flex items-center justify-center py-5">
          <img className="w-12" src={logo} alt="user" />
          <h1 className="font-extrabold text-xl">Ninja</h1>
        </div>
        <div className="hidden lg:contents">
          <div className="space-y-3 p-3 -mt-8">
            <img
              className="h-20 w-20 rounded-full mx-auto border-4 border-blue-500"
              src={user?.photoURL}
              alt=""
            />
            <h1 className="flex items-center gap-2 text-lg rounded-xl py-1 border-y font-semibold text-blue-600">
              <CgProfile /> Name: {user?.displayName}
            </h1>
            <h1 className="flex items-center gap-2 text-lg rounded-xl py-1 border-y font-semibold text-blue-600">
              <BsFillBookmarkStarFill /> Email: {user?.email}
            </h1>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-blue-600 flex items-center gap-2"
                  : "flex items-center gap-2 text-lg rounded-xl py-1 border-y font-semibold text-blue-600"
              }
            >
              <FaHome />
              Back To Home
            </NavLink>
          </div>
          <div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Titles</span>
                </label>
                <input
                  // {...register("email")}
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Description</span>
                </label>
                <input
                  // {...register("password")}
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Deadline</span>
                </label>
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Priority</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option>Low</option>
                  <option>Moderate</option>
                  <option>High</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add to TODO</button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:hidden fixed z-50">
          {/* drawer for mobile */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="pt-2 pl-1 drawer-button lg:hidden"
              >
                <BsMenuButtonWideFill className="text-3xl" />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu-vertical p-4 w-80 space-y-4 min-h-full bg-base-200">
                <div className="flex items-center justify-center py-5">
                  <img className="w-12" src={logo} alt="" />
                  <h1 className="font-extrabold text-xl">Ninja</h1>
                </div>
                {/* Sidebar content here */}

                <>
                  <div className="space-y-3 p-3">
                    <img
                      className="h-20 w-20 rounded-full mx-auto border-4 border-blue-500"
                      src={user.photoURL}
                      alt=""
                    />
                    <h1 className="flex items-center gap-2 rounded-xl py-1 border-y font-semibold text-blue-600">
                      <CgProfile /> Name: {user.displayName}
                    </h1>
                    <h1 className="flex items-center gap-2 rounded-xl py-1 border-y font-semibold text-blue-600">
                      <BsFillBookmarkStarFill /> Email: {user.email}
                    </h1>
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-blue-600 flex items-center gap-2"
                          : "flex items-center gap-2 rounded-xl py-1 border-y font-semibold text-blue-600"
                      }
                    >
                      <FaHome />
                      Back To Home
                    </NavLink>
                  </div>
                  {/* users routes */}
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
