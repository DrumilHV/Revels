import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      <h1>
        <Link to={"/scanner"}>Scanner</Link>
      </h1>
    </>
  );
};

export default Home;
