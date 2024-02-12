// import React from "react";
// import QrScanner from "qr-scanner";
// const imageScanner = document.getElementById("video");
// const Scan = () => {
//   const qrScanner = new QrScanner(imageScanner, (result) =>
//     console.log("decoded qr code:", result)
//   );
//   qrScanner.start();
// };
// const NoScan = () => {
//   const qrScanner = new QrScanner(imageScanner, (result) =>
//     console.log("decoded qr code:", result)
//   );
//   qrScanner.stop();
// };
// const Scanner = () => {
//   return (
//     <>
//       <video id="video"></video>
//       <button onClick={Scan}>Scan</button>
//       <button onClick={NoScan}>Stop</button>
//     </>
//   );
// };

// export default Scanner;

import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const Scanner = () => {
  const videoRef = useRef(null);

  const startScan = () => {
    const qrScanner = new QrScanner(videoRef.current, (result) =>
      console.log("decoded qr code:", result)
    );
    qrScanner.start();
  };

  const stopScan = () => {
    const qrScanner = new QrScanner(videoRef.current, (result) =>
      console.log("decoded qr code:", result)
    );
    qrScanner.stop();
  };

  useEffect(() => {
    startScan(); // Optionally start the scan when the component mounts
    return () => stopScan(); // Optionally stop the scan when the component unmounts
  }, []);

  return (
    <>
      <video ref={videoRef} autoPlay playsInline muted></video>
      <button onClick={startScan}>Scan</button>
      <button onClick={stopScan}>Stop</button>
    </>
  );
};

export default Scanner;
