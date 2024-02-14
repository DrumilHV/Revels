import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Assuming you have components for each link
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Schedule from "./components/Schedule";
import Leaderboard from "./components/Leaderboard";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
