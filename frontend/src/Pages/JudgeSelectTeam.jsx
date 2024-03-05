import { React, useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function SelectTeams() {
  // Initialize dispatch
  const { setTeamID, setEventID } = useAppContext(); // Import setTeamNumber and setEventID from context

  const navigate = useNavigate();

  const { id } = useParams();
  const eventID = id;
  console.log("Event ID:", eventID);

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          "http://localhost:17392/event/getEventTeams",
          {
            params: {
              eventId: eventID,
            },
          }
        );
        setTableData(response.data);
        console.log("Table Data:", response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchTeams();
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

  const gotoResults = () => {
    navigate(`/judge/result/${eventID}`);
  };

  return (
    <>
      <div className="w-screen h-screen lg:p-8 md:p-4 sm:p-2 rounded">
        <div className="w-full min-h-full flex flex-col items-center justify-center border-2 rounded-md">
          <h1 className="lg:text-3xl sm:text-xl mb-8 font-bold text-white border-b-2 p-4">
            Event ID: {eventID}
          </h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-center text-white font-medium text-3xl border-t-2 border-b-2">
                  <div className="w-inherit h-full m-[0.5rem] p-[0.6rem] lg:text-3xl sm:text-xl">
                    Select Team ID's
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="flex gap-x-10 justify-center items-center m-[30px] flex-wrap">
              {tableData.map((team, index) => (
                <tr key={index}>
                  <td>
                    <div
                      className="p-6 border-r-2 border-l-2 hover:opacity-80 hover:underline transition-opacity ease-in text-white text-2xl cursor-pointer mt-2"
                      onClick={handleCellClick.bind(this, team.team_id)}
                    >
                      {team.team_id}
                    </div>
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
          {/* <div className="w-full border-b-2 border-t-2 mb-2">
            <div className="w-inherit h-full m-[0.5rem] pt-[3.8rem]"></div>
          </div> */}
          <div className="flex flex-col items-center">
            <div className="border-t-2 border-b-2 p-4">
              <button
                onClick={handleBackToEvents}
                className="p-2 bg-black text-white rounded"
              >
                Back to Events page
              </button>
            </div>
            <div className="mt-6 mb-2 border-t-2 border-b-2 p-[0.8rem]">
              <button
                onClick={gotoResults}
                className="p-2 bg-black text-white rounded"
              >
                View Results
              </button>
            </div>

            <div className="mt-6 mb-2 border-t-2 border-b-2 p-[0.8rem]">
              <button
                onClick={logout}
                className="p-2 bg-black text-white rounded"
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

export default SelectTeams;
