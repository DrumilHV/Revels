import { useState, useEffect } from "react";
import axios from "axios";

const CriteriaForm = () => {
  const [eventId, setEventId] = useState("Not fetched");
  const [criteriaId, setCriteriaId] = useState("Not Made");
  const [criteriaName, setCriteriaName] = useState("");
  const [minScore, setMinScore] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [roundNumber, setRoundNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [judgeName, setJudgeName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:17392/getCurrentUser"
        );
        if (response.data && response.data.user && response.data.user._id) {
          setEventId(response.data.user._id);
        }
      } catch (error) {
        console.error("Error fetching event ID:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (eventId !== "Not fetched") {
      setCriteriaId(generateCriteriaId(eventId));
    }
  }, [eventId]);

  const generateCriteriaId = (eventId) => {
    return `${eventId}_criteria_${Math.floor(Math.random() * 1000)}`;
  };

  const handleAddJudge = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:17392/judge/add", {
        judgeName,
        email,
        password,
      });
      console.log("Criteria added successfully:", response.data);
    } catch (error) {
      console.error("Error adding criteria:", error);
      console.log(response.data);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:17392/addCriteria", {
        eventId,
        criteriaId,
        criteria: criteriaName,
        description: "",
        minScore,
        maxScore,
        roundNumber,
      });
      console.log("Criteria added successfully:", response.data);
    } catch (error) {
      console.error("Error adding criteria:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
                Event ID: {eventId}
              </label>
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
              <label htmlFor="criteriaId" className="block text-start">
                Criteria ID: {criteriaId}
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
    </div>
  );
};

export default CriteriaForm;
