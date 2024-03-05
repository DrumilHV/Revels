import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Results() {
  const navigate = useNavigate();
  const { id } = useParams();
  const eventID = id;
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTeamsAndScores = async () => {
      try {
        const response = await axios.get(
          "http://localhost:17392/event/getEventTeams",
          {
            params: {
              eventId: eventID,
            },
          }
        );
        console.log("After getting teams");
        console.log("Response:", response.data);
        const teams = response.data;
        const updatedTeams = await Promise.all(
          teams.map(async (team) => {
            console.log("Delegate ID:", team.team_id);
            try {
              const scoreResponse = await axios.post(
                "http://localhost:17392/scores/final_score",
                {
                  delegateId: team._id,
                }
              );
              console.log("Score Response:", scoreResponse.data);
              const finalScore = scoreResponse.data.totalScore;
              const roundScores = scoreResponse.data.roundScores;
              return {
                ...team,
                roundScore: roundScores,
                score: finalScore,
                hasScore: true,
              };
            } catch (error) {
              console.error("Error calculating final score:", error);
              return { ...team, hasScore: false };
            }
          })
        );
        setTableData(updatedTeams);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeamsAndScores();
  }, [eventID]);

  const handleBackToEvents = () => {
    navigate("/judge/event");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/judge/login");
  };

  return (
    <div className="w-screen h-screen p-8 rounded overflow-x-hidden">
      <h1 className="text-2xl mb-4 font-bold text-white ">
        Event ID: {eventID}
      </h1>
      <div className="overflow-x-scroll">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="text-center text-white border p-4">Team Name</th>
              <th className="text-center text-white border p-4">Round 1</th>
              <th className="text-center text-white border p-4">Round 2</th>
              <th className="text-center text-white border p-4">Round 3</th>
              <th className="text-center text-white border p-4">Round 4</th>
              <th className="text-center text-white border p-4">Final Score</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((team) => (
              <tr key={team.team_id}>
                <td className="text-white text-center border cursor-pointer p-4">
                  {team.team_id}
                </td>

                <td className="text-white text-center border p-4">
                  {team?.roundScore[0] || "Yet to be scored"}
                </td>
                <td className="text-white text-center border p-4">
                  {team?.roundScore[1] || "Yet to be scored"}
                </td>
                <td className="text-white text-center border p-4">
                  {team?.roundScore[2] || "Yet to be scored"}
                </td>
                <td className="text-white text-center border p-4">
                  {team?.roundScore[3] || "Yet to be scored"}
                </td>
                <td className="text-white text-center border p-4">
                  {team.hasScore ? (
                    `${team.score} points`
                  ) : (
                    <span className="text-white text-center borderblack p-4">
                      Yet to be scored
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-4 p-4">
          <div
            onClick={handleBackToEvents}
            className="mt-2 p-2 bg-black text-white rounded"
          >
            Back to Events page
          </div>
        </div>
        <div className="p-4">
          <div
            onClick={logout}
            className="mt-2 p-2 bg-black text-white rounded"
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
