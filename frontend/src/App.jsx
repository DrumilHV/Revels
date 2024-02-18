import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Sponsors from "./components/Sponsors";
import Schedule from "./components/Schedule";
import Leaderboard from "./components/Leaderboard";
import ContactUs from "./components/ContactUs";
import CCLogin from "./Pages/CCLogin";
import Alert from "./components/Alert";
import { CCProtect } from "./Pages/CCProtect";
import CCLogout from "./Pages/CCLogout";
import { NotFound } from "./Pages/NotFound";
import Scanning from "./Pages/Scanning";

const App = () => {
  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route
          path="/cc/scanner"
          element={
            <CCProtect>
              <Scanning />{" "}
            </CCProtect>
          }
        />
        <Route path="/cc" element={<CCLogin />} />
        <Route
          path="/cc/logout"
          element={
            <CCProtect>
              <CCLogout />
            </CCProtect>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
