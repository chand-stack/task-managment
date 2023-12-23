import { Link } from "react-router-dom";
import logo from "../../../assets/logo-taskio-tasklogo.png";
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-blue-400 text-white">
        <aside>
          <div className="flex items-center">
            <img className="w-20 " src={logo} alt="" />
            <p className="font-extrabold">ninja</p>
          </div>
          <p className="font-bold">
            TaskNinja © 2023 | Elevate Your Productivity
          </p>
          <p className="font-bold">Providing innovative solutions since 2020</p>
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebookF className="text-2xl" />
            </Link>
            <Link>
              <AiFillInstagram className="text-2xl" />
            </Link>
            <Link>
              <FaTwitter className="text-2xl" />
            </Link>
            <Link>
              <FaLinkedinIn className="text-2xl" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
