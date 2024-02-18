import { useRef, useEffect } from "react";
import { FiUpload } from "react-icons/fi";
import QrScanner from "qr-scanner";
import "./Scanner.css";
import logo from "./assets/revels-logo.png";
import { useAppContext } from "./context/appContext";
import Loading from "./Pages/Loading";

const Scanner = () => {
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);
  const { UserEntry, isLoading } = useAppContext();

  useEffect(() => {
    qrScannerRef.current = new QrScanner(videoRef.current, (result) => {
      console.log("decoded qr code:", result);
      if (!isLoading) {
        UserEntry(result);
        stopScan();
      }
    });
    qrScannerRef.current.start();

    return () => stopScan();
  }, [UserEntry]);

  const startScan = () => {
    qrScannerRef.current.start();
  };

  const stopScan = () => {
    qrScannerRef.current.stop();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = () => {
        QrScanner.scanImage(image)
          .then((result) => {
            console.log("decoded qr code from image:", result);
            UserEntry(result);
          })
          .catch((error) => {
            console.error("error scanning image:", error);
          });
      };
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="test">
      <img className="logo" src={logo} alt="Revels 24" />
      <div className="scanner-container">
        <div className="camera-view">
          <video ref={videoRef} autoPlay playsInline muted></video>
          <div className="grid-container">
            <div className="grid-item"></div>
            <div
              className="grid-item"
              style={{ borderBottom: "2px solid green" }}
            ></div>
            <div className="grid-item"></div>
            <div
              className="grid-item"
              style={{ borderRight: "2px solid green" }}
            ></div>
            <div className="grid-item empty"></div>
            <div
              className="grid-item"
              style={{ borderLeft: "2px solid green" }}
            ></div>
            <div className="grid-item"></div>
            <div
              className="grid-item scan-buttons"
              style={{ borderTop: "2px solid green" }}
            >
              {" "}
              <label htmlFor="fileInput" className="upload-btn">
                <FiUpload />
                <p>Upload Image</p>
              </label>
              <input
                className="input-file"
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <div>
                <button className="scan-btn" onClick={startScan}>
                  Scan
                </button>
                <button className="stop-btn" onClick={stopScan}>
                  Stop
                </button>
              </div>
            </div>
            <div className="grid-item"></div>
          </div>
        </div>
        <div className="scan-buttons"></div>
      </div>
    </div>
  );
};

export default Scanner;
