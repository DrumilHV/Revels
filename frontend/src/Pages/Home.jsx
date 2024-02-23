import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CounterUnit({ children, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-6xl lg:text-9xl inline-block">{children}</span>
      <span className="inline-block text-2xl lg:text-4xl">{label}</span>
    </div>
  );
}

function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Specify the target date and time here
  const targetDate = new Date("2024-03-20T00:00:00");

  useEffect(() => {
    const now = new Date();
    const remainingTime = Math.floor((targetDate - now) / 1000);

    if (remainingTime <= 0) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const days = Math.floor(remainingTime / 86400);
    const hours = Math.floor((remainingTime % 86400) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    setCountdown({ days, hours, minutes, seconds });

    const intervalId = setInterval(() => {
      const now = new Date();
      const remainingTime = Math.floor((targetDate - now) / 1000);

      if (remainingTime <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId);
      } else {
        const days = Math.floor(remainingTime / 86400);
        const hours = Math.floor((remainingTime % 86400) / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <Footer />
      <div className="min-h-screen flex flex-col gap-y-16 items-center overflow-hidden overscroll-y-hidden pt-28 pb-28 md:pb-0 bg-none md:bg-hero-background bg-bottom">
        <div className="text-[#FFFFFF] font-extrabold font-mono flex md:flex-row">
          <div className="flex flex-col md:flex-row gap-8">
            <CounterUnit label="days">
              {countdown.days.toString().padStart(2, "0")}
            </CounterUnit>
            <span className="text-6xl lg:pt-2 hidden md:block lg:text-8xl">
              :
            </span>
            <CounterUnit label="hours">
              {countdown.hours.toString().padStart(2, "0")}
            </CounterUnit>
            <span className="text-6xl lg:pt-2 hidden md:block lg:text-8xl">
              :
            </span>
            <CounterUnit label="minutes">
              {countdown.minutes.toString().padStart(2, "0")}
            </CounterUnit>
            <span className="text-6xl lg:pt-2 hidden md:block lg:text-8xl">
              :
            </span>
            <CounterUnit label="seconds">
              {countdown.seconds.toString().padStart(2, "0")}
            </CounterUnit>
          </div>
        </div>
        {/* Centered about section */}
        <div className="text-[20px] px-8 max-w-[1000px] text-[#FFFFFF] font-medium text-justify">
          <p>
            {/* Your about section content here */}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            nisi aliquam voluptas a consequuntur! Quibusdam, reprehenderit est
            rem molestiae vel delectus autem soluta eligendi perferendis
            recusandae, nemo, molestias rerum natus.
          </p>
        </div>
        {/* Buttons */}
        <div className="flex justify-center items-center flex-col gap-6">
          <a
            href="https://register.revelsmit.in/login"
            className="text-xl text-[#FFFFFF]"
          >
            {" "}
            <button className="border-[2px] px-8 py-2 text-lg text-[#FFFFFF] rounded-lg">
              LOGIN
            </button>
          </a>
          {/* put url for the drive link */}
          <a
            href="https://drive.google.com/drive/folders/13kOLV2IEFrOTj02UdVde8FpznAHsklEI"
            target="_blank"
          >
            <button className="border-[2px] px-10 py-2 text-lg text-[#FFFFFF] rounded-lg flex">
              VIEW RULEBOOK
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
