import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CCLogin from "./Pages/CCLogin";
import Alert from "./components/Alert";
import { CCProtect } from "./Pages/CCProtect";
import CCPage from "./Pages/CCPage";
import CCLogout from "./Pages/CCLogout";
import Error from "./Pages/NotFound";
import Scanning from "./Pages/Scanning";
import Event from "./Pages/Event";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Sponsors from "./Pages/Sponsors";
import Schedule from "./Pages/Schedule";
import Leaderboard from "./Pages/Leaderboard";
import ContactUs from "./Pages/ContactUs";
import ProshowFinal from "./Pages/ProshowFinal";
import JudgeScore from "./Pages/JudgeScore";
import JudgeLogin from "./Pages/JudgeLogin";
import JudgeEvent from "./Pages/JudgeEvent";
import JudgeSelectTeam from "./Pages/JudgeSelectTeam";
import JudgeResult from "./Pages/JudgeResult";

const App = () => {
  const judgeId = localStorage.getItem("judge_id");
  const token = localStorage.getItem("token");

  const aboutData = [
    {
      eventname: "Hackathon 2024",
      eventRanking: [
        { position: 1, delegateId: "ABC123" },
        { position: 2, delegateId: "DEF456" },
        { position: 3, delegateId: "GHI789" },
      ],
    },
    {
      eventname: "Hackathon 2024",
      eventRanking: [
        { position: 1, delegateId: "ABC123" },
        { position: 2, delegateId: "DEF456" },
        { position: 3, delegateId: "GHI789" },
      ],
    },
    {
      eventname: "Hackathon 2024",
      eventRanking: [
        { position: 1, delegateId: "ABC123" },
        { position: 2, delegateId: "DEF456" },
        { position: 3, delegateId: "GHI789" },
      ],
    },
    {
      eventname: "Coding Challenge",
      eventRanking: [
        { delegateId: "JKL012", position: 1 },
        { delegateId: "MNO345", position: 2 },
        { delegateId: "PQR678", position: 3 },
      ],
    },
  ];

  const sponsor_data = [
    {
      name: "Sponsor A",
      image: "./assets./assets/revels-logo.png",
      description: "Description of Sponsor A\n",
    },
    {
      name: "Sponsor B",
      image: "./assets/revels-logo.png",
      description:
        "Description of Sponsor B\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
    },
    {
      name: "Sponsor C",
      image: "./assets/revels-logo.png",
      description:
        "Description of Sponsor C\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou,C",
    },
    {
      name: "Sponsor D",
      image: "./assets/revels-logo.png",
      description:
        "Description of Sponsor D\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
    },
    {
      name: "Sponsor E",
      image: "./assets/revels-logo.png",
      description:
        "Description of Sponsor E\nLorem ipsum dolor sit amet, consecuis aute irure dolor sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labou",
    },
  ];

  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/sponsors"
          element={<Sponsors sponsor_data={sponsor_data} />}
        />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/leaderboard" element={<Leaderboard data={aboutData} />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/proshow" element={<ProshowFinal />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<Login />} />
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
          path="/cc/addContent"
          element={
            // <CCProtect>
            <CCPage />
            // </CCProtect>
          }
        />
        <Route
          path="/cc/logout"
          element={
            <CCProtect>
              <CCLogout />
            </CCProtect>
          }
        />

        <Route path="/judge/login" element={<JudgeLogin />} />

        {judgeId && token ? (
          <>
            <Route path="/judge/score" element={<JudgeScore />} />
            <Route path="/judge/event" element={<JudgeEvent />} />
            <Route path="/judge/event/:id" element={<JudgeSelectTeam />} />
            <Route path="/judge/result/:id" element={<JudgeResult />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/judge/login" />} />
        )}

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
