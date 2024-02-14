import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Logo */}
      {/* <div className="flex items-center">
        <svg
          className="h-6 w-6 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="../assets/revels-logo.png"
        >
          <path
            d="M12 2C6.627 2 2 6.627 2 12s4.627 10 10 10s10-4.627 10-10S17.373 2 12 2z"
            fill="currentColor"
          />
          <path
            d="M12 7.5H7.5a.75.75 0 01-1.5 0L6 9v7.5a.75.75 0 01-1.5 0v-6a.75.75 0 011.5-.75l4.5-3.75a.75.75 0 011.5 0l4.5 3.75a.75.75 0 011.5.75v6a.75.75 0 01-1.5.75z"
            fill="currentColor"
          />
        </svg>
      </div> */}
      <nav className="text-white  flex justify-center items-center h-[30px] font-medium text-xl mt-[42px]">
        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-4">
          <li>
            <Link to="/" className="px-3 py-2 rounded-xl hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-2 rounded-xl hover:bg-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/sponsors"
              className="px-3 py-2 rounded-xl hover:bg-gray-700"
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="px-3 py-2 rounded-xl hover:bg-gray-700"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/leaderboard"
              className="px-3 py-2 rounded-xl hover:bg-gray-700"
            >
              Leaderboard
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="px-3 py-2 rounded-xl hover:bg-gray-700"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="block lg:hidden focus:outline-none">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4 6h16v2H4V6zm16 8h-4v2h4V14zm-8 4h-4v2h4V18z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
