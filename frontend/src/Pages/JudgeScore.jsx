import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function CriteriaTable({ teamID, eventID }) {
  const navigate = useNavigate();
  const [criteriaData, SetCriteriaData] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [score, setScore] = useState(0);

  const handleBackToEvents = () => {
    navigate("/judge/event");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/judge/login");
  };

  useEffect(() => {
    const fetchCriteria = async () => {
      try {
        const response = await axios.get(
          "http://localhost:17392/event/criteria",
          {
            params: {
              eventId: eventID,
            },
          }
        );
        SetCriteriaData(response.data.criteria);
        console.log("Criteria Data:", response.data.criteria);
      } catch (error) {
        console.error("Error fetching criteria:", error);
      }
    };
    fetchCriteria();
  }, []);

  const handleSubmit = async (criteriaId, score, roundNumber) => {
    try {
      const response = await axios.post("http://localhost:17392/scores/add", {
        eventId: eventID,
        judgeId: "65d1ffd21f0eaa9df724bd36",
        delegateId: teamID,
        criteriaId: criteriaId,
        score: score,
        roundNumber: roundNumber,
      });
      console.log("Scores submitted:", response.data.existingScores);
      alert("Score of that criteria submitted successfully");
    } catch (error) {
      console.error("Error submitting scores:", error);
      alert("Failed to submit scores");
    }
  };

  return (
    <div className="text-white p-8 rounded shadow-md bg-gray-800 col-span-2">
      <h1 className="text-2xl mb-4 font-bold">Event ID: {eventID}</h1>
      <h1 className="text-2xl mb-4 font-bold">Team ID: {teamID}</h1>
      <br />
      <h1 className="text-2xl mb-4 font-bold">Enter Round Number and Score:</h1>
      <div className="p-4">
        <table className="w-full border border-gray-300 rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="border-r px-2 py-2 text-center">Criteria</th>
              <th className="border-r px-2 py-2">Description</th>
              <th className="border-r px-2 py-2 text-center">Round</th>
              <th className="border-r px-2 py-2 text-center">Score</th>
              <th className="border-r px-2 py-2 text-center">Maximum</th>
              <th className="px-2 py-2 text-center">Submit</th>
            </tr>
          </thead>
          <tbody>
            {criteriaData.map((criteria) => (
              <tr key={criteria._id} className="bg-gray-700">
                <td className="border-r px-2 py-2 text-center">
                  {criteria.criteria}
                </td>
                <td className="border-r px-2 py-2">{criteria.description}</td>
                <td className="border-r px-2 py-2 text-center">
                  {criteria.roundNumber}
                </td>
                <td className="border-r px-2 py-2 text-center">
                  <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => setScore(e.target.value)}
                    className="w-16 p-1 border border-gray-300 rounded text-black"
                  />
                </td>
                <td className="border-r px-2 py-2 text-center">
                  {criteria.maxScore}
                </td>
                <td className="px-2 py-2 text-center">
                  <button
                    onClick={() =>
                      handleSubmit(criteria._id, score, roundNumber)
                    }
                    className="mt-2 p-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex">
          <div className="mt-4 p-4">
            <button
              onClick={handleBackToEvents}
              className="mt-2 p-2 bg-green-500 text-white rounded"
            >
              Back to Events page
            </button>
          </div>
          <div className="mt-4 p-4">
            <button
              onClick={logout}
              className="mt-2 p-2 bg-green-500 text-white rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Score() {
  // const { state } = useAppContext();
  const { teamID, eventID } = useAppContext();
  console.log("Team Number:", teamID);
  console.log("Event ID:", eventID);

  return (
    <div className="w-screen h-screen bg-gray-800">
      <CriteriaTable teamID={teamID} eventID={eventID} />
    </div>
  );
}

export default Score;
