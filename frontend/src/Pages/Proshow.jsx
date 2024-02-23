import { useState } from "react";
import ProshowCard from "./ProshowCard.jsx";
import "./Proshow.scss";
import { PROSHOW_EVENTS } from "./ProshowEvent.jsx";
import QrScanner from "qr-scanner";
import { useAppContext } from "../context/appContext.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function ProshowFinal() {
  const { registerQR, isLoading } = useAppContext();
  const [selectedDay, setSelectedDay] = useState("DAY ONE");

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
          })
          .catch((error) => {
            console.error("error scanning image:", error);
          });
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Navbar />
      <Footer />
      <div className="proshow-container pt-32 mb-16">
        <div className="proshow-title">PROSHOW 2023</div>

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
          <label
            htmlFor="qr-input"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          >
            Upload QR
          </label>
          <input
            id="qr-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={isLoading}
            style={{ display: "none" }}
          />
        </div>
        <div className="text-center pt-8 pb-4 text-gray-900 font-bold">
          *Book your entry only if you have already bought the proshow pass
        </div>
      </div>
    </>
  );
}
