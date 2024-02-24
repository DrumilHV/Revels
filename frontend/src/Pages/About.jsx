import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/revels-logo.png";
import star from "../assets/star.svg";
import Footer from "../components/Footer";

const About = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Footer />
      <br />
      <div
        className={` text-[#FFFFFF] text-2xl p-2 overflow-y-scroll flex flex-col items-center lg:m-[100px] lg:mt-[10px] m-[10px] no-scrollbar md:mt-[40px] transition-all duration-300 
        `}
      >
        <p className="text-[#FFFFFF] text-[45px] font-extrabold ml-2 self-start">
          Revels'24
        </p>
        <br />
        <div className="pt-8 flex self-start">
          <img className="h-10 w-10" src={star} alt="Star" />
          <p className="text-[#FFFFFF] text-2xl ml-2">History</p>
        </div>
        <div className="flex flex-col items-center  pt-8 w-full max-[880px] md:flex-row text-justify">
          In 1982, Manipal Institute of Technology, Manipal, celebrated its Ruby
          Jubilee. To commemorate the milestone, the administration and the
          students came up with a string of events, that aimed at propagating
          Arts and Culture. From these efforts was born Revels&apos;82- “Stormy
          Interlude”, the first edition of the cultural fest, presided by
          dignitaries led by Shri Govind Narain (then Governor of Karnataka
          state). Over time, the fest has grown to mammoth proportions, boasting
          both sustained participation and an enthused Organizing Team.
          {window.innerWidth >= 1024 ? (
            <img
              className="lg:h-[300px] lg:w-[300px] h-auto w-auto mx-auto mt-[0px]"
              src={logo}
              alt="Revels'24"
            />
          ) : (
            <img
              className="lg:h-[300px] lg:w-[300px] h-auto w-auto mx-auto mt-1"
              src={logo}
              alt="Revels'24"
            />
          )}
        </div>
        <div className="text-justify p-2">
          The theme for this year- AAROHAN-Infinite Horizons signifies an
          ascension into newer and greater heights. It signifies the boundless
          dreams one seeks to achieve. The countless nights one spends dreaming
          about the goal.
          <br />
          We invite you cordially to join Revels ‘24, with the hope and sheer
          confidence that you will have the time of your lives!
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default About;
