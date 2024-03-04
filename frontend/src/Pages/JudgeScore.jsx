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
    var judgeId = localStorage.getItem("judge_id");
    try {
      const response = await axios.post("http://localhost:17392/scores/add", {
        eventId: eventID,
        judgeId: judgeId,
        delegateId: "65d1073abfc0dc84b5397ee1",
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
    <>
      <div className="text-black lg:p-8 pt-10 rounded col-span-2">
        <div className="flex flex-col justify-center text-center gap-y-2 text-[#ffffff]">
          <h1 className="lg:text-2xl sm:text-lg mb-4 font-bold">
            Event ID: {eventID}
          </h1>
          <h1 className="lg:text-2xl sm:text-lg mb-4 font-bold">
            Team ID: {teamID}
          </h1>
        </div>
        <h1 className="lg:text-2xl sm:text-lg mt-8 mb-4 ml-4 font-bold text-[#ffffff]">
          Enter Score for each Criteria:
        </h1>
        <div className="p-4">
          <table className="w-full border rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="border-r px-2 py-2 text-center shadow-md">
                  Criteria
                </th>
                <th className="border-r px-2 py-2 shadow-md">Description</th>
                <th className="border-r px-2 py-2 text-center shadow-md">
                  Round
                </th>
                <th className="border-r px-2 py-2 text-center shadow-md">
                  Score
                </th>
                <th className="border-r px-2 py-2 text-center shadow-md">
                  Maximum
                </th>
                <th className="px-2 py-2 text-center shadow-md">Submit</th>
              </tr>
            </thead>
            <tbody>
              {criteriaData.map((criteria) => (
                <tr key={criteria._id} className="">
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
          <div className="flex flex-col justify-center items-center">
            <div className="mt-4 p-4">
              <button
                onClick={handleBackToEvents}
                className="mt-2 p-2 bg-black text-white rounded"
              >
                Back to Events page
              </button>
            </div>
            <div className="p-4">
              <button
                onClick={logout}
                className="mt-2 p-2 bg-black text-white rounded"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Score() {
  // const { state } = useAppContext();
  const { teamID, eventID } = useAppContext();
  console.log("Team Number:", teamID);
  console.log("Event ID:", eventID);

  return (
    <div className="w-screen h-screen">
      <CriteriaTable teamID={teamID} eventID={eventID} />
    </div>
  );
}

export default Score;
