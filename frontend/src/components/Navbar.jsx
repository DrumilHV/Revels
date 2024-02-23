import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/revels-logo.png";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    // { name: "Sponsors", link: "/sponsors" },
    { name: "Schedule", link: "/schedule" },
    // { name: "Leaderboard", link: "/leaderboard" },
    { name: "Events", link: "/event" },
    // { name: "Proshow", link: "/proshow" },
    { name: "Contact Us", link: "/contact-us" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 backdrop-blur-lg">
      <div className="md:flex items-center justify-between md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img
            className={`h-[92px] w-[92px] justify-self-center max-[990px]:right-[1%] right-[15%] ${
              open ? "opacity-0" : "opacity-100"
            } transition-all duration-300 ease-in 
            `}
            src={Logo}
            alt="Revels 24"
          />
        </div>
        <div className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-[#FFFFFF]">
          <Hamburger toggled={open} toggle={setOpen} size={26} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${
            open ? "top-0 bg-[#0F1E31] z-10" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className={`text-[#FFFFFF] lg:text-[27px] md:text-[22px] hover:border-b-2 hover:border-white duration-500 ${
                  window.location.pathname === link.link
                    ? "border-b-2 border-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
