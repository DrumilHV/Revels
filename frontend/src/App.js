import React from "react";
import { Route, Routes } from "react-router-dom";
import Scanner from "./Scanner";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/scanner"} element={<Scanner />} />
      </Routes>
    </>
  );
}

export default App;
