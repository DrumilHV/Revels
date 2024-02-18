import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import logo from "../assets/revels-logo.png";
import { useAppContext } from "../context/appContext";

const QRCard = ({ qrMessage, qrMessageType }) => {
  const isSuccess = qrMessageType === "success";
  const { keepScanning } = useAppContext();

  // Function to split qrMessage by <br> and render each line separately
  const renderMessageWithLineBreaks = () => {
    const lines = qrMessage.split("<br>");
    return lines.map((line, index) => (
      <p key={index} className="text-gray-700">
        {line}
      </p>
    ));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <div className="flex items-center justify-between">
          {isSuccess ? (
            <FaCheckCircle className="text-green-500 text-4xl" />
          ) : (
            <FaTimesCircle className="text-red-500 text-4xl" />
          )}
          <h1 className="text-3xl font-bold">
            {isSuccess ? "Success" : "Failure"}
          </h1>
        </div>
        <div>
          <hr
            className={
              isSuccess ? "border-green-500 my-4" : "border-red-500 my-4"
            }
          />
          <div className="mt-4">{renderMessageWithLineBreaks()}</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => {
              keepScanning();
            }}
          >
            Keep Scanning
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCard;
