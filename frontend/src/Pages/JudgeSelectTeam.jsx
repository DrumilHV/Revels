import { React, useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const data = [
  {
    _id: "65ddec8b34dd3cd520f62c0d",
    user_type: "MAHE",
    team_type: 1,
    team_leader: "ABHIMANYU VASUDEV",
    team_id: "100325",
    delegate_id: "102492",
    mobile: "9620784541",
    event_name: "THEME VOGUE BLITZ",
  },
  {
    _id: "7a92e61b9a1d2bf39c764f5e",
    user_type: "Non-MAHE",
    team_type: 2,
    team_leader: "Arnav",
    team_id: "100326",
    delegate_id: "102493",
    mobile: "9876543210",
    event_name: "Some Other Event",
  },
];

function Results() {
  // Initialize dispatch
  const { setTeamID, setEventID } = useAppContext(); // Import setTeamNumber and setEventID from context

  const navigate = useNavigate();

  const { id } = useParams();
  const eventID = id;
  console.log("Event ID:", eventID);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:17392/event/getTeams",
          {
            params: {
              eventId: eventID,
            },
          }
        );
        setTableData(data);
        //console.log("Table Data:", response.data.teams);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  function handleCellClick(teamID) {
    // Update the global state
    setTeamID(teamID); // Set the team number
    setEventID(eventID); // Set the event ID

    navigate("/judge/score");
    // window.location.href("/score");
    // Show the score in an alert
    alert(`Team ID: ${teamID}, Event ID: ${eventID}`);
  }

  const handleBackToEvents = () => {
    navigate("/judge/event");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/judge/login");
  };

  return (
    <div className="w-screen h-screen p-8 rounded shadow-md bg-gray-800">
      <h1 className="text-2xl mb-4 font-bold text-white">
        Event ID: {eventID}
      </h1>
      <h1 className="text-2xl mb-4 font-bold text-white">Select Team ID</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-white">Team Name</th>
            {/* <th className="text-left text-white">Scores</th> */}
          </tr>
        </thead>
        <tbody>
          {tableData.map((team, index) => (
            <tr key={index}>
              <td
                className="text-white"
                onClick={handleCellClick.bind(this, team.team_id)}
              >
                {team.team_id}
              </td>
              {/* <td>
                <ul className="list-disc list-inside text-white">
                  {team.scores.map((score, index) => (
                    <li key={index}>
                      Criteria ID: {score.criteriaId}, Score: {score.score}
                    </li>
                  ))}
                </ul>
              </td> */}
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
  );
}

export default Results;
