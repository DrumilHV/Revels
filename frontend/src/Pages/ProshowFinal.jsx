import { useState, useRef } from "react";
import ProshowCard from "./ProshowCard.jsx";
import "./Proshow.scss";
import { PROSHOW_EVENTS } from "./ProshowEvent.jsx";
import QrScanner from "qr-scanner";
import { useAppContext } from "../context/appContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import moment from "moment-timezone";

export default function ProshowFinal() {
  const { registerQR, isLoading } = useAppContext();
  const [selectedDay, setSelectedDay] = useState("DAY ONE");
  const fileInputRef = useRef(null);

  const registrationTimings = {
    "DAY ONE": {
      startTime: "2024-03-03 10:00:00",
      endTime: "2024-03-06 12:00:00",
      maxLimit: 3000,
    },
    "DAY TWO": {
      startTime: "2024-03-04 10:00:00",
      endTime: "2024-03-07 12:00:00",
      maxLimit: 3000,
    },
    "DAY THREE": {
      startTime: "2024-03-04 10:00:00",
      endTime: "2024-03-09 12:00:00",
      maxLimit: 20000,
    },
  };

  const uniqueDays = [...new Set(PROSHOW_EVENTS.map((event) => event.day))];

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        QrScanner.scanImage(image)
          .then((result) => {
            console.log("decoded qr code from image:", result);
            let mappedDay;
            switch (selectedDay) {
              case "DAY ONE":
                mappedDay = "day1";
                break;
              case "DAY TWO":
                mappedDay = "day2";
                break;
              case "DAY THREE":
                mappedDay = "day3";
                break;
              default:
                mappedDay = "";
            }
            registerQR({ QRData: result, day: mappedDay });
            if (fileInputRef.current) {
              fileInputRef.current.value = null;
            }
          })
          .catch((error) => {
            console.error("error scanning image:", error);
          });
      };
    };
    reader.readAsDataURL(file);
  };

  const isRegistrationOpen = (day) => {
    const currentTime = moment().tz("Asia/Kolkata");
    const startTime = moment(
      registrationTimings[day].startTime,
      "YYYY-MM-DD HH:mm:ss"
    ).tz("Asia/Kolkata");
    const endTime = moment(
      registrationTimings[day].endTime,
      "YYYY-MM-DD HH:mm:ss"
    ).tz("Asia/Kolkata");
    return currentTime.isBetween(startTime, endTime);
  };

  return (
    <>
      <Navbar />
      <Footer />
      <div className="proshow-container mb-8">
        <div className="proshow-title tracking-wider">PROSHOW 2024</div>

        <div className="flex justify-center">
          {uniqueDays.map((day) => (
            <button
              key={day}
              className={`mx-2 p-2 ${
                selectedDay === day ? "bg-yellow-500" : "bg-gray-500"
              } rounded`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex flex-row flex-wrap justify-center">
          {PROSHOW_EVENTS.filter((event) => event.day === selectedDay).map(
            (filteredEvent) => (
              <div className="m-4" key={filteredEvent.id}>
                <ProshowCard event={filteredEvent} />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center">
          <div className="alert-card bg-dark text-white py-2 px-4 flex items-center justify-center rounded mb-2 mx-2">
            <AiOutlineExclamationCircle className="mr-2" />
            Registration open from{" "}
            {moment(
              registrationTimings[selectedDay].startTime,
              "YYYY-MM-DD HH:mm:ss"
            )
              .tz("Asia/Kolkata")
              .format("MMMM Do YYYY, h:mm a")}{" "}
            to{" "}
            {moment(
              registrationTimings[selectedDay].endTime,
              "YYYY-MM-DD HH:mm:ss"
            )
              .tz("Asia/Kolkata")
              .format("MMMM Do YYYY, h:mm a")}
          </div>
        </div>

        <div className="flex justify-center">
          <label
            htmlFor="qr-input"
            className={`bg-blue-500 text-white px-4 py-2 rounded cursor-pointer ${
              !isRegistrationOpen(selectedDay) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            Upload QR
          </label>
          <input
            id="qr-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isLoading || !isRegistrationOpen(selectedDay)}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
        </div>
        <div className="text-center pt-8 pb-4 text-gray-900 font-bold">
          *Book your entry only if you have already bought the proshow pass
        </div>
      </div>
    </>
  );
}
