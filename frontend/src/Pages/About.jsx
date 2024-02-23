//About.jsx
import Navbar from "../components/Navbar";
import logo from "../assets/revels-logo.png";
import star from "../assets/star.svg";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Footer />
      <div className="min-h-screen max-h-screen overflow-y-scroll flex flex-col overscroll-y-auto lg:m-[100px] m-[10px] no-scrollbar md:mt-[20px]">
        <div className="flex flex-row max-[880px]:flex-col">
          <div className="flex-[60%]">
            <div className="flex flex-col ">
              <div className="">
                <h1 className="text-[69px] max-[360px]:text-[60px] max-[640px]:text-center text-left pl-[80px] pt-[30px] inline-block text-[#FFFFFF] font-bold">
                  Revels 24
                </h1>
              </div>
              <div className="flex items-center mt-[50px] ">
                <img className="pl-[80px]  " src={star} alt="star" />
                <p className="text-[#FFFFFF] text-[45px] ml-2">History</p>
              </div>
              <div className="max-[640px]:max-w-[70%] max-[640px] h-full ml-[80px] mt-[20px]">
                <p className="text-[#FFFFFF] text-[30px] max-[640px]:text-[20px] ">
                  In 1982, Manipal Institute of Technology, Manipal, celebrated
                  its Ruby Jubilee. To commemorate the milestone, the
                  administration and the students came up with a string of
                  events, that aimed at propagating Arts and Culture. From these
                  efforts was born Revels&apos;82- “Stormy Interlude”, the first
                  edition of the cultural fest, presided by dignitaries led by
                  Shri Govind Narain (then Governor of Karnataka state). Over
                  time, the fest has grown to mammoth proportions, boasting both
                  sustained participation and an enthused Organizing Team.
                </p>
              </div>
            </div>
          </div>
          <img
            className="h-[400px] w-[400px] justify-self-center max-[990px]:right-[1%] right-[15%] "
            src={logo}
            alt="Revels 24"
          />
        </div>

        <div className="max-w-[70%] h-full ml-[80px] mt-[20px] ">
          <p className="text-[#FFFFFF] text-[30px] max-[640px]:text-[20px] max-[640px]:text-balance">
            The theme for this year- AAROHAN-Infinite Horizons signifies an
            ascension into newer and greater heights. It signifies the boundless
            dreams one seeks to achieve. The countless nights one spends
            dreaming about the goal.
            <br />
            We invite you cordially to join Revels ‘24, with the hope and sheer
            confidence that you will have the time of your lives!
          </p>
        </div>
        <div className="max-w-[70%] h-full ml-[80px] mt-[20px]">
          <p className="text-[#FFFFFF] text-[30px] ">
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
