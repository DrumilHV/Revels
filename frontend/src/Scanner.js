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

// Drumil's Video code:
import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const Scanner = () => {
  const videoRef = useRef(null);
  let qrScanner = null;

  const startScan = () => {
    try {
      if (!qrScanner) {
        qrScanner = new QrScanner(videoRef.current, (result) =>
          console.log("decoded qr code:", result)
        );
        qrScanner.start();
      }
    } catch (error) {
      console.log("Error in startScan: ", error);
    }
  };

  const stopScan = () => {
    try {
      if (qrScanner) {
        qrScanner.stop();
        qrScanner.destroy();
        qrScanner = null;
      }
    } catch (error) {
      console.log("Error in stopScan: ", error);
    }
  };

  useEffect(() => {
    startScan(); // Optionally start the scan when the component mounts
    return () => {
      stopScan(); // Optionally stop the scan when the component unmounts
    };
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
// ...................................................

// import React from "react";

// const Scanner = () => {
//   const handleImage = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       reader.readAsDataURL(e.target.files[0]);
//     };
//   };

//   return (
//     <>
//       <input
//         id="file"
//         name="file"
//         type="file"
//         accept="image/png, image/jpeg"
//         onChange={handleImage}
//       />
//     </>
//   );
// };

// export default Scanner;
