import { useState } from "react";
import { Link } from "react-router-dom";
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
              <Link
                to={linked.link}
                className="block py-2 px-4 hover:underline duration-500 lg:text-[27px] md:text-[22px]"
              >
                {linked.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
