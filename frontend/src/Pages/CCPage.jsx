import { useState, useEffect } from "react";
import axios from "axios";
import { useAppContext } from "../context/appContext";
// import Leaderboard from "./Leaderboard";

const CriteriaForm = () => {
  const { cc } = useAppContext();
  const [eventId, setEventId] = useState("");
  const [criteriaName, setCriteriaName] = useState("");
  const [description, setDescription] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [roundNumber, setRoundNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [judgeName, setJudgeName] = useState("");
  const [position, setPosition] = useState("");
  const [teamId, setTeamId] = useState("");

  const onSubmit = async (formData) => {
    console.log("Form Data:", formData);
    try {
      //Api Endpoint
      const response = await fetch(
        "http://localhost:17392/leaderboard/addleaderboard",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Submitted data to leaderboard sucessfully");
      } else {
        console.error("Failed to submit data to leaderboard");
      }
    } catch (error) {
      console.error("Error submitting data to leaderboard:", error);
    }
  };

  const LeaderboardhandleSubmit = (e) => {
    e.preventDefault();
    if (!position || !teamId || eventId === "") return;
    onSubmit({ eventId, position, teamId, eventname: cc.name });
    setPosition("");
    setTeamId("");
  };

  useEffect(() => {
    console.log("CC", cc);
    const fetchData = async () => {
      setEventId(cc.eventId);
      let response;
      try {
        response = await axios.get("http://localhost:17392/getCurrentUser");
        console.log("Response", response.data);
        if (response.data && response.data.user && response.data.user._id) {
          // setEventId(response.data.user._id);
          setEventId(cc.eventId);
        }
        console.log("Event ID", eventId);
      } catch (error) {
        console.error("Error fetching event ID:", error);
      } finally {
        console.log("Response", response.data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddJudge = async (e) => {
    e.preventDefault();
    let response;
    try {
      response = await axios.post("http://localhost:17392/judge/add", {
        Name: judgeName,
        Email: email,
        Password: password,
      });
      console.log("Judge added successfully:", response.data);
    } catch (error) {
      console.error("Error adding criteria:", error);
      console.log(response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:17392/criteria/add", {
        eventId: cc.eventId,
        criteria: criteriaName,
        description: description,
        minScore: minScore,
        maxScore: maxScore,
        roundNumber: roundNumber,
      });
      console.log("Criteria added successfully:", response.data);
    } catch (error) {
      console.error("Error adding criteria:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:17392/logout");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-row max-lg:flex-col mx-auto min-w-full justify-around text-[24px] m-[50px]">
      <div className="my-auto">
        <div className="max-w-sm mx-auto mt-8 p-8 isolate aspect-video  w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 ">
          <form onSubmit={handleAddJudge} className="space-y-4 ">
            <div className="">
              <label htmlFor="Add Judge" className="block">
                Add Judge
              </label>
            </div>
            <div>
              <label htmlFor="name" className="block text-start">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={judgeName}
                onChange={(e) => setJudgeName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-start">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-start">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>

            <button
              type="submit"
              className="border-[2px] mx-auto px-10 py-2 text-lg text-[#FFFFFF] rounded-lg flex hover:opacity-80 transition-opacity duration-300"
            >
              Add Judge
            </button>
          </form>
        </div>
      </div>
      <div className="my-auto">
        <div className="max-w-sm mx-auto mt-8 p-8  isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 ">
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <label htmlFor="criteriaId" className="block text-start">
                Event Name: {cc.name}
              </label>
            </div>

            <div>
              <label htmlFor="criteriaName" className="block text-start">
                Criteria Name
              </label>
              <input
                type="text"
                id="criteriaName"
                value={criteriaName}
                onChange={(e) => setCriteriaName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-start">
                Criteria Description
              </label>
              <input
                type="text"
                id="criteriaDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="roundNumber" className="block text-start">
                Round Number
              </label>
              <input
                type="text"
                id="roundNumber"
                value={roundNumber}
                onChange={(e) => setRoundNumber(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="minScore" className="block text-start">
                Min Score
              </label>
              <input
                type="text"
                id="minScore"
                value={minScore}
                onChange={(e) => setMinScore(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="maxScore" className="block text-start">
                Max Score
              </label>
              <input
                type="text"
                id="maxScore"
                value={maxScore}
                onChange={(e) => setMaxScore(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="border-[2px] mx-auto px-10 py-2 text-lg text-[#FFFFFF] rounded-lg flex hover:opacity-80 transition-opacity duration-300"
            >
              Add Criteria
            </button>
          </form>
        </div>
      </div>
      <div className="my-auto">
        <div className="max-w-sm mx-auto mt-8 p-8  isolate aspect-video w-96 rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 ">
          <form onSubmit={LeaderboardhandleSubmit} className="space-y-4 ">
            <div>
              <label htmlFor="criteriaId" className="block text-start">
                Event Name: {cc.name}
              </label>
            </div>
            <div>
              <label htmlFor="roundNumber" className="block text-start">
                TeamID
              </label>
              <input
                type="text"
                placeholder="Team ID"
                value={teamId}
                onChange={(e) => setTeamId(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            {/* <div>
              <label htmlFor="criteriaId" className="block text-start">
                Criteria ID: {criteriaId}
              </label>
            </div> */}
            <div>
              <label htmlFor="criteriaName" className="block text-start">
                Rank
              </label>
              <input
                type="number"
                placeholder="Rank"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
              {/* </div>
            <div>
              <label htmlFor="minScore" className="block text-start">
                Min Score
              </label>
              <input
                type="text"
                id="minScore"
                value={minScore}
                onChange={(e) => setMinScore(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div> */}
              {/* <label htmlFor="maxScore" className="block text-start">
                Max Score
              </label>
              <input
                type="text"
                id="maxScore"
                value={maxScore}
                onChange={(e) => setMaxScore(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              /> */}
            </div>
            <button
              type="submit"
              className="border-[2px] mx-auto px-10 py-2 text-lg text-[#FFFFFF] rounded-lg flex hover:opacity-80 transition-opacity duration-300"
            >
              Submit position
            </button>
          </form>
        </div>
      </div>
      <button className="max-w-[100px]">
        <a
          href="/"
          onClick={logout}
          className="border-[2px] mx-auto px-10 py-2 text-lg text-[#FFFFFF] rounded-lg flex hover:opacity-80 transition-opacity duration-300"
        >
          Logout
        </a>
      </button>
    </div>
  );
};

export default CriteriaForm;
