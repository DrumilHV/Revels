import { useEffect, useState } from "react";

function Home() {
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    // Hardcoded initial time
    const initialTime = 24 * 60 * 60; // 24 hours in seconds
    let remainingTime = initialTime;

    const intervalId = setInterval(() => {
      if (remainingTime <= 0) {
        setCountdown("00:00:00");
        clearInterval(intervalId);
      } else {
        remainingTime -= 1; // Decrement by 1 second
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;
        setCountdown(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container min-h-screen flex flex-col items-center">
      {/* Centered counter */}
      <div className="text-4xl text-center p-[80px] text-[#FFFFFF] font-bold ">
        {countdown}
      </div>

      {/* Centered about section */}
      <div className="text-md px-8 max-w-[1000px] text-[#FFFFFF] font-medium text-justify text-xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
          amet ligula ac dolor vehicula laoreet id nec libero. Morbi sit amet
          sem consectetur, semper elit semper, aliquam dolor sit amet. Curabitur
          vitae orci ut libero eleifend finibus eget eu lorem. Morbi et ultrices
          magna. Nulla sed mi at urna molestie tincidunt. Pellentesque eget
          lorem vitae justo cursus aliquam at id magna. Curabitur euismod nibh
          semper lorem volutpat egestas. Nam vitae est id dui rutrum consectetur
          eget quis laoreet. Proin ac laoreet laoreet, nec consectetur nibh.
          Curabitur et nibh ultrices, egestas nisi eget, dapibus magna.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-10">
        <button className="btn btn-primary border-[2px] px-10 py-3 text-xl text-[#FFFFFF] rounded-2xl">
          Login
        </button>
        <button className="btn btn-secondary ml-4 border-[2px] px-10 py-3 text-xl text-[#FFFFFF] rounded-2xl">
          Download Rule Book
        </button>
      </div>
    </div>
  );
}

export default Home;
