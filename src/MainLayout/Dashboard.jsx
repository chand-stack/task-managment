import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo-taskio-tasklogo.png";
import { BsMenuButtonWideFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex font-poppin mx-auto">
      <div className="lg:w-1/4 min-h-screen bg-slate-50">
        <div className="hidden lg:flex items-center justify-center py-5">
          <img className="w-12" src={logo} alt="" />
          <h1 className="font-extrabold text-xl">Ninja</h1>
        </div>
        <div className="hidden lg:contents">
          <div className="space-y-3 p-3">
            <img
              className="h-20 w-20 rounded-full mx-auto border-4 border-blue-500"
              src={user.photoURL}
              alt=""
            />
            <h1 className="flex items-center gap-2 text-lg rounded-xl py-1 border-y font-semibold text-blue-600">
              <CgProfile /> Name: {user.displayName}
            </h1>
            <h1 className="flex items-center gap-2 text-lg rounded-xl py-1 border-y font-semibold text-blue-600">
              <BsFillBookmarkStarFill /> Email: {user.email}
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
                  {/* users routes */}
                  <li className="btn w-full text-lg btn-sm rounded-xl">
                    <NavLink
                      to="/dashboard/profile"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-blue-600 text-white w-full h-full rounded-xl"
                          : ""
                      }
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li className="btn w-full text-lg btn-sm rounded-xl">
                    <NavLink
                      to="/dashboard/appointments"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-blue-600 text-white w-full h-full rounded-xl"
                          : ""
                      }
                    >
                      Upcoming Appointments
                    </NavLink>
                  </li>
                  <li className="btn w-full text-lg btn-sm rounded-xl">
                    <NavLink
                      to="/dashboard/testresults"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-blue-600 text-white w-full h-full rounded-xl"
                          : ""
                      }
                    >
                      Test results
                    </NavLink>
                  </li>
                  <li className="btn w-full text-lg btn-sm rounded-xl">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-blue-600 text-white w-full h-full rounded-xl"
                          : ""
                      }
                    >
                      Home
                    </NavLink>
                  </li>
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
