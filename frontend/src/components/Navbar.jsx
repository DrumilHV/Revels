import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/revels-logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Schedule", link: "/schedule" },
    { name: "Events", link: "/event" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`sticky top-0 z-50 shadow-md backdrop-blur-lg ${
        open ? "bg-[#0F1E31]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-0 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Revels 24" className="h-[52px] md:h-16 mr-2" />
          </Link>
          <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-[#FFFFFF]">
            <Hamburger toggled={open} toggle={setOpen} size={24} />
          </div>
        </div>
        <ul
          className={`md:flex md:space-x-6 text-white mt-4 md:mt-0 ${
            open ? "block" : "hidden md:block"
          }`}
        >
          {Links.map((linked, index) => (
            <li key={index}>
              <div className="flex justify-center">
                <Link
                  to={linked.link}
                  className={`px-2 my-2 duration-500 hover:border-b-2 hover:border-white lg:text-[27px] md:text-[22px] ${
                    location.pathname === linked.link
                      ? "border-b-2 border-white"
                      : ""
                  }`}
                >
                  {linked.name}
                </Link>
              </div>
            </li>
          ))}
          <li className="md:hidden">
            <div className="flex justify-center">
              <a
                href="https://register.revelsmit.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[rgba(235, 164, 112, 1)] text-white rounded-md duration-500 bg-[#D09369] hover:bg-[#9C493F] lg:text-[18px] md:text-[16px]"
              >
                Login
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
