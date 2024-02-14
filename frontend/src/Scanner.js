import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner";

const Scanner = () => {
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    qrScannerRef.current = new QrScanner(videoRef.current, (result) => {
      console.log("decoded qr code:", result);
      stopScan();
    });
    qrScannerRef.current.start();

    return () => stopScan();
  }, []);

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
            stopScan();
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
      <video ref={videoRef} autoPlay playsInline muted></video>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={startScan}>Scan</button>
      <button onClick={stopScan}>Stop</button>
    </>
  );
};

export default Scanner;
